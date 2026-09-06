const traceframeOpenProcess=openProcess;
openProcess=total=>{
  traceframeOpenProcess(total);
  const cancel=document.querySelector('#processCancel');
  cancel.disabled=false;
  cancel.textContent='Cancel after current file';
  document.querySelector('#processElapsed').textContent='00:00 elapsed';
  document.querySelector('#processSummary').textContent='You can continue reviewing the case.';
};
const traceframeV05Manifest=manifest;
manifest=()=>({...traceframeV05Manifest(),version:'0.5.0'});
