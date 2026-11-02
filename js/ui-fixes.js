/* Anchor the existing answer fields to the artwork; retain their event handlers. */
(function () {
  if (document.body.classList.contains('ui-reading')) {
    function tidyHeading() {
      document.querySelectorAll('.page_sub_title > p').forEach(p=>{
        if(!p.textContent.trim() && !p.querySelector('img,audio,button')) p.remove();
      });
    }
    new MutationObserver(tidyHeading).observe(document.body,{childList:true,subtree:true});
    tidyHeading();
  }
  if (!document.body.classList.contains('ui-match')) return;
  const positions=location.pathname.includes('Playhouse_G3_U8/')
    ? [[10,12],[90,12],[10,76],[47,76],[90,76]]
    : [[5,5],[49,8],[81,6],[5,39],[57,36],[81,41],[8,70],[28,68],[48,68],[70,73],[91,73]];
  function anchor() {
    const picture=document.querySelector('.q_image');
    if (!picture) return;
    document.querySelectorAll('.que[status="fill"]').forEach((field,i)=>{
      if(field.parentElement===picture)return;
      picture.appendChild(field);
      field.style.left=positions[i][0]+'%';field.style.top=positions[i][1]+'%';
      field.querySelector('input').setAttribute('aria-label','Picture '+(i+1)+' matching letter');
    });
  }
  new MutationObserver(anchor).observe(document.body,{childList:true,subtree:true});
  anchor();
})();

/* Measure the actual fixed controls rather than assuming a desktop height. */
(function(){
 if(!document.body.classList.contains('ui-repair'))return;
 function fit(){
  const content=document.querySelector('.content_wrap');
  if(!content)return;
  let bottom=window.innerHeight;
  document.querySelectorAll('footer,.sub_footer').forEach(el=>{
   const r=el.getBoundingClientRect();
   if(r.height>0 && r.top>0 && getComputedStyle(el).display!=='none') bottom=Math.min(bottom,r.top);
  });
  content.style.setProperty('--activity-viewport',Math.max(180,bottom-content.getBoundingClientRect().top-12)+'px');
 }
 window.addEventListener('resize',fit);
 window.addEventListener('load',fit);
 const observer=new ResizeObserver(fit);
 document.querySelectorAll('header,footer,.sub_footer').forEach(el=>observer.observe(el));
 fit();
})();

/* Fit legacy fixed-width text/artwork without changing its internal coordinates.
   Drawing and drag activities retain their native coordinate system and scrolling. */
(function(){
 if(!document.body.classList.contains('ui-repair'))return;
 let queued=false;
 function fitWide(){
  queued=false;
  const content=document.querySelector('.content_wrap'), area=document.querySelector('.activity_area')||document.querySelector('.content_wrap > .options');
  if(!content||!area)return;
  area.style.zoom='';area.style.width='';area.style.flexShrink='';
  if(innerWidth>1100||area.querySelector('canvas,.ui-draggable,.ui-droppable')||/linedraw|drag/i.test(area.dataset.type||area.dataset.activity||''))return;
  const box=content.getBoundingClientRect(),style=getComputedStyle(content);
  const available=content.clientWidth-parseFloat(style.paddingLeft)-parseFloat(style.paddingRight);
  let left=area.getBoundingClientRect().left,right=left+available;
  area.querySelectorAll('*').forEach(el=>{const r=el.getBoundingClientRect(),s=getComputedStyle(el);if(r.width&&r.height&&s.position!=='fixed'&&s.display!=='none'){left=Math.min(left,r.left);right=Math.max(right,r.right);}});
  const needed=Math.ceil(right-left);
  if(needed>available+20){area.style.width=needed+'px';area.style.flexShrink='0';area.style.zoom=String(available/needed);}
 }
 function schedule(){if(!queued){queued=true;requestAnimationFrame(()=>requestAnimationFrame(fitWide));}}
 window.addEventListener('resize',schedule);window.addEventListener('load',schedule);
 new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});
 document.fonts.ready.then(schedule);schedule();
})();

/* Shrink each lesson as the available laptop viewport shrinks. */
(function(){
 if(!document.body.classList.contains('ui-repair'))return;
 let pending=false;
 function scaleLesson(){
  pending=false;
  const c=document.querySelector('.content_wrap'),a=document.querySelector('.options');
  if(!c||!a)return;
  a.style.zoom='';
  if(innerWidth>1920)return;
  const r=a.getBoundingClientRect();
  let bottom=innerHeight-85;
  document.querySelectorAll('footer,.sub_footer').forEach(e=>{const b=e.getBoundingClientRect();if(b.height&&b.top>0)bottom=Math.min(bottom,b.top-12)});
  const scale=Math.min(1,innerWidth/1920,innerHeight/1000);
  // Zoom keeps all labels and artwork in one coordinate system.
  a.style.zoom=String(Math.max(.5,scale));
 }
 function queue(){if(!pending){pending=true;requestAnimationFrame(()=>requestAnimationFrame(scaleLesson))}}
 addEventListener('resize',queue);addEventListener('load',queue);
 new MutationObserver(queue).observe(document.body,{childList:true,subtree:true});
 document.fonts.ready.then(queue);queue();
})();
(function(){
 if(!document.body.classList.contains('ui-repair'))return;
 let queued=false;
 function fitVideo(){
  queued=false;
  document.querySelectorAll('#monitor').forEach(frame=>{
   const video=frame.querySelector('video');if(!video)return;
   const ratio=video.videoWidth&&video.videoHeight?video.videoWidth/video.videoHeight:16/9;
   let bottom=innerHeight-20;
   document.querySelectorAll('footer,.sub_footer').forEach(e=>{const r=e.getBoundingClientRect();if(r.height&&r.top>0)bottom=Math.min(bottom,r.top-20)});
   const top=frame.getBoundingClientRect().top+(frame.closest(".content_wrap")?.scrollTop||0);
   const height=Math.max(180,bottom-top-20);
   const width=Math.min(1100,innerWidth*.85,height*ratio);
   frame.style.setProperty('--video-frame-width',width+'px');
   frame.style.setProperty('--video-ratio',String(ratio));
  });
 }
 function queue(){if(!queued){queued=true;requestAnimationFrame(()=>requestAnimationFrame(fitVideo))}}
 addEventListener('resize',queue);addEventListener('load',queue);
 document.addEventListener('loadedmetadata',queue,true);
 document.addEventListener('fullscreenchange',queue);
 new MutationObserver(queue).observe(document.body,{childList:true,subtree:true});queue();
})();

