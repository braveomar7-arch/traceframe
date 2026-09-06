const traceframeSmallFileIngest=ingest;
const LARGE_FILE_THRESHOLD=256*1024*1024;
function streamingHash(file){
  return new Promise((resolve,reject)=>{
    const worker=new Worker('hash-worker.js');
    const started=performance.now();
    worker.onmessage=e=>{
      const m=e.data;
      if(m.type==='progress'){
        const pct=Math.min(99,Math.floor(m.loaded/file.size*100));
        const elapsed=(performance.now()-started)/1000;
        const rate=m.loaded/Math.max(elapsed,.1);
        const remaining=(file.size-m.loaded)/Math.max(rate,1);
        document.querySelector('#processBar').style.width=pct+'%';
        document.querySelector('#processPercent').textContent=pct+'%';
        document.querySelector('#processStage').textContent=`Streaming SHA-256 · ${pct}%`;
        document.querySelector('#processEta').textContent=`~${processTime(remaining*1000)} remaining`;
        document.querySelector('#processSize').textContent=`${human(m.loaded)} / ${human(file.size)}`;
      }
      if(m.type==='done'){worker.terminate();resolve(m.hash)}
      if(m.type==='error'){worker.terminate();reject(new Error(m.message))}
    };
    worker.onerror=e=>{worker.terminate();reject(e)};
    worker.postMessage({file,chunkSize:16*1024*1024});
  });
}
ingest=async function(file){
  if(file.size<LARGE_FILE_THRESHOLD)return traceframeSmallFileIngest(file);
  const at=new Date().toISOString();
  processLog('Large-file mode enabled: bounded-memory streaming.');
  processLog('Structured extraction deferred; calculating full SHA-256.');
  const head=await file.slice(0,12).arrayBuffer();
  const hash=await streamingHash(file);
  const sig=signature(head),duplicate=state.files.some(f=>f.hash===hash),ext=(file.name.split('.').pop()||'').toLowerCase();
  state.files.push({name:file.name,size:file.size,type:file.type||ext.toUpperCase()||'UNKNOWN',signature:sig,hash,duplicate,events:0,ingested:at,extraction:'hash_only_large_file',hash_mode:'streaming_16_mib_chunks'});
  state.chain.push({action:'evidence_ingested',at,evidence:file.name,sha256:hash,duplicate,method:'streaming_sha256',chunk_size:16777216});
};
const traceframeLargeManifest=manifest;
manifest=()=>({...traceframeLargeManifest(),version:'0.5.0',large_file_handling:{threshold_bytes:LARGE_FILE_THRESHOLD,hash:'full SHA-256',mode:'streaming background worker',chunk_bytes:16777216,structured_extraction:'deferred'}});
