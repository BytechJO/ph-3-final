/* Existing cards are moved, preserving their audio listeners and reading order. */
(function () {
 const imageTop = {1:.93,4:.50,5:.25,6:.25,8:.49,9:.33,10:.50,11:.32,12:.41,13:.30,15:.18};
 function init() {
  document.querySelectorAll('.reading_slide').forEach(book => {
   const frame=book.querySelector('.col_grid_container') || book;
   const picture=frame && frame.querySelector(':scope > img:first-child');
   const group=frame && frame.querySelector('.snap_group_all');
   if (!picture || !group || book.classList.contains('notebook-reading')) return;
   const match=location.pathname.match(/Playhouse_G3_U(\d+)/); const unit=Number(match && match[1]);
   if (!(unit in imageTop)) return;
   book.classList.add('notebook-reading'); frame.classList.add('notebook-frame');
   const left=document.createElement('div'), right=document.createElement('div');
   left.className='notebook-page'; right.className='notebook-page notebook-page-right';
   Array.from(group.children).forEach(row => {
    Array.from(row.children).forEach((card,index) => (index===0?left:right).appendChild(card));
    row.remove();
   });
   group.append(left,right); right.style.height=((imageTop[unit]-.13)*100)+'%';
   function fit() {
    if (innerWidth<=700) return;
    let size=Math.min(23,frame.clientWidth*.019);
    for (const page of [left,right]) page.style.fontSize=size+'px';
    while(size>12 && [left,right].some(page=>page.scrollHeight>page.clientHeight+1)) {
     size-=.25; for(const page of [left,right]) page.style.fontSize=size+'px';
    }
   }
   new ResizeObserver(() => requestAnimationFrame(fit)).observe(frame); window.addEventListener('resize',fit); window.addEventListener('load',() => requestAnimationFrame(fit)); picture.addEventListener('load',fit);
   document.fonts.ready.then(fit); fit();
  });
 }
 if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
 window.addEventListener('load',init);
 new MutationObserver(init).observe(document.body,{childList:true,subtree:true});
})();



