// MindAR A1-b app logic
function inchToMeters(diagInch){ const d=diagInch*0.0254; const s=d/Math.sqrt(337); return {w:16*s, h:9*s}; }

const els = {
  sel: null, info: null, opacity: null, outline: null, shotBtn: null,
  panel: null, eT:null, eR:null, eB:null, eL:null
};

function updateSize(){
  const inch = parseInt(els.sel.value,10);
  const {w,h} = inchToMeters(inch);
  els.panel.setAttribute('width', w);
  els.panel.setAttribute('height', h);
  els.info.textContent = `≈ ${(w*100).toFixed(1)} × ${(h*100).toFixed(1)} cm (B×H)`;
  // update outline to match plane
  setEdges(w,h);
}

function setEdges(w,h){
  const show = els.outline.checked;
  const col = '#00d1ff';
  const lw = 4;
  els.eT.setAttribute('line', `start: ${-w/2} 0 ${-h/2}; end: ${w/2} 0 ${-h/2}; color: ${col}; linewidth: ${lw}`);
  els.eR.setAttribute('line', `start: ${w/2} 0 ${-h/2}; end: ${w/2} 0 ${h/2}; color: ${col}; linewidth: ${lw}`);
  els.eB.setAttribute('line', `start: ${w/2} 0 ${h/2}; end: ${-w/2} 0 ${h/2}; color: ${col}; linewidth: ${lw}`);
  els.eL.setAttribute('line', `start: ${-w/2} 0 ${h/2}; end: ${-w/2} 0 ${-h/2}; color: ${col}; linewidth: ${lw}`);
  els.eT.setAttribute('visible', show);
  els.eR.setAttribute('visible', show);
  els.eB.setAttribute('visible', show);
  els.eL.setAttribute('visible', show);
}

window.addEventListener('DOMContentLoaded',()=>{
  els.sel = document.getElementById('sizeSel');
  els.info = document.getElementById('sizeInfo');
  els.opacity = document.getElementById('opacity');
  els.outline = document.getElementById('outlineChk');
  els.shotBtn = document.getElementById('shotBtn');

  els.panel = document.getElementById('panel');
  els.eT = document.getElementById('edgeTop');
  els.eR = document.getElementById('edgeRight');
  els.eB = document.getElementById('edgeBottom');
  els.eL = document.getElementById('edgeLeft');

  els.sel.addEventListener('change', updateSize);
  els.outline.addEventListener('change', ()=>{
    const inch = parseInt(els.sel.value,10); const {w,h} = inchToMeters(inch); setEdges(w,h);
  });
  els.opacity.addEventListener('input', ()=>{
    els.panel.setAttribute('material', `src:#panelTex; transparent:true; opacity:${parseFloat(els.opacity.value)}`);
  });
  els.shotBtn.addEventListener('click', ()=>{
    // simple screenshot using canvas capture if available
    const canvas = document.querySelector('canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `communicativ-ar-${els.sel.value}inch.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  });

  updateSize();
});
