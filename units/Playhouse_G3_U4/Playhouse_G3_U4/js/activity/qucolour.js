/* Workbook p22: colour only the qu pictures, then write all six words. */
var stereo_data = null;
var qucolour_data = [
 {word:'queen', file:'img02.svg', colour:true},
 {word:'key', file:'img03.svg', colour:false},
 {word:'quilt', file:'img04.svg', colour:true},
 {word:'quarter', file:'img05-01.svg', colour:true},
 {word:'kite', file:'img06-01.svg', colour:false},
 {word:'cat', file:'img07-01.svg', colour:false}
];
function buildQuColourBody(){
 var html='<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1"><a href=""><img src="../images/icons/back_btn.png"></a></div><div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1"><a href=""><img src="../images/icons/next_btn.png"></a></div>';
 html+='<div class="act_head_group"><img class="mainTitle" src="../images/pages/sb-icons/phonics-sent-build.png"><div class="activityHeading"><div class="audioIcon off" data-audio="../audios/page_22/1_Colour_the_‘qu’_words_Then_write_the_words.mp3"><p class="qu-instruction">1 Colour the ‘qu’ words. Then write the words.</p></div></div></div><div class="options qu-options"><div class="qu-palette" aria-label="Colours">';
 [['Blue','#43a7e8'],['Red','#ef665a'],['Green','#80c65d'],['Yellow','#ffd65c'],['Purple','#b391dd'],['Orange','#f5a14c']].forEach(function(c,i){html+='<button type="button" class="qu-swatch'+(i===0?' active':'')+'" data-colour="'+c[1]+'" aria-label="'+c[0]+'" aria-pressed="'+(i===0)+'" style="background:'+c[1]+'"></button>';});
 html+='</div><div class="qu-grid">';
 qucolour_data.forEach(function(q,i){html+='<div class="qu-card" data-index="'+i+'"><canvas width="420" height="420" role="img" aria-label="Picture '+(i+1)+' to colour"></canvas><div class="qu-answer"><input aria-label="Word '+(i+1)+'" autocomplete="off" spellcheck="false"><span class="qu-result" aria-live="polite"></span></div><div class="qu-tools"><button type="button" class="qu-undo">Undo</button><button type="button" class="qu-clear">Clear colours</button></div></div>';});
 html+='</div></div>';$('.activity_area').append(html);setLoadedStatus(getCurrFileOrDirectory('file'));
}
window.QuColour=function(obj){
 this.root=obj[0];this.colour='#43a7e8';this.cards=[];var self=this;
 this.root.querySelectorAll('.qu-card').forEach(function(el,i){
  var canvas=el.querySelector('canvas'),ctx=canvas.getContext('2d',{willReadFrequently:true});
  var card={el:el,canvas:canvas,ctx:ctx,base:null,history:[],painted:false};self.cards.push(card);
  var img=new Image();img.onload=function(){ctx.fillStyle='#fff';ctx.fillRect(0,0,420,420);var scale=380/Math.max(img.width,img.height);ctx.drawImage(img,(420-img.width*scale)/2,(420-img.height*scale)/2,img.width*scale,img.height*scale);card.base=ctx.getImageData(0,0,420,420);};img.src='../images/pages/activities/qu/'+qucolour_data[i].file;
  canvas.addEventListener('click',function(e){if(!card.base)return;var b=canvas.getBoundingClientRect();self.paint(card,Math.floor((e.clientX-b.left)*420/b.width),Math.floor((e.clientY-b.top)*420/b.height));});
  el.querySelector('input').addEventListener('input',function(){self.changed();});
  el.querySelector('.qu-clear').addEventListener('click',function(){if(card.base){card.history.push(card.ctx.getImageData(0,0,420,420));card.ctx.putImageData(card.base,0,0);self.updatePainted(card);self.changed();}});
  el.querySelector('.qu-undo').addEventListener('click',function(){var last=card.history.pop();if(last){card.ctx.putImageData(last,0,0);self.updatePainted(card);self.changed();}});
 });
 this.root.querySelectorAll('.qu-swatch').forEach(function(b){b.addEventListener('click',function(){self.colour=b.dataset.colour;self.root.querySelectorAll('.qu-swatch').forEach(function(s){s.classList.toggle('active',s===b);s.setAttribute('aria-pressed',s===b?'true':'false');});});});
};
QuColour.prototype={
 changed:function(){this.root.querySelectorAll('.qu-result').forEach(function(e){e.textContent='';});$('.checkBtn,.resetBtn').removeClass('disabled');},
 updatePainted:function(c){var a=c.ctx.getImageData(0,0,420,420).data,b=c.base.data;c.painted=false;for(var i=0;i<a.length;i+=4){if(a[i]!==b[i]||a[i+1]!==b[i+1]||a[i+2]!==b[i+2]){c.painted=true;break;}}},
 paint:function(c,x,y){
  var w=420;if(x<0||y<0||x>=w||y>=w)return;
  var img=c.ctx.getImageData(0,0,w,w),d=img.data,start=(y*w+x)*4,seed=[d[start],d[start+1],d[start+2]];
  // Preserve dark outlines. Flood regions touching the canvas edge are outside the artwork.
  if(Math.max.apply(null,seed)<100)return;
  var seen=new Uint8Array(w*w),stack=[y*w+x],region=[],outside=false;
  while(stack.length){var n=stack.pop();if(seen[n])continue;seen[n]=1;var k=n*4;if(Math.abs(d[k]-seed[0])>28||Math.abs(d[k+1]-seed[1])>28||Math.abs(d[k+2]-seed[2])>28)continue;region.push(n);var px=n%w,py=Math.floor(n/w);if(px===0||py===0||px===w-1||py===w-1)outside=true;if(px>0)stack.push(n-1);if(px<w-1)stack.push(n+1);if(py>0)stack.push(n-w);if(py<w-1)stack.push(n+w);}
  if(outside||region.length<4)return;
  c.history.push(c.ctx.getImageData(0,0,w,w));if(c.history.length>20)c.history.shift();
  var rgb=this.colour.match(/[a-f0-9]{2}/gi).map(function(v){return parseInt(v,16);});region.forEach(function(n){d[n*4]=rgb[0];d[n*4+1]=rgb[1];d[n*4+2]=rgb[2];});c.ctx.putImageData(img,0,0);this.updatePainted(c);this.changed();
 },
 validate:function(){var all=true;this.cards.forEach(function(c,i){var q=qucolour_data[i],ok=c.el.querySelector('input').value.trim().toLowerCase()===q.word&&c.painted===q.colour;var result=c.el.querySelector('.qu-result');result.textContent=ok?'✓':'✗';result.style.color=ok?'#178d47':'#d82e2e';result.setAttribute('aria-label',ok?'Correct':'Try again');all=all&&ok;});showFeedback(true,all);$('.resetBtn').removeClass('disabled');},
 reset:function(){this.cards.forEach(function(c){if(c.base)c.ctx.putImageData(c.base,0,0);c.painted=false;c.history=[];c.el.querySelector('input').value='';c.el.querySelector('.qu-result').textContent='';});$('.checkBtn').addClass('disabled');},
 initialSettings:function(){this.reset();initialSettingsDone(1);}
};
