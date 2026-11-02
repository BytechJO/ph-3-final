/* Move existing nodes only: audio, answer and pointer handlers stay attached. */
(() => {
 function arrange(){
  if(document.body.classList.contains('g3-n43')){
   const image=document.querySelector('.q_image');
   if(image&&image.nextElementSibling?.classList.contains('group_elm'))image.parentNode.appendChild(image);
   const points=[[55,29],[77,39],[59,51],[43,58],[42,42],[43,24],[59,85],[51,90],[32,66],[23,58],[10,61]];
   if(image)document.querySelectorAll('.group_elm .que[status="fill"]').forEach(e=>{const point=points[Number(e.dataset.qno)-12];if(point){e.style.setProperty('left',point[0]+'%','important');e.style.setProperty('top',point[1]+'%','important');image.appendChild(e);}});
  }
  if(document.body.classList.contains('g3-poem')){
   const board=document.querySelector('.grid_columns_container');
   if(board&&!board.dataset.layoutReady){
    const pic=board.querySelector('.text_img')||board.querySelector('.ss_text img');
    if(pic){const audio=pic.closest('.audioIcon');if(audio&&audio!==pic)pic.addEventListener('click',()=>audio.click());pic.classList.add('g3-poem-image');board.appendChild(pic);board.dataset.layoutReady='1';}
   }
  }
  document.querySelectorAll('.g3-pickpoem .q_part').forEach(e=>{if(!e.textContent.trim())e.style.display='none';});
 }
 const observer=new MutationObserver(arrange);
 observer.observe(document.body,{childList:true,subtree:true});
 arrange();
})();

