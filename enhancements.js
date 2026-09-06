const traceframeBaseManifest=manifest;
manifest=()=>({...traceframeBaseManifest(),version:'0.3.0'});
renderManifest();
document.querySelector('#exportTop').onclick=()=>{
  state.chain.push({action:'case_bundle_exported',at:new Date().toISOString(),actor:state.meta.examiner||'local_operator'});
  download(`${state.caseId}-traceframe-v0.3.json`,JSON.stringify(casePayload(),null,2));
  toast('Complete practitioner case bundle exported');
};
