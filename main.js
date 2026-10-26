/* ====== CONFIG ====== */
const WA_NUMBER='51922977009';   // tu número con código de país, sin + ni espacios
const EMAIL='andreanycholle15@gmail.com';

gsap.registerPlugin(ScrollTrigger);
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
let sp=0,mX=0,mY=0,mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my,lt=0,MV=0,moved=false;
const COL=['#ff9ec7','#b9a2ff','#ffe2b8'];
const _st={};const starSprite=col=>_st[col]||(_st[col]=(()=>{const k=document.createElement('canvas');k.width=k.height=64;const q=k.getContext('2d'),g=q.createRadialGradient(32,32,0,32,32,30);g.addColorStop(0,col+'cc');g.addColorStop(.35,col+'33');g.addColorStop(1,col+'00');q.fillStyle=g;q.fillRect(0,0,64,64);
q.beginPath();q.moveTo(32,2);q.quadraticCurveTo(35,29,62,32);q.quadraticCurveTo(35,35,32,62);q.quadraticCurveTo(29,35,2,32);q.quadraticCurveTo(29,29,32,2);q.fillStyle='#fff';q.fill();return k})());
const TA='restart none restart reset';
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('on'),1900)};

/* scroll suave (Lenis) */
const lenis=new Lenis({lerp:.085});
lenis.on('scroll',()=>{ScrollTrigger.update();sp=scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight);$('.progress').style.width=sp*100+'%'});
gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0);
$$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();lenis.scrollTo(a.getAttribute('href'))}));

/* cursor + destellos */
addEventListener('mousemove',e=>{moved=true;mx=e.clientX;my=e.clientY;mX=mx/innerWidth-.5;mY=my/innerHeight-.5;MV=Math.min(1,MV+Math.hypot(e.movementX||0,e.movementY||0)/70);
$('.cur').style.left=mx+'px';$('.cur').style.top=my+'px';
const n=performance.now();if(n-lt>110){lt=n;const s=document.createElement('span');s.className='sp';s.textContent=['✦','✿','·','♡'][Math.random()*4|0];s.style.left=mx+'px';s.style.top=my+'px';s.style.color=COL[Math.random()*3|0];document.body.appendChild(s);gsap.to(s,{y:24,x:(Math.random()-.5)*30,opacity:0,scale:.2,duration:1.1,onComplete:()=>s.remove()})}});
addEventListener('click',e=>{window.galaxyPulse&&galaxyPulse(e.clientX,e.clientY)});
(function l(){cx+=(mx-cx)*.15;cy+=(my-cy)*.15;$('.cur2').style.left=cx+'px';$('.cur2').style.top=cy+'px';requestAnimationFrame(l)})();
document.addEventListener('mouseover',e=>$('.cur2').classList.toggle('h',!!e.target.closest('a,button,.card,.cert,.ring')));
$$('.card').forEach(c=>c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--x',e.clientX-r.left+'px');c.style.setProperty('--y',e.clientY-r.top+'px')}));
$$('.magnet').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.3,y:(e.clientY-r.top-r.height/2)*.45,duration:.4})});b.addEventListener('mouseleave',()=>gsap.to(b,{x:0,y:0,duration:.7,ease:'elastic.out(1,.4)'}))});
$$('section').forEach((s,i)=>ScrollTrigger.create({trigger:s,start:'top 55%',end:'bottom 55%',onToggle:o=>{if(o.isActive){$$('.dots-nav a').forEach((a,j)=>a.classList.toggle('on',i==j))}}}));

/* texto tipeado + bloque de código */
const ph=['Estudiante de Ing. de Sistemas','Soporte técnico & redes ✿','Desarrolladora web en crecimiento','Ponente EduTicInnova 2025'];let pi=0,ci=0,del=false;
(function ty(){const w=ph[pi];$('#typed').textContent=w.slice(0,ci);if(!del&&ci++==w.length){del=true;return setTimeout(ty,1400)}if(del&&--ci<0){del=false;ci=0;pi=(pi+1)%ph.length}setTimeout(ty,del?35:80)})();
const code=`<span class="k">const</span> andrea = {
  carrera: <span class="s2">"Ing. de Sistemas"</span>,
  uni:     <span class="s2">"USMP · 9.º ciclo"</span>,
  stack:   [<span class="s2">"Java"</span>, <span class="s2">"JS"</span>, <span class="s2">"SQL"</span>],
  busca:   <span class="s2">"prácticas"</span>, <span class="c">// ✿</span>
};`;
(function(){let i=0,out='',tag=false;const el=$('#codeBox');(function t(){if(i>=code.length)return;const ch=code[i++];out+=ch;if(ch=='<')tag=true;if(ch=='>')tag=false;if(tag)return t();el.innerHTML=out;setTimeout(t,26)})()})();

/* códigos flotantes delicados */
(function(){const sn=['</>','♡','const ✿','{ }','=>','async','return "✨"','git commit -m "♡"','import love','<Andrea />','✦','npm run bloom','fn()','[ ]','// ✿'];
sn.forEach((t,i)=>{const e=document.createElement('div');e.className='fc';e.textContent=t;const d=.4+Math.random()*1.2;
e.style.cssText=`left:${Math.random()*92}%;top:${Math.random()*92}%;font-size:${10+d*5}px;color:${COL[i%3]};opacity:${.08+d*.08};filter:blur(${d<.7?1.2:0}px)`;$('#floaters').appendChild(e);
gsap.to(e,{y:'+='+(30+Math.random()*50),x:'+='+(Math.random()*40-20),rotation:Math.random()*10-5,duration:5+Math.random()*5,yoyo:true,repeat:-1,ease:'sine.inOut'});
gsap.to(e,{yPercent:-d*260,ease:'none',scrollTrigger:{trigger:document.body,start:'top top',end:'bottom bottom',scrub:true}})})})();

/* entradas dinámicas */
const fx={left:{x:-120},right:{x:120},up:{y:70},scale:{scale:.7}};
$$('.rv').forEach(e=>gsap.fromTo(e,{opacity:0,...fx[e.dataset.fx||'up']},{opacity:1,x:0,y:0,scale:1,duration:1.2,ease:'power4.out',scrollTrigger:{trigger:e,start:'top 90%',toggleActions:TA}}));
$$('.sh h2').forEach(h=>gsap.fromTo(h,{clipPath:'inset(-25% 100% -25% 0)',x:-40},{clipPath:'inset(-25% 0% -25% 0)',x:0,duration:1.3,ease:'power4.out',scrollTrigger:{trigger:h,start:'top 88%',toggleActions:TA}}));
$$('.sh .hint').forEach(h=>gsap.from(h,{opacity:0,y:14,duration:1,delay:.3,scrollTrigger:{trigger:h,start:'top 92%',toggleActions:TA}}));
$$('.sh .num').forEach(n=>gsap.to(n,{y:70,scrollTrigger:{trigger:n,scrub:1,start:'top bottom',end:'bottom top'}}));
$$('.ring').forEach(r=>{const o={v:0},g=r.querySelector('.rg'),em=r.querySelector('em');gsap.to(o,{v:+r.dataset.p,duration:1.8,ease:'power3.out',scrollTrigger:{trigger:r,start:'top 92%',toggleActions:TA},onUpdate:()=>{g.style.setProperty('--p',o.v);em.textContent=Math.round(o.v)+'%'}});r.onclick=()=>r.classList.toggle('open')});
$$('[data-n]').forEach(e=>{const o={v:0};gsap.to(o,{v:+e.dataset.n,duration:2,scrollTrigger:{trigger:e,start:'top 92%',toggleActions:TA},onUpdate:()=>e.textContent=Math.round(o.v)})});
const heroTl=gsap.from('#hero .hl>*,.frame,.code',{y:60,opacity:0,stagger:.13,duration:1.3,ease:'power4.out',delay:.2});
ScrollTrigger.create({trigger:'#hero',start:'top 45%',onEnterBack:()=>heroTl.restart()});

/* sobre mí: editor con pestañas */
const tabs={
perfil:['<span class="n"># Andrea Nikole Alva Chávez</span>','<span class="c">&gt; Estudiante de Ingeniería de Computación y Sistemas</span>','<span class="c">&gt; Universidad San Martín de Porres · 9.º ciclo</span>','','Responsable, proactiva y con facilidad para el','trabajo en equipo. Conocimientos en soporte','informático, redes, programación y herramientas','tecnológicas.','','<span class="k">## objetivo</span>','Prácticas preprofesionales en TI, aportando','compromiso y capacidad de aprendizaje.'],
aptitudes:['<span class="c">{</span>','  <span class="s2">"aptitudes"</span>: [','    <span class="k">"Responsabilidad"</span>, <span class="k">"Trabajo en equipo"</span>,','    <span class="k">"Comunicación efectiva"</span>,','    <span class="k">"Aprendizaje rápido"</span>, <span class="k">"Proactividad"</span>,','    <span class="k">"Organización"</span>, <span class="k">"Adaptabilidad"</span>,','    <span class="k">"Resolución de problemas"</span>','  ],','  <span class="s2">"idiomas"</span>: { <span class="k">"español"</span>: <span class="n">"nativo"</span>, <span class="k">"inglés"</span>: <span class="n">"intermedio"</span> }','<span class="c">}</span>'],
educacion:['<span class="s2">universidad</span>: San Martín de Porres','<span class="s2">carrera</span>: Ing. de Computación y Sistemas','<span class="s2">escuela</span>: EPICS','<span class="s2">ciclo</span>: <span class="n">9</span>','<span class="s2">secundaria</span>: I.E. Nuestra Señora de la Asunción','<span class="s2">ciudad</span>: Arequipa','','<span class="c"># siempre aprendiendo ✿</span>']};
function showTab(k){$$('.tabs button').forEach(b=>b.classList.toggle('on',b.dataset.t==k));$('#ideBody').innerHTML=tabs[k].map((l,i)=>`<div class="ln"><i>${i+1}</i><span>${l}</span></div>`).join('');gsap.from('#ideBody .ln',{opacity:0,x:-18,stagger:.05,duration:.5})}
$$('.tabs button').forEach(b=>b.onclick=()=>showTab(b.dataset.t));showTab('perfil');
const mrow=(id,a)=>{$(id).innerHTML=[...a,...a,...a,...a].map(t=>`<i>${t}</i>`).join('')};
mrow('#mr1',['Responsabilidad','Trabajo en equipo','Comunicación efectiva','Aprendizaje rápido','Proactividad','Organización','Resolución de problemas','Adaptabilidad']);
mrow('#mr2',['Java','JavaScript','SQL','HTML / CSS','Python','Node.js','C#','PHP','Git','Redes','Soporte técnico']);
VanillaTilt.init($$('.cert,.idc'),{max:10,glare:true,'max-glare':.2,speed:500,scale:1.02});

/* ===== TRAYECTORIA: scroll horizontal por pasos, tarjetas siempre completas ===== */
const track=$('.htrack'),hcs=$$('.hc'),tld=$('#tlDots');
let expST=null,expSteps=1,expK=3,curStep=0;
hcs.forEach((c,i)=>{const b=document.createElement('button');b.innerHTML=`<i></i>${c.querySelector('b').textContent}`;b.onclick=()=>goStep(i);tld.appendChild(b)});
const calcK=()=>{expK=parseInt(getComputedStyle(track).getPropertyValue('--k'))||3;expSteps=Math.max(1,hcs.length-expK)};
function goStep(i){if(!expST)return;i=Math.max(0,Math.min(expSteps,i));lenis.scrollTo(expST.start+(i/expSteps)*(expST.end-expST.start),{duration:1.1})}
function setStep(i){curStep=i;$$('#tlDots button').forEach((b,j)=>b.classList.toggle('in',j>=i&&j<i+expK));$('#tlCount').textContent=`${i+1}–${Math.min(hcs.length,i+expK)} de ${hcs.length}`}
$('#tlPrev').onclick=()=>goStep(curStep-1);$('#tlNext').onclick=()=>goStep(curStep+1);
const vis=()=>{const vw=innerWidth,pd=vw*.05;hcs.forEach(c=>{const r=c.getBoundingClientRect();c.style.setProperty('--vis',Math.max(0,Math.min(1,(Math.min(r.right,vw-pd)-Math.max(r.left,pd))/r.width)).toFixed(3))})};
const mm=gsap.matchMedia();
mm.add('(min-width:851px)',()=>{calcK();setStep(0);
const stepPx=()=>hcs[0].offsetWidth+(parseFloat(getComputedStyle(track).columnGap)||28);
const tw=gsap.to(track,{x:()=>{calcK();return -expSteps*stepPx()},ease:'none',onUpdate:vis,scrollTrigger:{trigger:'#exp',pin:true,scrub:.6,start:'top top',end:()=>{calcK();return '+='+expSteps*innerHeight*.75},invalidateOnRefresh:true,
onRefresh:vis,onUpdate:s=>{$('.hbar i').style.width=s.progress*100+'%';const i=Math.round(s.progress*expSteps);if(i!=curStep)setStep(i)}}});
expST=tw.scrollTrigger;vis();
return()=>{expST=null;hcs.forEach(c=>c.style.removeProperty('--vis'))}});
/* imán: al dejar de deslizar, el carrusel se acomoda para mostrar tarjetas completas */
let snapT;lenis.on('scroll',()=>{clearTimeout(snapT);snapT=setTimeout(()=>{if(!expST||!expST.isActive)return;const i=Math.round(expST.progress*expSteps),y=expST.start+(i/expSteps)*(expST.end-expST.start);if(Math.abs(y-scrollY)>3)lenis.scrollTo(y,{duration:.8})},170)});
addEventListener('keydown',e=>{if(!expST||!expST.isActive||$('.modal.on'))return;if(e.key=='ArrowRight')goStep(curStep+1);if(e.key=='ArrowLeft')goStep(curStep-1)});

/* ===== FINAL MÁGICO ===== */
$('#gracias').innerHTML=[...'Gracias'].map((l,i)=>`<span style="--i:${i}">${l}</span>`).join('');
const burst=(n=40,fromX,fromY)=>{const s=['✦','♡','✿','·','✧','</>'];for(let i=0;i<n;i++){const e=document.createElement('span');e.className='fly';e.textContent=s[i%s.length];e.style.color=COL[i%3];e.style.fontSize=(12+Math.random()*22)+'px';if(fromX!=null){e.style.left=fromX+'px';e.style.top=fromY+'px'}$('#thanks').appendChild(e);
gsap.fromTo(e,{x:0,y:0,opacity:1,scale:.4},{x:(Math.random()-.5)*innerWidth*.9,y:(Math.random()-.5)*innerHeight*.8,rotation:Math.random()*360,scale:1+Math.random()*1.4,opacity:0,duration:2.4+Math.random()*1.8,ease:'power3.out',onComplete:()=>e.remove()})}};
const wishes=['Que cada línea de código me acerque a mis sueños ✨','Que mis prácticas sean el inicio de algo grande ♡','Que siempre haya curiosidad para aprender ✦','Que la tecnología siga abriéndome puertas ✿','Que este universo sea solo el comienzo ✧'];let wi=0;
$('#wish').onclick=e=>{const r=e.currentTarget.getBoundingClientRect(),w=$('#wishText'),t=wishes[wi++%wishes.length],bx=r.left+r.width/2,by=r.top+r.height/2;
w.innerHTML=`${t}<small>✦ deseo n.º ${wi} · ya viaja por la galaxia</small>`;gsap.killTweensOf(w);gsap.set(w,{opacity:0});
const wr=w.getBoundingClientRect(),wx=innerWidth/2,wy=wr.top+wr.height/2;
if(window.makeWish)makeWish(bx,by,wx,wy);
gsap.fromTo(w,{opacity:0,scale:.85,filter:'blur(14px) brightness(3)'},{opacity:1,scale:1,filter:'blur(0px) brightness(1)',duration:1.2,delay:.88,ease:'power3.out'});
window.wishBoost&&wishBoost();gsap.fromTo('.halo',{scale:1},{scale:1.12,duration:.5,yoyo:true,repeat:1,ease:'power2.out'})};

/* GRACIAS: la galaxia se abre → portal → palabra de estrellas → deseos en constelación */
(function(){const c=$('#magic'),x=c.getContext('2d'),sec=$('#thanks'),h=$('#gracias'),DPR=Math.min(devicePixelRatio||1,2);
let flareT=0,W,H,tp=[],dust=[],fw=[],rings=[],runes=[],comets=[],wish=null,on=false,t0=0,started=false,formed=false,last=0,lx=0,ly=0,CX=0,CY=0,tF=0,nextC=0;
const sub=$('.sub');sub.innerHTML=[...sub.textContent].map(ch=>`<span>${ch==' '?'&nbsp;':ch}</span>`).join('');
const spr={};const sprite=col=>spr[col]||(spr[col]=(()=>{const k=document.createElement('canvas');k.width=k.height=64;const q=k.getContext('2d'),g=q.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,'#fff');g.addColorStop(.22,col);g.addColorStop(.6,col+'44');g.addColorStop(1,col+'00');q.fillStyle=g;q.fillRect(0,0,64,64);return k})());
function build(){W=c.width=sec.offsetWidth*DPR;H=c.height=sec.offsetHeight*DPR;
const cs=getComputedStyle(h),sr=sec.getBoundingClientRect(),hr=h.getBoundingClientRect();
const o=document.createElement('canvas');o.width=W;o.height=H;const q=o.getContext('2d');
q.font=`${cs.fontStyle} ${cs.fontWeight} ${parseFloat(cs.fontSize)*DPR}px ${cs.fontFamily}`;q.textAlign='center';q.textBaseline='middle';q.fillStyle='#fff';
const ox=(hr.left-sr.left+hr.width/2)*DPR,oy=(hr.top-sr.top+hr.height/2+hr.height*.02)*DPR;CX=ox;CY=oy;q.fillText('Gracias',ox,oy);
const d=q.getImageData(0,0,W,H).data,g=Math.round((innerWidth<700?4:5)*DPR);tp=[];
for(let yy=0;yy<H;yy+=g)for(let xx=0;xx<W;xx+=g)if(d[(yy*W+xx)*4+3]>140){const a=Math.random()*6.283,rr=Math.max(W,H)*(.3+Math.random()*.35);
tp.push({hx:xx,hy:yy,x:ox+Math.cos(a)*rr,y:oy+Math.sin(a)*rr*.7,vx:0,vy:0,dl:(xx/W)*.8+Math.random()*.4,ph:Math.random()*6.28,c:COL[Math.random()*3|0],s:.7+Math.random()*.9,st:Math.random()<.3})}
dust=Array.from({length:120},()=>({a:Math.random()*6.283,rad:(.08+Math.random()*.55)*W,ry:.3+Math.random()*.2,w:(.03+Math.random()*.09)*(Math.random()<.5?1:-1),r:Math.random()*1.6+.6,ph:Math.random()*6,c:COL[Math.random()*3|0]}));
const gl=['</>','{ }','✦','♡','0101','=>','✿','fn()','♏','const','✧','[ ]','import','async'],rx=Math.min(W*.44,hr.width*.64*DPR),ry=Math.max(hr.height*.95*DPR,H*.16);
runes=gl.map((t,i)=>({t,a:i/gl.length*6.283,rx,ry,c:COL[i%3]}))}
window.fwBurst=(px,py,n=80)=>{const r=c.getBoundingClientRect();const X=(px-r.left)*DPR,Y=(py-r.top)*DPR;for(let i=0;i<n;i++){const a=Math.random()*6.283,s=(2+Math.random()*7)*DPR;fw.push({x:X,y:Y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,l:1,dc:.007+Math.random()*.012,c:i%7==0?'#ffffff':COL[i%3],s:.5+Math.random()*.9})}rings.push({x:X,y:Y,r:0,l:1,sp:5*DPR,c:COL[Math.random()*3|0]})};
/* DESEO: una estrella fugaz cruza el cielo y al caer aparece tu deseo */
let wComets=[],impacts=[],wishN=0;
window.makeWish=(bx,by,wx,wy)=>{const sr=sec.getBoundingClientRect(),tx=(wx-sr.left)*DPR,ty=(wy-sr.top)*DPR,sx=(Math.min(innerWidth*.97,wx+innerWidth*.42)-sr.left)*DPR,sy=(-60-sr.top)*DPR;
wComets.push({sx,sy,tx,ty,cx:tx+(sx-tx)*.5,cy:sy+(ty-sy)*.12,t0:performance.now(),dur:900,h:[],c:COL[wishN%3]});
rings.push({x:(bx-sr.left)*DPR,y:(by-sr.top)*DPR,r:0,l:1,sp:4*DPR,c:'#ffd6ea'});return ++wishN};
const HID='#thanks .lead,#thanks .btns,.sub span';
function scatter(){tp.forEach(p=>{const a=Math.random()*6.283,rr=Math.max(W,H)*(.3+Math.random()*.35);p.x=CX+Math.cos(a)*rr;p.y=CY+Math.sin(a)*rr*.7;p.vx=p.vy=0})}
function reveal(){if(formed)return;formed=true;sec.classList.add('go');gsap.killTweensOf([h,'#gracias span','.sub span','#thanks .lead','#thanks .btns','.ul path']);gsap.set(h,{opacity:1});
gsap.fromTo('#gracias span',{opacity:0,y:22,filter:'blur(14px)'},{opacity:1,y:0,filter:'blur(0px)',stagger:.1,duration:1.3,ease:'power2.out',clearProps:'transform,opacity,filter'});
gsap.fromTo('.ul path',{strokeDashoffset:1},{strokeDashoffset:0,duration:1.6,delay:.9,ease:'power2.inOut'});
gsap.fromTo('.sub span',{opacity:0,y:12,filter:'blur(8px)'},{opacity:1,y:0,filter:'blur(0px)',stagger:.035,delay:1.1,duration:.8,ease:'power2.out',clearProps:'filter,transform'});
gsap.fromTo('#thanks .lead,#thanks .btns',{y:20,opacity:0},{y:0,opacity:1,stagger:.25,delay:1.7,duration:1,ease:'power2.out',clearProps:'transform'})}
function start(){gsap.killTweensOf([h,'#gracias span','.sub span','#thanks .lead','#thanks .btns']);started=true;formed=false;tF=0;flareT=0;t0=performance.now();scatter();wComets=[];impacts=[];gsap.set(h,{opacity:0});gsap.set(HID,{opacity:0});gsap.set('.ul path',{strokeDashoffset:1});if(RM||!tp.length)reveal()}
function resetThanks(){started=false;formed=false;tF=0;flareT=0;sec.classList.remove('go');wComets=[];impacts=[];fw=[];rings=[];gsap.killTweensOf([h,'#gracias span','.sub span','#thanks .lead','#thanks .btns','#wishText']);gsap.set(h,{opacity:0,clearProps:'transform,filter'});gsap.set(HID,{opacity:0});$('#wishText').innerHTML='';gsap.set('.ul path',{strokeDashoffset:1});gsap.set('#wishText',{opacity:0})}
document.fonts.ready.then(()=>{build();addEventListener('resize',build)});
ScrollTrigger.create({trigger:sec,start:'top 85%',end:'bottom top',onToggle:s=>on=s.isActive});
ScrollTrigger.create({trigger:sec,start:'top 65%',end:'bottom top',onToggle:s=>window.galaxyOpen&&galaxyOpen(s.isActive)});
ScrollTrigger.create({trigger:sec,start:'top 62%',onEnter:start,onEnterBack:start,onLeaveBack:resetThanks});
sec.addEventListener('mousemove',()=>{const r=c.getBoundingClientRect(),X=(mx-r.left)*DPR,Y=(my-r.top)*DPR;if(Math.hypot(X-lx,Y-ly)>12*DPR&&formed){lx=X;ly=Y;for(let i=0;i<2;i++)fw.push({x:X,y:Y,vx:(Math.random()-.5)*2*DPR,vy:(Math.random()-.5)*2*DPR,l:1,dc:.025,c:COL[Math.random()*3|0],s:.6})}});
sec.addEventListener('click',e=>{if(formed&&!e.target.closest('button,a'))fwBurst(e.clientX,e.clientY,50)});
(function f(now){requestAnimationFrame(f);if(!on||!W)return;const dt=Math.min(.05,(now-last)/1000);last=now;x.clearRect(0,0,W,H);x.globalCompositeOperation='lighter';
const T=started?(now-t0)/1000:0,r=c.getBoundingClientRect(),mxl=(mx-r.left)*DPR,myl=(my-r.top)*DPR,R=120*DPR,near=[];
if(started&&!formed&&T>2.1)reveal();
/* estrellas que orbitan la palabra (no suben: giran como una galaxia) */
dust.forEach(p=>{p.a+=p.w*dt;x.globalAlpha=.2+.55*Math.abs(Math.sin(T*1.8+p.ph));const s=p.r*7*DPR;x.drawImage(sprite(p.c),CX+Math.cos(p.a)*p.rad-s/2,CY+Math.sin(p.a)*p.rad*p.ry-s/2,s,s)});
if(started){const pa=formed?Math.max(0,.35-(T-tF)*.2):Math.min(.35,T*.3);if(!tF&&formed)tF=T;if(pa>0){const ps=(260+Math.sin(T*3)*30)*DPR*(formed?1+(T-tF)*.4:.5+Math.min(1,T/2.2)*.5);x.globalAlpha=pa;x.drawImage(sprite('#b9a2ff'),CX-ps/2,CY-ps/2,ps,ps);x.globalAlpha=pa*.8;const s2=ps*.4;x.drawImage(sprite('#ff9ec7'),CX-s2/2,CY-s2/2,s2,s2)}}
if(started)tp.forEach(p=>{if(T<p.dl)return;const k=formed?.07:.045;let dx=p.x-mxl,dy=p.y-myl,d=Math.hypot(dx,dy);
if(!formed){const ex=p.x-CX,ey=p.y-CY,ed=Math.hypot(ex,ey)||1,sw=.25*DPR*Math.max(0,1-T/2.2);p.vx+=-ey/ed*sw;p.vy+=ex/ed*sw}
if(d<R&&d>.01){const f=(1-d/R)*(formed?4.2:1.5);p.vx+=dx/d*f;p.vy+=dy/d*f}
if(formed&&d<R*.85&&near.length<42)near.push(p);
p.vx=(p.vx+(p.hx-p.x)*k)*.85;p.vy=(p.vy+(p.hy-p.y)*k)*.85;p.x+=p.vx;p.y+=p.vy;
const a=formed?.3+.4*Math.abs(Math.sin(T*1.6+p.ph)):Math.min(1,(T-p.dl)*1.5);x.globalAlpha=a;const s=(formed?5:8)*p.s*DPR*(p.st?1.8:1);x.drawImage(p.st?starSprite(p.c):sprite(p.c),p.x-s/2,p.y-s/2,s,s)});
if(near.length>1){x.strokeStyle='#ffd6ea';x.lineWidth=.9*DPR;for(let i=0;i<near.length;i++)for(let k=i+1;k<near.length;k++){const dd=Math.hypot(near[i].x-near[k].x,near[i].y-near[k].y);if(dd<75*DPR){x.globalAlpha=(1-dd/(75*DPR))*.55;x.beginPath();x.moveTo(near[i].x,near[i].y);x.lineTo(near[k].x,near[k].y);x.stroke()}}}
if(formed){const fa=Math.min(1,(T-tF)/1.5);x.font=`${13*DPR}px "Fira Code",monospace`;x.textAlign='center';x.textBaseline='middle';runes.forEach(u=>{const a=u.a+T*.14,z=Math.sin(a);x.globalAlpha=fa*(.15+.25*(z+1)/2);x.fillStyle=u.c;x.fillText(u.t,CX+Math.cos(a)*u.rx,CY+z*u.ry*.55-u.ry*.1)})}
/* estrella fugaz del deseo */
for(let i=wComets.length-1;i>=0;i--){const m=wComets[i],t=Math.min(1,(now-m.t0)/m.dur),e=Math.pow(t,1.7),u=1-e,px=u*u*m.sx+2*u*e*m.cx+e*e*m.tx,py=u*u*m.sy+2*u*e*m.cy+e*e*m.ty;
m.h.push([px,py]);if(m.h.length>22)m.h.shift();
for(let k=1;k<m.h.length;k++){const q=k/m.h.length;x.strokeStyle='#ffffff';x.lineCap='round';x.globalAlpha=q*.9;x.lineWidth=(1+q*4)*DPR;x.beginPath();x.moveTo(m.h[k-1][0],m.h[k-1][1]);x.lineTo(m.h[k][0],m.h[k][1]);x.stroke();x.strokeStyle=m.c;x.globalAlpha=q*.35;x.lineWidth=(3+q*12)*DPR;x.stroke()}
for(let q2=0;q2<2;q2++)fw.push({x:px+(Math.random()-.5)*8*DPR,y:py+(Math.random()-.5)*8*DPR,vx:(Math.random()-.5)*.8*DPR,vy:(Math.random()-.2)*.8*DPR,l:1,dc:.04,c:q2?m.c:'#ffffff',s:.8});
let s=(40+Math.sin(now*.03)*5)*DPR;x.globalAlpha=1;x.drawImage(starSprite('#ffffff'),px-s/2,py-s/2,s,s);s*=2.4;x.globalAlpha=.5;x.drawImage(sprite(m.c),px-s/2,py-s/2,s,s);
if(t>=1){wComets.splice(i,1);impacts.push({x:m.tx,y:m.ty,born:now,c:m.c});rings.push({x:m.tx,y:m.ty,r:0,l:1,sp:4*DPR,c:m.c});
window.fwBurst&&fwBurst(r.left+m.tx/DPR,r.top+m.ty/DPR,22);window.galaxyPulse&&galaxyPulse(r.left+m.tx/DPR,r.top+m.ty/DPR)}}
for(let i=impacts.length-1;i>=0;i--){const q=impacts[i],a=(now-q.born)/700;if(a>=1){impacts.splice(i,1);continue}const s=(320*(1-a*.4))*DPR;x.globalAlpha=1-a;x.drawImage(sprite('#ffffff'),q.x-s/2,q.y-s/2,s,s);x.globalAlpha=(1-a)*.8;const s2=s*1.6;x.drawImage(sprite(q.c),q.x-s2/2,q.y-s2/2,s2,s2)}
for(let i=rings.length-1;i>=0;i--){const g=rings[i];g.r+=g.sp;g.l-=.02;if(g.l<=0){rings.splice(i,1);continue}x.globalAlpha=g.l*.7;x.strokeStyle=g.c;x.lineWidth=(2+g.l*3)*DPR;x.beginPath();x.arc(g.x,g.y,g.r,0,6.283);x.stroke()}
if(formed&&now>nextC){nextC=now+7000+Math.random()*5000;comets.push({x:W*(.45+Math.random()*.6),y:-20*DPR,vx:-(8+Math.random()*4)*DPR,vy:(4+Math.random()*3)*DPR,c:COL[Math.random()*3|0]})}
for(let i=comets.length-1;i>=0;i--){const m=comets[i];m.x+=m.vx;m.y+=m.vy;fw.push({x:m.x,y:m.y,vx:(Math.random()-.5)*.8*DPR,vy:(Math.random()-.5)*.8*DPR,l:.9,dc:.035,c:m.c,s:.8});x.globalAlpha=1;const s=26*DPR;x.drawImage(starSprite('#ffffff'),m.x-s/2,m.y-s/2,s,s);if(m.x<-50||m.y>H+50)comets.splice(i,1)}
for(let i=fw.length-1;i>=0;i--){const p=fw[i];p.x+=p.vx;p.y+=p.vy;p.vy+=.05*DPR;p.vx*=.985;p.vy*=.985;p.l-=p.dc;if(p.l<=0){fw.splice(i,1);continue}x.globalAlpha=p.l;const s=(10*p.l+4)*p.s*DPR;x.drawImage(sprite(p.c),p.x-s/2,p.y-s/2,s,s)}
x.globalAlpha=1;x.globalCompositeOperation='source-over'})(performance.now())})();

/* modales */
const open=m=>{$(m).classList.add('on');lenis.stop()},close=()=>{window.storyStop&&storyStop();$$('.modal').forEach(m=>m.classList.remove('on'));lenis.start()};
/* ===== HISTORIA AVDER: narración tipo sistema (edita los textos aquí) ===== */
const STORY=[
{n:'I',t:'El origen',u:'Origen',x:'AVDER nació de una idea sencilla: una sola persona, con constancia y ganas de crear, puede construir cosas que ayudan a otros. Empecé con una pantalla en blanco, un editor de código y mucha curiosidad.'},
{n:'II',t:'El camino',u:'Constancia',x:'Aprendí a base de intentos. Hubo noches de depuración, ideas que no funcionaron a la primera y mucho por descubrir, pero cada error resuelto fue un ladrillo más en los cimientos del estudio.'},
{n:'III',t:'El taller',u:'Autonomía',x:'Por ahora AVDER es un estudio de una sola persona: diseño, programo y doy vida a cada proyecto de principio a fin. Eso me enseñó a cuidar cada detalle y a responder por cada entrega.'},
{n:'IV',t:'Lo que creo',u:'Servicios',x:'Construyo páginas web, software y aplicaciones a la medida: soluciones digitales claras, bonitas y útiles para quien quiere dar su primer paso en línea o hacer crecer su proyecto.'},
{n:'V',t:'Lo que viene',u:'Visión',x:'Sueño con que AVDER crezca: formar un equipo, llevar proyectos a empresas y convertir cada idea en tecnología que impulse a otros. Esta historia apenas empieza y sigue compilándose…'}];
(function(){const m=$('#storyM'),rail=$('#sRail'),net=$('#sNet'),nx=net.getContext('2d'),DPR=Math.min(devicePixelRatio||1,2);let cur=0,tok=0,auto=false,at=null,raf=0,np=[],NW=0,NH=0;
STORY.forEach((s,i)=>{const b=document.createElement('button');b.innerHTML=`<i>0${i+1}</i><span>${s.t}</span>`;b.onclick=()=>{stopAuto();go(i)};rail.appendChild(b)});
$('#sUnlock').innerHTML=STORY.map(s=>`<i>✦ ${s.u}</i>`).join('');
function type(el,txt,done){const my=++tok;el.textContent='';el.classList.add('typing');let i=0;(function t(){if(my!=tok)return;el.textContent=txt.slice(0,++i);if(i<txt.length)setTimeout(t,17);else{el.classList.remove('typing');done&&done()}})()}
function setAuto(v){auto=v;$('#sAuto').textContent=v?'❚❚ Pausar':'▶ Narrar'}
function stopAuto(){setAuto(false);clearTimeout(at)}
function go(i){clearTimeout(at);cur=Math.max(0,Math.min(STORY.length-1,i));const s=STORY[cur];
$$('#sRail button').forEach((b,j)=>{b.classList.toggle('on',j==cur);b.classList.toggle('done',j<cur)});
$$('#sUnlock i').forEach((u,j)=>u.classList.toggle('on',j<=cur));
$('#sBar').style.width=(cur+1)/STORY.length*100+'%';$('#sCnt').textContent=`0${cur+1} / 0${STORY.length}`;
$('#sNum').textContent=s.n;$('#sLog').textContent=`> load chapter_0${cur+1}.story ........ [ok]`;
const t=$('#sTitle');t.textContent=s.t;t.classList.remove('gl');void t.offsetWidth;t.classList.add('gl');
gsap.fromTo('#sNum',{opacity:0,scale:.8,x:40},{opacity:1,scale:1,x:0,duration:.9,ease:'power3.out'});
gsap.fromTo('#sTitle,#sLog',{opacity:0,y:18},{opacity:1,y:0,duration:.6,stagger:.1});
gsap.fromTo($$('#sUnlock i')[cur],{scale:.6},{scale:1,duration:.8,ease:'back.out(3)'});
type($('#sTxt'),s.x,()=>{if(!auto)return;at=setTimeout(()=>{if(!auto)return;if(cur<STORY.length-1)go(cur+1);else{setAuto(false);$('#sLog').textContent='> compilación exitosa ✦ gracias por leer mi historia';gsap.fromTo('#sUnlock i',{scale:.7},{scale:1,stagger:.1,duration:.7,ease:'back.out(3)'})}},2400)})}
function sizeNet(){const r=net.getBoundingClientRect();NW=net.width=r.width*DPR;NH=net.height=r.height*DPR;np=Array.from({length:Math.round(innerWidth<700?32:70)},()=>({x:Math.random()*NW,y:Math.random()*NH,vx:(Math.random()-.5)*.45*DPR,vy:(Math.random()-.5)*.45*DPR,c:COL[Math.random()*3|0]}))}
function startNet(){sizeNet();cancelAnimationFrame(raf);(function f(){raf=requestAnimationFrame(f);nx.clearRect(0,0,NW,NH);
np.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>NW)p.vx*=-1;if(p.y<0||p.y>NH)p.vy*=-1});
const L=150*DPR;nx.lineWidth=DPR*.8;for(let i=0;i<np.length;i++)for(let k=i+1;k<np.length;k++){const d=Math.hypot(np[i].x-np[k].x,np[i].y-np[k].y);if(d<L){nx.strokeStyle=`rgba(185,162,255,${(1-d/L)*.35})`;nx.beginPath();nx.moveTo(np[i].x,np[i].y);nx.lineTo(np[k].x,np[k].y);nx.stroke()}}
np.forEach(p=>{nx.fillStyle=p.c;nx.globalAlpha=.8;nx.beginPath();nx.arc(p.x,p.y,1.8*DPR,0,6.283);nx.fill()});nx.globalAlpha=1})()}
window.openStory=i=>{open('#storyM');startNet();setAuto(true);go(i||0);gsap.fromTo('.sbox',{opacity:0,y:40,scale:.96},{opacity:1,y:0,scale:1,duration:.8,ease:'power3.out'})};
window.storyStop=()=>{stopAuto();tok++;cancelAnimationFrame(raf)};
$('#sPrev').onclick=()=>{stopAuto();go(cur-1)};$('#sNext').onclick=()=>{stopAuto();go(cur+1)};
$('#sAuto').onclick=()=>{if(auto){stopAuto();return}setAuto(true);go(cur>=STORY.length-1?0:cur)};
addEventListener('keydown',e=>{if(!m.classList.contains('on'))return;if(e.key=='ArrowRight'){stopAuto();go(cur+1)}if(e.key=='ArrowLeft'){stopAuto();go(cur-1)}});
addEventListener('resize',()=>m.classList.contains('on')&&sizeNet());
$('#openStory').onclick=()=>openStory(0);$$('.steps i').forEach((s,i)=>s.onclick=()=>openStory(i))})();
(function(){
const M=$('#meM'),cv=$('#meCv'),cx=cv.getContext('2d'),sc=$('#meScroll'),wrap=$('.mewrap');
let W=0,H=0,DPR=1,P=0,tp=0,T=0,last=0,on=false,raf=0,burst=[],bursted=false,vel=0,lastP=0,seen=0;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)),lerp=(a,b,t)=>a+(b-a)*t,ss=t=>{t=clamp(t,0,1);return t*t*(3-2*t)};
const hx=c=>[parseInt(c.slice(1,3),16),parseInt(c.slice(3,5),16),parseInt(c.slice(5,7),16)];
const mix=(a,b,t)=>{const A=hx(a),B=hx(b);return`rgb(${A.map((v,i)=>Math.round(lerp(v,B[i],t))).join(',')})`};
const MK=[.42,.56,.70];
const stars=Array.from({length:170},()=>({x:Math.random(),y:Math.random()*.75,r:Math.random()*1.4+.3,f:Math.random()*6.28,s:.5+Math.random()*2}));
const parts=Array.from({length:120},()=>({x:Math.random(),y:Math.random(),r:Math.random()*1.8+.4,v:.4+Math.random()}));
const flies=Array.from({length:36},()=>({x:Math.random(),y:Math.random(),f:Math.random()*6.28,r:1+Math.random()*2}));
const LY=[{b:.50,a:.30,par:.07,n:'#2d1c5c',d:'#cdb3e6',k:[3,7,13]},{b:.58,a:.30,par:.14,n:'#211349',d:'#eab5cf',k:[4,9,17]},{b:.69,a:.30,par:.24,n:'#160c36',d:'#dd9ab8',k:[5,11,19]}];
const ph=LY.map(()=>[Math.random()*9,Math.random()*9,Math.random()*9]);
function rz(){DPR=Math.min(devicePixelRatio||1,1.75);W=wrap.clientWidth;H=wrap.clientHeight;cv.width=W*DPR;cv.height=H*DPR;cx.setTransform(DPR,0,0,DPR,0,0)}
const sy=xf=>{const u=Math.min(xf/.84,1);let y=xf>.84?.34+(xf-.84)*1.5:.9-.56*(u*u*(3-2*u)*.55+u*.45);y+=(Math.sin(xf*38)*.5+Math.sin(xf*17+1)*.5)*.012+(Math.abs(Math.sin(xf*11))-.5)*.02;return y*H};
const px=p=>.1+.74*p;
const wind=p=>.25+MK.reduce((s,m)=>s+2.2*Math.exp(-(((p-m)/.045)**2)),0);
function ridge(L,i,d){const off=P*H*L.par*.9;cx.beginPath();cx.moveTo(0,H+10);
 for(let x=0;x<=W+6;x+=6){const u=x/W*Math.PI;let v=0;L.k.forEach((k,q)=>{v+=(1-Math.abs(Math.sin(u*k*.5+ph[i][q])))*(1/(q+1.2))});v/=1.9;cx.lineTo(x,H*L.b-v*H*L.a+off)}
 cx.lineTo(W+6,H+10);cx.closePath();const g=cx.createLinearGradient(0,H*(L.b-L.a),0,H);g.addColorStop(0,mix(L.n,L.d,d));g.addColorStop(1,mix('#0a0618',L.d,d*.55));cx.fillStyle=g;cx.fill()}
function frame(t){if(!on)return;raf=requestAnimationFrame(frame);const dt=Math.min(.05,(t-last)/1000||.016);last=t;T+=dt;
 const s=sc.scrollHeight>sc.clientHeight?sc.scrollTop/(sc.scrollHeight-sc.clientHeight):0;tp=clamp(s/.8,0,1);P+=(tp-P)*Math.min(1,dt*5);vel=Math.abs(P-lastP)/dt;lastP=P;
 const d=ss((P-.6)/.38),w=wind(P),S=Math.max(.85,H/560);
 // cielo
 let g=cx.createLinearGradient(0,0,0,H);g.addColorStop(0,mix('#05030d','#6b7fd1',d));g.addColorStop(.55,mix('#140a30','#ffc9de',d));g.addColorStop(1,mix('#2b1550','#ffe9a8',d));cx.fillStyle=g;cx.fillRect(0,0,W,H);
 // estrellas
 stars.forEach(o=>{const a=(.35+.65*Math.sin(T*o.s+o.f))*(1-d)*.9;if(a<=.02)return;cx.globalAlpha=a;cx.fillStyle='#fff';cx.beginPath();cx.arc(o.x*W,o.y*H+P*H*.08,o.r,0,6.3);cx.fill()});cx.globalAlpha=1;
 // luna
 if(d<.95){cx.save();cx.globalAlpha=1-d;const mx=W*.14,my=H*.2+P*H*.05;const gl=cx.createRadialGradient(mx,my,0,mx,my,90*S);gl.addColorStop(0,'rgba(255,240,200,.35)');gl.addColorStop(1,'transparent');cx.fillStyle=gl;cx.fillRect(mx-100*S,my-100*S,200*S,200*S);cx.fillStyle='#fff3d0';cx.beginPath();cx.arc(mx,my,20*S,0,6.3);cx.fill();cx.globalCompositeOperation='destination-out';cx.restore()}
 // aurora
 cx.save();cx.globalCompositeOperation='lighter';const aa=(1-d)*.07*ss(P*4)*(1-ss((P-.7)*5));for(let i=0;i<3;i++){const col=['255,201,222','168,220,255','245,197,66'][i];for(let x=0;x<W;x+=3){const y=H*(.16+i*.07)+Math.sin(x*.004+T*.5+i*2)*H*.05+Math.sin(x*.011-T*.3)*H*.015;const gg=cx.createLinearGradient(0,y,0,y+H*.22);gg.addColorStop(0,`rgba(${col},${aa})`);gg.addColorStop(1,'rgba(0,0,0,0)');cx.fillStyle=gg;cx.fillRect(x,y,4,H*.22)}}cx.restore();
 // sol
 if(d>.01){const sx=W*.84,sy2=lerp(H*1.05,H*.36,d),R=48*S;cx.save();cx.globalCompositeOperation='lighter';
  let rg=cx.createRadialGradient(sx,sy2,0,sx,sy2,W*.6);rg.addColorStop(0,`rgba(255,240,180,${.55*d})`);rg.addColorStop(.25,`rgba(255,201,222,${.25*d})`);rg.addColorStop(1,'rgba(255,201,222,0)');cx.fillStyle=rg;cx.fillRect(0,0,W,H);
  for(let i=0;i<16;i++){const an=T*.06+i*.3927;cx.fillStyle=`rgba(255,235,170,${.07*d})`;cx.beginPath();cx.moveTo(sx,sy2);cx.lineTo(sx+Math.cos(an-.05)*W,sy2+Math.sin(an-.05)*W);cx.lineTo(sx+Math.cos(an+.05)*W,sy2+Math.sin(an+.05)*W);cx.fill()}cx.restore();
  cx.fillStyle='#fff6d0';cx.shadowColor='#ffe66d';cx.shadowBlur=60;cx.beginPath();cx.arc(sx,sy2,R,0,6.3);cx.fill();cx.shadowBlur=0}
 LY.forEach((L,i)=>ridge(L,i,d));
 // niebla
 const fg=cx.createLinearGradient(0,H*.5,0,H);fg.addColorStop(0,'rgba(255,255,255,0)');fg.addColorStop(1,`rgba(${Math.round(lerp(60,255,d))},${Math.round(lerp(40,200,d))},${Math.round(lerp(110,222,d))},.18)`);cx.fillStyle=fg;cx.fillRect(0,H*.5,W,H*.5);
 // ladera primer plano
 cx.beginPath();cx.moveTo(0,H+4);for(let x=0;x<=W+4;x+=4)cx.lineTo(x,sy(x/W));cx.lineTo(W+4,H+4);cx.closePath();
 g=cx.createLinearGradient(0,H*.3,0,H);g.addColorStop(0,mix('#1a1040','#8b5a86',d));g.addColorStop(1,mix('#07040f','#3d2350',d));cx.fillStyle=g;cx.fill();
 cx.strokeStyle=`rgba(${Math.round(lerp(168,255,d))},${Math.round(lerp(220,230,d))},255,${.25+.35*d})`;cx.lineWidth=1.5;cx.stroke();
 // senda recorrida
 cx.save();cx.setLineDash([2,7]);cx.lineCap='round';cx.strokeStyle='#ffe66d';cx.lineWidth=2.4;cx.shadowColor='#ffe66d';cx.shadowBlur=8;cx.beginPath();for(let i=0;i<=60;i++){const pp=P*i/60,x=px(pp)*W,y=sy(px(pp))-3;i?cx.lineTo(x,y):cx.moveTo(x,y)}cx.stroke();cx.restore();
 // marcadores
 let ov=0;MK.forEach((m,i)=>{const x=px(m)*W,y=sy(px(m)),ok=P>m+.03;if(ok)ov++;const col=ok?'#ffe66d':'#ff9ec7',hh=34*S;cx.save();cx.globalAlpha=ss((P-.1)*7);cx.strokeStyle=col;cx.fillStyle=col;cx.lineWidth=2;cx.shadowColor=col;cx.shadowBlur=14;cx.beginPath();cx.moveTo(x,y);cx.lineTo(x,y-hh);cx.stroke();cx.beginPath();cx.moveTo(x,y-hh);cx.lineTo(x+16*S,y-hh+6*S+Math.sin(T*3+i)*2);cx.lineTo(x,y-hh+12*S);cx.fill();cx.shadowBlur=0;cx.font=`${11*Math.max(S,.8)}px "Fira Code",monospace`;cx.textAlign='center';cx.fillText(ok?`obst. ${i+1} ✓`:`obst. ${i+1}`,x,y-hh-8);cx.restore()});
 // bandera cima
 {const x=W*.84,y=sy(.84),a=ss((P-.94)*14),hh=60*S;cx.save();cx.globalAlpha=a;cx.strokeStyle='#fff';cx.lineWidth=2.5;cx.beginPath();cx.moveTo(x,y);cx.lineTo(x,y-hh);cx.stroke();cx.fillStyle='#ffc9de';cx.shadowColor='#ffc9de';cx.shadowBlur=20;cx.beginPath();cx.moveTo(x,y-hh);for(let i=0;i<=20;i++)cx.lineTo(x+i*2.4*S,y-hh+Math.sin(T*5+i*.5)*3+i*.4);for(let i=20;i>=0;i--)cx.lineTo(x+i*2.4*S,y-hh+20*S+Math.sin(T*5+i*.5)*3+i*.4);cx.fill();cx.restore()}
 // senderista
 {const x=px(P)*W,y=sy(px(P))-1,k=clamp(vel*40,0,1),sw=Math.sin(T*9)*k*9*S,sh=Math.sin(T*18)*k*1.2,sh2=(P>.99?0:1);
  cx.save();cx.translate(x,y);cx.lineCap='round';cx.lineJoin='round';
  if(d<.9){const ca=(1-d)*.55,cg=cx.createRadialGradient(8*S,-34*S,0,60*S,-40*S,110*S);cg.addColorStop(0,`rgba(255,240,190,${ca})`);cg.addColorStop(1,'rgba(255,240,190,0)');cx.fillStyle=cg;cx.beginPath();cx.moveTo(6*S,-34*S);cx.lineTo(130*S,-80*S);cx.lineTo(130*S,0);cx.closePath();cx.fill()}
  const c=mix('#ffc9de','#3a2257',0*d);cx.strokeStyle='#fff2f8';cx.fillStyle='#fff2f8';cx.lineWidth=3*S;
  cx.beginPath();cx.moveTo(-1*S,-14*S+sh);cx.lineTo(-8*S-sw,0);cx.moveTo(-1*S,-14*S+sh);cx.lineTo(7*S+sw,0);cx.stroke();
  cx.beginPath();cx.moveTo(-1*S,-14*S+sh);cx.lineTo(1*S,-30*S+sh);cx.stroke();
  cx.fillStyle='#ffc9de';cx.beginPath();cx.roundRect?cx.roundRect(-10*S,-31*S+sh,9*S,16*S,3*S):cx.rect(-10*S,-31*S+sh,9*S,16*S);cx.fill();
  cx.fillStyle='#fff2f8';cx.beginPath();cx.arc(2*S,-35*S+sh,4.5*S,0,6.3);cx.fill();cx.fillStyle='#f5c542';cx.fillRect(-3*S,-39*S+sh,10*S,2.5*S);
  cx.strokeStyle='#ffe66d';cx.lineWidth=1.6*S;cx.beginPath();cx.moveTo(1*S,-26*S+sh);cx.lineTo(10*S,-10*S+sh);cx.lineTo(14*S+sw*.4,0);cx.stroke();
  if(P>.99){cx.strokeStyle='#fff2f8';cx.lineWidth=3*S;cx.beginPath();cx.moveTo(1*S,-28*S);cx.lineTo(10*S,-46*S+Math.sin(T*8)*3);cx.stroke()}
  cx.restore();
  const al=$('#meDot');if(al)al.style.bottom=(P*100)+'%'}
 // partículas
 const gold=d;cx.save();parts.forEach(o=>{const sp=(w*.9+o.v*.4);o.x-=sp*dt*.35*(1-d*.7);o.y+=(d>.5?-.03:.05+w*.02)*dt*(.5+o.v);if(o.x<-.02){o.x=1.02;o.y=Math.random()}if(o.y>1.02)o.y=-.02;if(o.y<-.02)o.y=1.02;
  const x=o.x*W,y=o.y*H;cx.globalAlpha=.55*(.6+w*.15);cx.strokeStyle=cx.fillStyle=gold>.5?'#ffe66d':'#fff';
  if(w>.7&&d<.5){cx.lineWidth=o.r*.7;cx.beginPath();cx.moveTo(x,y);cx.lineTo(x+w*14,y+2);cx.stroke()}else{cx.beginPath();cx.arc(x,y,o.r,0,6.3);cx.fill()}});cx.restore();
 // luciérnagas doradas en la cima
 if(d>.3){cx.save();cx.globalCompositeOperation='lighter';flies.forEach(o=>{o.f+=dt;const x=(o.x+Math.sin(o.f*.6)*.03)*W,y=(o.y*.6+.3+Math.cos(o.f*.8)*.03)*H,a=(.4+.6*Math.sin(o.f*2))*d;const rg=cx.createRadialGradient(x,y,0,x,y,o.r*6);rg.addColorStop(0,`rgba(255,230,109,${a})`);rg.addColorStop(1,'rgba(255,230,109,0)');cx.fillStyle=rg;cx.fillRect(x-o.r*6,y-o.r*6,o.r*12,o.r*12)});cx.restore()}
 // tormenta/tono oscuro en obstáculos
 if(w>.5){cx.fillStyle=`rgba(10,5,30,${clamp((w-.5)*.22,0,.3)})`;cx.fillRect(0,0,W,H)}
 // confeti
 if(P>.985&&!bursted){bursted=true;const bx=W*.84,by=sy(.84)-60*S;for(let i=0;i<110;i++){const an=Math.random()*6.28,v=2+Math.random()*7;burst.push({x:bx,y:by,vx:Math.cos(an)*v,vy:Math.sin(an)*v-4,c:['#ffc9de','#f5c542','#ffe66d','#a8dcff'][i%4],r:2+Math.random()*3,l:1})}}
 if(P<.9)bursted=false;
 burst=burst.filter(o=>o.l>0);burst.forEach(o=>{o.x+=o.vx;o.y+=o.vy;o.vy+=.18;o.vx*=.99;o.l-=.008;cx.globalAlpha=Math.max(o.l,0);cx.fillStyle=o.c;cx.fillRect(o.x,o.y,o.r*1.6,o.r)});cx.globalAlpha=1;
 // HUD
 const pc=Math.round(P*100);$('#meP').textContent=String(pc).padStart(3,'0');$('#meO').textContent=ov;$('#meFill').style.height=P*100+'%';
 $('#meB').textContent=Math.round(68+w*14+vel*60+(P>.99?-12:0));
 let st='preparando mochila…';const near=MK.findIndex(m=>Math.abs(P-m)<.04);
 if(P>.985)st='¡CIMA! · valió cada paso ✦';else if(near>-1&&P<MK[near]+.03)st=`obstáculo ${near+1} · frustración detectada…`;else if(near>-1)st='superado ✓ · otra idea, otro intento';else if(P>.75)st='cresta · casi ahí';else if(P>.3)st='subiendo · no me rindo';else if(P>.04)st='primeros pasos · ánimo alto';
 if(st!==seen){seen=st;$('#meSt').textContent='> '+st}
}
function start(){rz();on=true;last=performance.now();cancelAnimationFrame(raf);raf=requestAnimationFrame(frame)}
function reveal(){const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){const sec=en.target.closest('.mes')||en.target;sec.classList.add('in');en.target.classList.add('in');if(!sec._c){sec._c=1;sec.querySelectorAll('[data-n]').forEach(e=>{const n=+e.dataset.n,t0=performance.now();(function u(t){const k=clamp((t-t0)/1500,0,1);e.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(u)})(t0)})}}}),{root:sc,threshold:.18});$$('#meM .mep').forEach(e=>io.observe(e));return io}
let io=null;
window.openMe=()=>{open('#meM');sc.scrollTop=0;P=0;lastP=0;tp=0;burst=[];bursted=false;$$('#meM .mes,#meM .mep').forEach(e=>e.classList.remove('in'));if(io)io.disconnect();start();io=reveal();setTimeout(()=>io&&0,0);gsap.fromTo('.mewrap',{opacity:0,scale:1.04},{opacity:1,scale:1,duration:.9,ease:'power2.out'})};
addEventListener('resize',()=>on&&rz());
new MutationObserver(()=>{if(!M.classList.contains('on')){on=false;cancelAnimationFrame(raf)}}).observe(M,{attributes:true,attributeFilter:['class']});
$$('#meM .mepal button').forEach(b=>b.onclick=()=>{wrap.style.setProperty('--ac',b.dataset.c);toast('✦ '+b.getAttribute('aria-label'))});
if(window.VanillaTilt)VanillaTilt.init($$('#meM .melc,#meM .meloves article,#meM .mestats div'),{max:9,speed:400,glare:true,'max-glare':.18});
$$('#meBtn').forEach(b=>b.onclick=e=>{e.preventDefault();openMe()});
})();
$$('[data-close]').forEach(b=>b.onclick=close);$$('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target==m)close()}));addEventListener('keydown',e=>e.key=='Escape'&&close());
const phImg=n=>{const c=[['#ff9ec7','#b9a2ff'],['#b9a2ff','#ffe2b8'],['#ffe2b8','#ff9ec7']][n%3];return 'data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c[0]}"/><stop offset="1" stop-color="${c[1]}"/></linearGradient></defs><rect width="800" height="600" fill="#150d28"/><rect x="40" y="40" width="720" height="520" rx="26" fill="none" stroke="url(#g)" stroke-width="3"/><text x="400" y="290" font-family="serif" font-style="italic" font-size="62" fill="url(#g)" text-anchor="middle">Certificado</text><text x="400" y="350" font-family="monospace" font-size="24" fill="#b4a9cc" text-anchor="middle">img/cert${n}.jpg</text></svg>`)};
/* certificados: mapa estelar (lista + vista destacada) — edita los datos aquí */
const CERTS=[
{n:1,c:'congreso',t:'Ponente · XIV Congreso EduTicInnova',i:'USMP virtual',y:'2025',d:'Participación como ponente en el congreso internacional organizado por la USMP virtual.'},
{n:2,c:'congreso',t:'Participante · XIV Congreso EduTicInnova',i:'USMP virtual',y:'2025',d:'Congreso internacional de educación, tecnología e innovación.'},
{n:3,c:'redes',t:'CCNA: Introducción a las redes',i:'Cisco Networking Academy',y:'2025',d:'Fundamentos de redes, direccionamiento y conectividad.'},
{n:4,c:'congreso',t:'Seminario CAEN y USMP',i:'CAEN · USMP',y:'2024',d:'Participación en seminario académico organizado por la CAEN y la USMP.'},
{n:5,c:'congreso',t:'Congreso Internacional VISIÓN XXVIII',i:'USMP',y:'2023',d:'Evento académico de tecnología e innovación.'},
{n:6,c:'congreso',t:'Congreso Nacional FIA USMP SUR',i:'USMP Sur',y:'2021',d:'1.ª edición: Las Siete Dimensiones de BIM.'},
{n:7,c:'redes',t:'Introducción a la Seguridad Cibernética',i:'Cisco Networking Academy',y:'2021',d:'Conceptos básicos de ciberseguridad y protección de la información.'},
{n:8,c:'tec',t:'Microsoft Excel Intermedio',i:'Certificación',y:'2021',d:'Manejo intermedio de hojas de cálculo y análisis de datos.'},
{n:9,c:'congreso',t:'Congreso Internacional VISIÓN 2020',i:'USMP',y:'2020',d:'Participación en evento académico de tecnología e innovación.'},
{n:10,c:'tec',t:'Gestión de Sitios Web',i:'Curso integral',y:'2019',d:'Curso integral de creación y administración de sitios web.'}];
let cL=CERTS.slice(),cSel=0,userT=0;
const setImg=(im,n)=>{im.onerror=()=>{im.onerror=null;im.src=phImg(n)};im.src=`img/cert${n}.jpg`};
function renderList(){$('#cList').innerHTML=cL.map((c,i)=>`<button class="ci${i==cSel?' on':''}" data-i="${i}" style="--i:${i}" type="button"><i>${String(i+1).padStart(2,'0')}</i><b>${c.t}</b><span>${c.i} · ${c.y}</span><em class="ib"></em></button>`).join('');
$$('.ci').forEach(b=>{b.onclick=()=>{clearTimeout(b._h);userT=performance.now();pick(+b.dataset.i)};b.onmouseenter=()=>{clearTimeout(b._h);b._h=setTimeout(()=>{userT=performance.now();if(+b.dataset.i!=cSel)pick(+b.dataset.i)},560)};b.onmouseleave=()=>clearTimeout(b._h)})}
const cfImgs=[$('#cfImg'),$('#cfImgB')];let cfI=0;
function pick(i){if(!cL.length)return;cSel=(i+cL.length)%cL.length;const c=cL[cSel];$$('.ci').forEach((b,k)=>b.classList.toggle('on',k==cSel));
$('#cfYear').textContent='✦ '+c.y;$('#cfIss').textContent=c.i;$('#cfTit').textContent=c.t;$('#cfDesc').textContent=c.d;$('#cfCnt').textContent=`${cSel+1} / ${cL.length}`;
const A=cfImgs[cfI],B=cfImgs[1-cfI];cfI=1-cfI;setImg(B,c.n);gsap.killTweensOf([A,B]);B.style.zIndex=2;A.style.zIndex=1;
gsap.fromTo(B,{opacity:0,scale:1.05},{opacity:1,scale:1,duration:1,ease:'power2.inOut'});gsap.to(A,{opacity:0,duration:1,ease:'power2.inOut'});
gsap.fromTo('#cfIss,#cfTit,#cfDesc,#cfYear',{opacity:0,y:10},{opacity:1,y:0,stagger:.08,duration:.8,ease:'power2.out'})}
$$('#fl button').forEach(b=>b.onclick=()=>{$$('#fl button').forEach(z=>z.classList.toggle('on',z==b));const f=b.dataset.f;cL=CERTS.filter(c=>f=='all'||c.c==f);cSel=0;renderList();pick(0)});
renderList();pick(0);VanillaTilt.init($('.cframe'),{max:7,glare:true,'max-glare':.25,speed:600,scale:1.02});
function fillModal(d){cSel=(cSel+d+cL.length)%cL.length;const c=cL[cSel];setImg($('#cimg'),c.n);$('#cm1').textContent=`${c.i} · ${c.y}`;$('#ct').textContent=c.t;$('#cd').textContent=c.d;$('#cc').textContent=`${cSel+1} / ${cL.length}`;
gsap.fromTo('#cimg',{opacity:0,scale:.97},{opacity:1,scale:1,duration:.8,ease:'power2.out'});gsap.fromTo('#cm1,#ct,#cd',{opacity:0,y:8},{opacity:1,y:0,stagger:.07,duration:.6,ease:'power2.out'})}
$('#cfOpen').onclick=$('.cframe').onclick=()=>{fillModal(0);open('#certM');gsap.fromTo('#certM .mbox',{opacity:0,scale:.95,y:24},{opacity:1,scale:1,y:0,duration:.7,ease:'power3.out'})};
$('#cPrev').onclick=()=>{fillModal(-1);pick(cSel)};$('#cNext').onclick=()=>{fillModal(1);pick(cSel)};
addEventListener('keydown',e=>{if(!$('#certM').classList.contains('on'))return;if(e.key=='ArrowRight'){fillModal(1);pick(cSel)}if(e.key=='ArrowLeft'){fillModal(-1);pick(cSel)}});

/* contacto: copiar + formulario → WhatsApp / correo */
$$('.cp').forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);toast('✦ Copiado: '+b.dataset.copy)}catch(e){toast('No se pudo copiar')}});
const msg=()=>`Hola, soy ${$('#fn').value}.\nAsunto: ${$('#fs').value}\n${$('#fe').value?'Correo: '+$('#fe').value+'\n':''}\n${$('#fm').value}`;
$('#form').onsubmit=e=>{e.preventDefault();const url=`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg())}`,w=window.open('about:blank','_blank');const go=()=>{w?w.location.href=url:window.open(url,'_blank')};window.sendFairy?sendFairy(go):go()};
$('#mail').onclick=()=>{if(!$('#fn').value||!$('#fm').value)return window.validate();const go=()=>location.href=`mailto:${EMAIL}?subject=${encodeURIComponent($('#fs').value)}&body=${encodeURIComponent(msg())}`;window.sendFairy?sendFairy(go):go()};

/* ====== UNIVERSO 3D: galaxia con shader interactivo + Escorpio + Las Tres Marías ====== */
document.fonts.ready.then(()=>{try{
const R=new THREE.WebGLRenderer({canvas:$('#bg'),antialias:true});R.setPixelRatio(Math.min(devicePixelRatio,1.25));R.setSize(innerWidth,innerHeight);R.setClearColor(0x0b0716,1);
const S=new THREE.Scene(),cam=new THREE.PerspectiveCamera(60,innerWidth/innerHeight,.1,1000);
let comp=null,bloom=null,boost=0,openT=0,openV=0,warp=0;
if(THREE.EffectComposer&&THREE.UnrealBloomPass){comp=new THREE.EffectComposer(R);comp.addPass(new THREE.RenderPass(S,cam));bloom=new THREE.UnrealBloomPass(new THREE.Vector2(innerWidth,innerHeight),.6,.7,.18);comp.addPass(bloom)}
const glow=(c='#fff')=>{const k=document.createElement('canvas');k.width=k.height=128;const x=k.getContext('2d'),g=x.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,'#fff');g.addColorStop(.18,c);g.addColorStop(.5,'rgba(255,255,255,.08)');g.addColorStop(1,'transparent');x.fillStyle=g;x.fillRect(0,0,128,128);return new THREE.CanvasTexture(k)};
const tG=glow('rgba(255,225,240,.9)'),AD=THREE.AdditiveBlending;

/* uniformes compartidos: tiempo, giro, mouse, onda de clic */
const U={uTime:{value:0},uSpin:{value:0},uMouse:{value:new THREE.Vector2(9,9)},uMV:{value:0},uAsp:{value:innerWidth/innerHeight},uScale:{value:innerHeight*R.getPixelRatio()*.5},uClick:{value:new THREE.Vector2(9,9)},uPT:{value:99}};
const GV=`attribute float aSeed;uniform float uTime,uSpin,uScale,uSize,uOp,uR,uMV,uAsp,uPT;uniform vec2 uMouse,uClick;varying vec3 vC;varying float vA;
void main(){vec3 p=position;float r=length(p.xz);float a=uSpin*(1.2/(1.+r*.07));float s=sin(a),c=cos(a);p.xz=mat2(c,-s,s,c)*p.xz;
p.y+=sin(uTime*.6+aSeed*20.+r*.1)*.35;
vec4 mv=modelViewMatrix*vec4(p,1.);vec4 cl=projectionMatrix*mv;vec2 nd=cl.xy/cl.w;
vec2 d=(nd-uMouse)*vec2(uAsp,1.);float dist=length(d);float f=exp(-dist*dist*10.);vec2 dir=dist>1e-4?d/dist:vec2(0.);vec2 sw=vec2(-dir.y,dir.x);float k=-mv.z*.06;
mv.xy+=(sw*(.7+uMV*1.2)+dir*.35)*f*k*(1.+uMV*1.2);mv.z+=f*(-mv.z)*(.01+uMV*.02);
vec2 dc=(nd-uClick)*vec2(uAsp,1.);float dd=length(dc);float w=exp(-pow((dd-uPT*.85)*8.,2.))*exp(-uPT*1.1);vec2 dn=dd>1e-4?dc/dd:vec2(0.);mv.xy+=dn*w*k*1.1;
float g=f+w;gl_Position=projectionMatrix*mv;
float cen=mix(.28,1.,smoothstep(0.,.34,r/uR));
vA=uOp*cen*(.65+.35*sin(uTime*2.+aSeed*60.))*(1.+g*.4);vC=color*(1.+g*.45);
gl_PointSize=uSize*uScale*(.55+aSeed*.9)*(1.+g*.8)/(-mv.z);}`;
const GF=`varying vec3 vC;varying float vA;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;float a=pow(1.-d*2.,1.6);gl_FragColor=vec4(vC,a*vA);}`;
/* galaxia espiral */
function makeGalaxy(n,Rad,arms,tw,i0,m0,o0,size,op){const p=new Float32Array(n*3),c=new Float32Array(n*3),sd=new Float32Array(n),t=new THREE.Color(),ci=new THREE.Color(i0),cm=new THREE.Color(m0),co=new THREE.Color(o0);
for(let i=0;i<n;i++){const r=Math.pow(Math.random(),1.45)*Rad,a=(i%arms)/arms*Math.PI*2+r*tw,sc=Math.pow(Math.random(),2.4)*(Math.random()<.5?1:-1)*r*.2;
p[i*3]=Math.cos(a)*r+sc;p[i*3+1]=(Math.random()-.5)*Math.max(.8,Rad*.1-r*.1)*Math.random()*2;p[i*3+2]=Math.sin(a)*r+sc*.8;sd[i]=Math.random();
t.copy(ci).lerp(cm,Math.min(1,r/(Rad*.3))).lerp(co,Math.max(0,(r-Rad*.3)/(Rad*.7)));if(Math.random()<.08)t.set('#ffe2b8');c.set([t.r,t.g,t.b],i*3)}
const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(p,3));g.setAttribute('color',new THREE.BufferAttribute(c,3));g.setAttribute('aSeed',new THREE.BufferAttribute(sd,1));
return new THREE.Points(g,new THREE.ShaderMaterial({uniforms:Object.assign({uSize:{value:size},uOp:{value:op},uR:{value:Rad}},U),vertexShader:GV,fragmentShader:GF,vertexColors:true,transparent:true,blending:AD,depthWrite:false}))}
const GT=new THREE.Group();GT.position.set(0,-4,-88);GT.rotation.set(-.85,0,.3);S.add(GT);
const gal=makeGalaxy(48000,95,5,.12,'#fff4fa','#ff9ec7','#8c7bff',.55,.85);GT.add(gal);
const core=new THREE.Sprite(new THREE.SpriteMaterial({map:glow('#ffd1e6'),transparent:true,opacity:.4,blending:AD,depthWrite:false}));core.scale.setScalar(42);GT.add(core);
[[-95,38,-170,.4,.5,26],[105,-48,-190,-.5,.2,22]].forEach(([x,y,z,rx,rz,Rr])=>{const g=makeGalaxy(10000,Rr,3,.2,'#fff0ff','#b9a2ff','#ff9ec7',.6,.8);g.position.set(x,y,z);g.rotation.set(rx,0,rz);S.add(g)});
/* nebulosas suaves */
[['#ff9ec7',-40,20,-70,90],['#b9a2ff',50,-25,-90,110],['#ffe2b8',0,-45,-60,70]].forEach(([c,x,y,z,s])=>{const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:glow(c),transparent:true,opacity:.09,blending:AD,depthWrite:false}));sp.position.set(x,y,z);sp.scale.setScalar(s);S.add(sp)});
/* estrellas lejanas */
const sa=new Float32Array(2600*3);for(let i=0;i<2600;i++){const u=Math.random()*2-1,t=Math.random()*6.2832,q=Math.sqrt(1-u*u),d=160+Math.random()*120;sa.set([q*Math.cos(t)*d,u*d,q*Math.sin(t)*d],i*3)}
const sg=new THREE.BufferGeometry();sg.setAttribute('position',new THREE.BufferAttribute(sa,3));const far=new THREE.Points(sg,new THREE.PointsMaterial({size:.5,map:tG,color:0xfff3fb,transparent:true,opacity:.7,blending:AD,depthWrite:false}));S.add(far);

/* constelaciones (reaccionan al mouse) */
const label=(t,h)=>{const c=document.createElement('canvas');c.width=512;c.height=128;const x=c.getContext('2d');x.font='italic 600 54px "Cormorant Garamond",serif';x.fillStyle='#ffd6ea';x.textAlign='center';x.textBaseline='middle';x.fillText(t,256,64);const s=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c),transparent:true,opacity:.6,depthWrite:false}));s.scale.set(h*4,h,1);return s};
const stars=[],cons=[];
function constel(P,L,sz,sc,pos,lab,lp,col){const g=new THREE.Group();g.position.set(...pos);g.scale.setScalar(sc);S.add(g);
const v=[];L.forEach(([a,b])=>v.push(new THREE.Vector3(P[a][0],P[a][1],0),new THREE.Vector3(P[b][0],P[b][1],0)));
const ln=new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(v),new THREE.LineBasicMaterial({color:col,transparent:true,opacity:.32,blending:AD}));g.add(ln);
const mine=[];P.forEach((q,i)=>{const s=new THREE.Sprite(new THREE.SpriteMaterial({map:tG,color:i in sz?0xffffff:col,transparent:true,blending:AD,depthWrite:false}));s.position.set(q[0],q[1],0);const b=sz[i]||1.1;s.userData={b,ph:Math.random()*6,near:0};s.scale.setScalar(b);g.add(s);stars.push(s);mine.push(s)});
const lb=label(lab,1.5);lb.position.set(...lp,0);g.add(lb);cons.push({g,ln,mine,near:0});return g}
const SC=constel([[-4.2,5],[-3.2,3.4],[-5,2.6],[-1.8,.8],[-.8,-.6],[-.5,-1.4],[-.5,-3.4],[.8,-4.6],[1.8,-5.4],[3.6,-6.2],[5.4,-6.8],[6.4,-6.2],[7,-5],[6.4,-4]],
[[0,1],[2,1],[1,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13]],{4:3.6,13:2,1:1.8,10:1.7,0:1.5},3.1,[20,6,-42],'Escorpio ♏',[1,-9.5],0xff9ec7);
const OR=constel([[-1.8,3.2],[1.7,2.9],[-.8,-.1],[0,.1],[.8,.3],[-1.5,-3.3],[1.6,-3],[0,3.9]],
[[0,2],[1,4],[2,3],[3,4],[2,5],[4,6],[0,7],[1,7]],{0:2.2,1:1.7,2:2.4,3:2.6,4:2.4,5:1.7,6:2.4},3.4,[-26,-4,-62],'Las Tres Marías',[0,-5.6],0xb9a2ff);
/* estrellas fugaces + onda */
const sh=[];const shoot=()=>{const m=new THREE.Mesh(new THREE.CylinderGeometry(.02,.02,6),new THREE.MeshBasicMaterial({color:0xffd6ea,transparent:true,opacity:.7,blending:AD}));m.position.set(Math.random()*80-10,40,-40-Math.random()*30);m.rotation.z=.9;S.add(m);sh.push(m)};setInterval(shoot,6000);
window.wishBoost=()=>{boost=1;for(let i=0;i<2;i++)setTimeout(shoot,i*200)};
window.galaxyOpen=on=>{openT=on?1:0;if(on)warp=.2};
window.galaxyPulse=(x,y)=>{U.uClick.value.set(x/innerWidth*2-1,-(y/innerHeight*2-1));U.uPT.value=0};
addEventListener('resize',()=>{R.setSize(innerWidth,innerHeight);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();comp&&comp.setSize(innerWidth,innerHeight);U.uAsp.value=innerWidth/innerHeight;U.uScale.value=innerHeight*R.getPixelRatio()*.5});

const sm=new THREE.Vector2(),tgt=new THREE.Vector2(),wp=new THREE.Vector3();let T=0,sS=0,smx=0,smy=0,prev=performance.now();
(function a(now){requestAnimationFrame(a);if(window.skip3d&&(window._fr=!window._fr))return;const dt=Math.min(.05,((now||performance.now())-prev)/1000);prev=now||performance.now();T+=dt;sS+=(sp-sS)*.05;
MV*=.9;smx+=(mX-smx)*.06;smy+=(mY-smy)*.06;
if(moved){tgt.set(mx/innerWidth*2-1,-(my/innerHeight*2-1));sm.lerp(tgt,.14);U.uMouse.value.copy(sm)}
U.uTime.value=T;U.uSpin.value+=dt*(.09+MV*.4+openV*.1+warp*.6);U.uMV.value+=(MV-U.uMV.value)*.1;U.uPT.value=Math.min(99,U.uPT.value+dt);
GT.scale.setScalar(1+sS*.8);GT.position.x=Math.sin(sS*Math.PI*2)*14;openV+=(openT-openV)*.07;warp*=.92;GT.rotation.x=-.85+smy*.14-openV*.62;GT.rotation.z=.3+smx*.2-openV*.3;gal.material.uniforms.uOp.value=.85*(1-openV*.3);if(warp>.005||cam.fov!=60){cam.fov=warp>.005?60+warp*12:60;cam.updateProjectionMatrix()}
core.material.opacity=.4*(1-Math.max(0,sS-.7)*2.4);
far.rotation.y+=.00005+MV*.0006;
SC.rotation.y=Math.sin(T*.3)*.12+smx*.5;SC.rotation.x=smy*.25;OR.rotation.y=Math.sin(T*.25+2)*.12+smx*.45;OR.rotation.x=smy*.22;
cons.forEach(o=>{o.g.getWorldPosition(wp);wp.project(cam);const d=Math.hypot((wp.x-sm.x)*cam.aspect,wp.y-sm.y);o.near+=((moved?Math.exp(-d*d*3.5):0)-o.near)*.08;o.ln.material.opacity=.32+o.near*.35});
stars.forEach(s=>{const n=cons.find(o=>o.mine.includes(s)).near;s.scale.setScalar(s.userData.b*(1+.22*Math.sin(T*2+s.userData.ph)+n*.3))});
for(let i=sh.length-1;i>=0;i--){const m=sh[i];m.position.x-=.8;m.position.y-=.8;m.material.opacity-=.007;if(m.material.opacity<=0){S.remove(m);sh.splice(i,1)}}
cam.position.set(smx*12,-smy*7+sS*3,50-sS*36);cam.lookAt(0,0,-60);
boost*=.965;if(bloom)bloom.strength=.6+Math.max(0,sS-.85)*1.2+boost*.5+MV*.05+warp*.2;comp?comp.render():R.render(S,cam)})(performance.now());
}catch(err){console.error('Universo 3D:',err)}});

/* ====== Logo AVDER: constelación de estrellas con malla tech y barrido de escáner ====== */
(function(){const c=$('#logo'),x=c.getContext('2d'),box=c.parentElement,DPR=Math.min(devicePixelRatio||1,2);let W=0,H=0,ps=[],lk=[],m={x:-999,y:-999},T=0,G=6;
function init(){const r=box.getBoundingClientRect();if(r.width<10||r.height<10)return;W=c.width=Math.round(r.width*DPR);H=c.height=Math.round(r.height*DPR);
const o=document.createElement('canvas');o.width=W;o.height=H;const q=o.getContext('2d');q.fillStyle='#fff';q.textAlign='center';q.textBaseline='middle';
let fs=H*.46;q.font=`700 ${fs}px Sora,sans-serif`;const w=q.measureText('AVDER').width;if(w>W*.84){fs*=W*.84/w;q.font=`700 ${fs}px Sora,sans-serif`}q.fillText('AVDER',W/2,H/2);
G=Math.max(4,Math.round(6*DPR));const d=q.getImageData(0,0,W,H).data,map={};ps=[];lk=[];
for(let y=0,gy=0;y<H;y+=G,gy++)for(let xx=0,gx=0;xx<W;xx+=G,gx++)if(d[(y*W+xx)*4+3]>128){map[gx+','+gy]=ps.length;ps.push({hx:xx,hy:y,gx,gy,x:Math.random()*W,y:Math.random()*H,vx:0,vy:0,ph:Math.random()*6.28,c:COL[Math.random()*3|0],big:Math.random()<.18})}
ps.forEach((p,i)=>[[1,0],[0,1],[1,1]].forEach(([dx,dy])=>{const k=map[(p.gx+dx)+','+(p.gy+dy)];if(k!=null)lk.push([i,k])}))}
if('ResizeObserver' in window)new ResizeObserver(init).observe(box);else addEventListener('resize',init);
document.fonts.ready.then(init);setTimeout(init,700);
const pos=e=>{const r=c.getBoundingClientRect();m.x=(e.clientX-r.left)*DPR;m.y=(e.clientY-r.top)*DPR};
c.addEventListener('mousemove',pos);c.addEventListener('mouseleave',()=>m.x=m.y=-999);
c.addEventListener('touchmove',e=>pos(e.touches[0]),{passive:true});c.addEventListener('touchend',()=>m.x=m.y=-999);
(function f(){requestAnimationFrame(f);T+=.03;x.clearRect(0,0,W,H);x.globalCompositeOperation='lighter';const R=100*DPR,sx=((T*.22)%1.5-.25)*W;
ps.forEach(p=>{const dx=p.x-m.x,dy=p.y-m.y,d=Math.hypot(dx,dy);if(d<R&&d>.01){p.vx+=dx/d*4.5;p.vy+=dy/d*4.5}p.vx+=(p.hx-p.x)*.06;p.vy+=(p.hy-p.y)*.06;p.vx*=.82;p.vy*=.82;p.x+=p.vx;p.y+=p.vy});
x.strokeStyle='rgba(185,162,255,.5)';x.lineWidth=.8*DPR;x.globalAlpha=.3;x.beginPath();const L=G*1.9;lk.forEach(([i,k])=>{const A=ps[i],B=ps[k];if(Math.abs(A.x-B.x)<L&&Math.abs(A.y-B.y)<L){x.moveTo(A.x,A.y);x.lineTo(B.x,B.y)}});x.stroke();
ps.forEach(p=>{const sc=Math.max(0,1-Math.abs(p.hx-sx)/(70*DPR)),s=((p.big?11:6.5)+Math.sin(T*2+p.ph)*1.5+sc*7)*DPR;x.globalAlpha=Math.min(1,.65+.2*Math.sin(T*2+p.ph)+sc);x.drawImage(starSprite(sc>.5?'#ffffff':p.c),p.x-s/2,p.y-s/2,s,s)});
x.globalAlpha=.5;const gr=x.createLinearGradient(sx-40*DPR,0,sx+40*DPR,0);gr.addColorStop(0,'rgba(255,255,255,0)');gr.addColorStop(.5,'rgba(185,162,255,.28)');gr.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=gr;x.fillRect(sx-40*DPR,0,80*DPR,H);
x.globalAlpha=1;x.globalCompositeOperation='source-over'})()})();

addEventListener('load',()=>setTimeout(()=>ScrollTrigger.refresh(),300));

/* ===== BOSQUE ENCANTADO (contacto) ===== */
(function(){
const sec=$('#contact'),cv=$('#fairy'),x=cv.getContext('2d'),F=$('#forest'),form=$('#form');let W,H,on=false,T=0;const m={x:-999,y:-999},dust=[];
const rs=()=>{W=cv.width=sec.offsetWidth;H=cv.height=sec.offsetHeight};rs();addEventListener('resize',rs);
const rnd=(a,b)=>a+Math.random()*(b-a);
const pine=(cx,b,h,w)=>{const R=[],Lf=[];for(let k=1;k<=4;k++){const y=b-h+h*k/4,ww=w*k/4;R.push([cx+ww,y],[cx+ww*.5,y]);Lf.unshift([cx-ww,y],[cx-ww*.5,y])}return'M'+[[cx,b-h],...R,[cx+w*.1,b+4],[cx-w*.1,b+4],...Lf].map(p=>p.map(v=>v.toFixed(1)).join(' ')).join('L')+'Z'};
const LAY=[{n:30,h:[110,200],w:[30,50],f:'#2a1f55',s:'rgba(185,162,255,.35)',b:430},{n:20,h:[170,300],w:[46,76],f:'#1a1238',s:'rgba(255,158,199,.22)',b:470},{n:13,h:[260,430],w:[70,120],f:'#0d0824',s:'rgba(255,226,184,.15)',b:520}];
let svg='';
LAY.forEach((l,i)=>{svg+=`<svg class="fl" viewBox="0 0 1600 520" preserveAspectRatio="none">`;for(let k=0;k<l.n;k++){const cx=(k+Math.random()*.8)/l.n*1700-50;svg+=`<path d="${pine(cx,l.b,rnd(...l.h),rnd(...l.w))}" fill="${l.f}" stroke="${l.s}" stroke-width="1"/>`}
for(let k=0;k<(i+1)*7;k++)svg+=`<circle class="bl" cx="${rnd(0,1600).toFixed(0)}" cy="${rnd(l.b-90,l.b-4).toFixed(0)}" r="${rnd(1.5,3.5).toFixed(1)}" fill="${COL[k%3]}" style="animation-delay:${(Math.random()*4).toFixed(2)}s"/>`;svg+='</svg>'});
F.innerHTML=svg;
const FL=[...F.querySelectorAll('.fl')],qx=FL.map(g=>gsap.quickTo(g,'x',{duration:1.3,ease:'power3.out'}));
FL.forEach((g,i)=>gsap.fromTo(g,{y:90-i*25},{y:0,ease:'none',scrollTrigger:{trigger:sec,start:'top bottom',end:'bottom bottom',scrub:true}}));
sec.addEventListener('mousemove',e=>{const s=sec.getBoundingClientRect();m.x=e.clientX-s.left;m.y=e.clientY-s.top;FL.forEach((g,i)=>qx[i](-(e.clientX/innerWidth-.5)*(14+i*28)))});
sec.addEventListener('mouseleave',()=>m.x=m.y=-999);
ScrollTrigger.create({trigger:sec,start:'top bottom',end:'bottom top',onToggle:s=>on=s.isActive});
/* luciérnagas, hadas y polvo */
const ff=Array.from({length:45},()=>({x:Math.random(),y:Math.random(),ph:Math.random()*6,s:rnd(.0002,.0007),r:rnd(1,2.6),c:COL[Math.random()*3|0]}));
const fr=[0,1,2].map(i=>({x:W*(.25+.25*i),y:H*.3,vx:0,vy:0,ph:i*2.1,c:COL[i],tx:W*.5,ty:H*.4,tt:0,busy:false,msg:false,z:i?.75:1}));
const GL=Array.from({length:14},()=>({x:Math.random(),y:Math.random(),v:rnd(.0004,.0012),t:['0','1','</>','{}','01','♡','=>'][Math.random()*7|0],c:COL[Math.random()*3|0]}));
const addDust=(x0,y0,n,sp=1,c)=>{for(let i=0;i<n&&dust.length<260;i++){const a=Math.random()*6.283,v=rnd(.4,2.4)*sp;dust.push({x:x0,y:y0,vx:Math.cos(a)*v,vy:Math.sin(a)*v-.3,l:1,d:rnd(.008,.022),c:c||COL[i%3],r:rnd(.8,2.6)})}};
window.fairyBurst=(cx,cy,n)=>{const s=sec.getBoundingClientRect();addDust(cx-s.left,cy-s.top,n,1.6)};
const steer=(f,tx,ty,k,d)=>{f.vx=(f.vx+(tx-f.x)*k)*d;f.vy=(f.vy+(ty-f.y)*k)*d;f.x+=f.vx;f.y+=f.vy};
const focusPt=()=>{const a=document.activeElement;if(a&&a.matches&&a.matches('#form input,#form textarea')){const r=a.getBoundingClientRect(),s=sec.getBoundingClientRect();return[r.right-s.left-34,r.top-s.top+r.height*.5-18]}return null};
const drawFairy=f=>{const g=x.createRadialGradient(f.x,f.y,0,f.x,f.y,34*f.z);g.addColorStop(0,'rgba(255,255,255,.9)');g.addColorStop(.18,f.c);g.addColorStop(1,'rgba(0,0,0,0)');x.globalAlpha=.8;x.fillStyle=g;x.beginPath();x.arc(f.x,f.y,34*f.z,0,6.283);x.fill();
const sp=Math.hypot(f.vx,f.vy),L=Math.min(60,sp*6+12),a=Math.atan2(f.vy,f.vx)+Math.PI;x.save();x.translate(f.x,f.y);x.scale(f.z,f.z);
x.save();x.rotate(a);const tg=x.createLinearGradient(0,0,L,0);tg.addColorStop(0,f.c);tg.addColorStop(1,'rgba(0,0,0,0)');x.globalAlpha=.75;x.fillStyle=tg;x.beginPath();x.moveTo(0,-2.4);x.lineTo(L,0);x.lineTo(0,2.4);x.closePath();x.fill();x.restore();
x.save();x.rotate(T*1.6+f.ph);x.globalAlpha=.55;x.strokeStyle=f.c;x.lineWidth=1;x.beginPath();x.ellipse(0,0,13,5,0,0,6.283);x.stroke();x.globalAlpha=1;x.fillStyle='#fff';x.beginPath();x.arc(13*Math.cos(T*5+f.ph),5*Math.sin(T*5+f.ph),1.8,0,6.283);x.fill();x.restore();
x.globalAlpha=1;x.fillStyle='#fff';x.beginPath();x.arc(0,0,2.8,0,6.283);x.fill();x.restore();
if(f.msg){x.globalAlpha=1;x.fillStyle='rgba(8,4,20,.88)';x.strokeStyle='#9bffd3';x.lineWidth=1;x.beginPath();(x.roundRect||x.rect).call(x,f.x+12,f.y+8,34,20,5);x.fill();x.stroke();x.font='11px monospace';x.fillStyle='#9bffd3';x.fillText('</>',f.x+17,f.y+22)}};
(function loop(){T+=.016;x.clearRect(0,0,W,H);
if(on){x.globalCompositeOperation='lighter';
if(m.x>-500){const g=x.createRadialGradient(m.x,m.y,0,m.x,m.y,170);g.addColorStop(0,'rgba(255,226,248,.17)');g.addColorStop(1,'rgba(0,0,0,0)');x.globalAlpha=1;x.fillStyle=g;x.fillRect(m.x-170,m.y-170,340,340)}
x.font='13px "Fira Code",monospace';GL.forEach(q=>{q.y+=q.v;if(q.y>1.03)q.y=-.03;x.globalAlpha=.2+.15*Math.sin(T+q.x*9);x.fillStyle=q.c;x.fillText(q.t,q.x*W,q.y*H)});
ff.forEach(p=>{p.x+=Math.sin(T*.6+p.ph)*.0003;p.y-=p.s;if(p.y<-.03)p.y=1.03;x.globalAlpha=.25+.75*Math.abs(Math.sin(T*1.4+p.ph));x.fillStyle=p.c;x.beginPath();x.arc(p.x*W,p.y*H,p.r,0,6.283);x.fill()});
fr.forEach((f,i)=>{if(!f.busy){if(i==0){const fp=focusPt();if(fp)steer(f,fp[0]+Math.sin(T*4)*10,fp[1]+Math.cos(T*5)*8,.05,.82);else if(m.x>-500)steer(f,m.x+44+Math.sin(T*3)*22,m.y-34+Math.cos(T*2.4)*14,.03,.85);else{if(T>f.tt){f.tx=rnd(.1,.9)*W;f.ty=rnd(.1,.7)*H;f.tt=T+rnd(2,4)}steer(f,f.tx,f.ty,.005,.94)}}
else{if(T>f.tt){f.tx=rnd(.05,.95)*W;f.ty=rnd(.05,.75)*H;f.tt=T+rnd(2,4.5)}steer(f,f.tx+Math.sin(T*2+f.ph)*34,f.ty+Math.cos(T*1.7+f.ph)*22,.004,.95)}}
if(Math.random()<(f.busy?.8:.4))dust.push({x:f.x+rnd(-4,4),y:f.y+rnd(0,6),vx:rnd(-.3,.3),vy:rnd(.1,.7),l:1,d:rnd(.01,.025),c:f.c,r:rnd(.8,2.4)});
if(f.busy)addDust(f.x,f.y,2,.6,f.c)});
for(let i=dust.length-1;i>=0;i--){const d=dust[i];d.x+=d.vx;d.y+=d.vy;d.vy+=.012;d.vx*=.985;d.l-=d.d;if(d.l<=0){dust.splice(i,1);continue}x.globalAlpha=d.l;x.fillStyle=d.c;x.beginPath();x.arc(d.x,d.y,d.r*d.l+.3,0,6.283);x.fill()}
x.globalCompositeOperation='source-over';fr.forEach(drawFairy);x.globalAlpha=1}
requestAnimationFrame(loop)})();
/* interacción con el formulario */
form.addEventListener('input',e=>{const r=e.target.getBoundingClientRect(),s=sec.getBoundingClientRect(),px=Math.min(r.right-24,r.left+26+(e.target.value||'').length*8.5);addDust(px-s.left,r.top-s.top+r.height*.62,5,1.1)});
form.addEventListener('focusin',e=>{if(e.target.matches('input,textarea')){const r=e.target.getBoundingClientRect(),s=sec.getBoundingClientRect();addDust(r.right-s.left-34,r.top-s.top+r.height*.5,16,1.8)}});
$$('#spells button').forEach(b=>b.onclick=()=>{$$('#spells button').forEach(k=>k.classList.remove('on'));b.classList.add('on');$('#fs').value=b.dataset.v;const r=b.getBoundingClientRect();fairyBurst(r.left+r.width/2,r.top+r.height/2,22)});
sec.addEventListener('click',e=>{const s=sec.getBoundingClientRect();addDust(e.clientX-s.left,e.clientY-s.top,14,1.4)});
/* el hada mensajera */
window.sendFairy=cb=>{const f=fr[0],b=$('#form .go').getBoundingClientRect(),s=sec.getBoundingClientRect();
const P=[[b.left-s.left+b.width/2,b.top-s.top],[b.left-s.left-W*.12,b.top-s.top-H*.4],[W*.8,H*.02],[W*1.12,-H*.25]],o={t:0};
f.busy=true;f.msg=true;f.vx=f.vy=0;window.wishBoost&&wishBoost();addDust(P[0][0],P[0][1],40,2.4);
gsap.to(o,{t:1,duration:1.7,ease:'power2.in',onUpdate:()=>{const u=o.t,v=1-u;f.x=v*v*v*P[0][0]+3*v*v*u*P[1][0]+3*v*u*u*P[2][0]+u*u*u*P[3][0];f.y=v*v*v*P[0][1]+3*v*v*u*P[1][1]+3*v*u*u*P[2][1]+u*u*u*P[3][1]},
onComplete:()=>{f.msg=false;cb&&cb();toast('✓ Mensaje enviado');addDust(W*.9,30,60,3);f.x=W*.5;f.y=H*.5;setTimeout(()=>f.busy=false,400)}})};
})();


/* ===== HELECHOS (ligeros) + FORMULARIO ===== */
(function(){
const sec=$('#contact'),form=$('#form'),rnd=(a,b)=>a+Math.random()*(b-a);
document.body.insertAdjacentHTML('beforeend','<svg width="0" height="0" style="position:absolute"><defs><linearGradient id="fernG" x1="0" x2="1"><stop offset="0" stop-color="#0c5d57"/><stop offset=".55" stop-color="#2fe0b8"/><stop offset="1" stop-color="#e4fff4"/></linearGradient><linearGradient id="fernD" x1="0" x2="1"><stop offset="0" stop-color="#05201f"/><stop offset=".6" stop-color="#0d6b63"/><stop offset="1" stop-color="#1fa593"/></linearGradient><linearGradient id="fernP" x1="0" x2="1"><stop offset="0" stop-color="#4a2a82"/><stop offset=".55" stop-color="#b9a2ff"/><stop offset="1" stop-color="#ffe2f4"/></linearGradient></defs></svg>');
const frond=(len,front)=>{const bend=rnd(-.4,.4)*len,ex=bend*1.5,f=v=>v.toFixed(1);
const B=t=>[2*(1-t)*t*bend+t*t*ex,-(2*(1-t)*t*len*.55+t*t*len)],D=t=>[2*(1-t)*bend+2*t*(ex-bend),-(2*(1-t)*len*.55+2*t*len*.45)];
let s=`<path d="M0 0Q${f(bend)} ${f(-len*.55)} ${f(ex)} ${f(-len)}" fill="none" stroke="${front?'#0b4f4a':'#2fd9b4'}" stroke-width="${front?2.4:1.6}" stroke-linecap="round" opacity=".85"/>`;
const n=Math.round(len/15);
for(let k=1;k<=n;k++){const t=.04+.94*k/n,[px,py]=B(t),[dx,dy]=D(t),ang=Math.atan2(dy,dx),L=len*.3*Math.pow(Math.sin(Math.PI*(.1+.8*t)),.9)*(1-t*.25)+4,w=L*.22;
for(const sd of[-1,1]){const a=(ang+sd*(1.25-.55*t)+rnd(-.08,.08))*180/Math.PI,fill=front?'url(#fernD)':(Math.random()<.08?'url(#fernP)':'url(#fernG)');
s+=`<path transform="translate(${f(px)} ${f(py)}) rotate(${f(a)})" d="M0 0Q${f(L*.5)} ${f(-w)} ${f(L)} 0Q${f(L*.5)} ${f(w)} 0 0Z" fill="${fill}" stroke="rgba(200,255,235,.28)" stroke-width=".5"/>`}}
return s};
const fronds=c=>{const{w,h,n,sp,L,hang,mir,front}=c,tf=(hang?`translate(${w} ${h}) rotate(180) `:'')+(mir?`translate(${w} 0) scale(-1 1)`:'');let s=`<g transform="${tf}">`;
for(let i=0;i<n;i++){const a=n>1?(i/(n-1)-.5)*2*sp+rnd(-5,5):0;s+=`<g transform="translate(${(w/2+rnd(-w*.07,w*.07)).toFixed(0)} ${h}) rotate(${a.toFixed(1)})">${frond(rnd(...L),front)}</g>`}return s+'</g>'};
const fern=(c,cls)=>`<div class="fw ${c.hang?'hg':''} ${cls}" style="${c.pos};width:${c.width}px" data-hang="${c.hang?1:0}"><svg viewBox="0 0 ${c.w} ${c.h}" style="animation-delay:-${rnd(0,6).toFixed(1)}s">${fronds(c)}</svg></div>`;
const sprig=(c,cls)=>`<svg class="sprig ${cls}" viewBox="0 0 ${c.w} ${c.h}">${fronds(c)}</svg>`;
const BK=[{w:520,h:560,n:6,sp:56,L:[200,300],pos:'left:-80px;bottom:-30px',width:520},{w:520,h:560,n:6,sp:56,L:[200,300],mir:1,pos:'right:-80px;bottom:-30px',width:520},
{w:420,h:460,n:4,sp:44,L:[150,220],hang:1,pos:'left:-50px;top:-70px',width:400},{w:420,h:460,n:4,sp:44,L:[150,220],hang:1,mir:1,pos:'right:-50px;top:-70px',width:400}];
const FG=[{w:600,h:600,n:4,sp:42,L:[280,380],front:1,pos:'left:-190px;bottom:-140px',width:600},{w:600,h:600,n:4,sp:42,L:[280,380],front:1,mir:1,pos:'right:-190px;bottom:-140px',width:600}];
$('#ferns').innerHTML=BK.map(c=>fern(c,'bgc')).join('');$('#fgf').innerHTML=FG.map(c=>fern(c,'fgc')).join('');
const FN=[...sec.querySelectorAll('.fw')];
FN.forEach(f=>{gsap.set(f,{transformOrigin:f.dataset.hang=='1'?'50% 0%':'50% 100%'});gsap.fromTo(f,{scale:.6,opacity:0},{scale:1,opacity:1,ease:'power2.out',scrollTrigger:{trigger:sec,start:'top 85%',end:'top 35%',scrub:1}})});
const qr=FN.map(f=>gsap.quickTo(f,'rotation',{duration:1.4,ease:'power3.out'})),qp=FN.map(f=>gsap.quickTo(f,'x',{duration:1.4,ease:'power3.out'}));
sec.addEventListener('mousemove',e=>{const nx=e.clientX/innerWidth-.5;FN.forEach((f,i)=>{const fg=f.classList.contains('fgc');qr[i](nx*(fg?6:3)*(f.dataset.hang=='1'?-1:1));qp[i](-nx*(fg?50:22))})});
form.insertAdjacentHTML('beforeend',sprig({w:260,h:300,n:3,sp:30,L:[110,170]},'tl')+sprig({w:260,h:300,n:3,sp:30,L:[110,170],mir:1},'br'));
/* formulario sencillo e intuitivo */
const fn=$('#fn'),fm=$('#fm'),go=form.querySelector('.go'),help=$('#help');
const state=()=>{const a=fn.value.trim(),b=fm.value.trim(),ok=!!a&&b.length>=5;go.classList.toggle('awake',ok);go.classList.toggle('sleep',!ok);
help.textContent=!a?'// escribe tu nombre':b.length<5?'// ahora cuéntame tu idea o propuesta':'✓ listo para enviar';return ok};
form.addEventListener('input',state);state();
const nudge=el=>{el.focus({preventScroll:true});gsap.fromTo(el.closest('.fld'),{x:-8},{x:0,duration:.5,ease:'elastic.out(1,.3)'});toast(el==fn?'Falta tu nombre':'Falta tu mensaje')};
window.validate=()=>{if(!fn.value.trim()){nudge(fn);return false}if(fm.value.trim().length<5){nudge(fm);return false}return true};
form.addEventListener('submit',e=>{if(!window.validate()){e.preventDefault();e.stopImmediatePropagation()}},true);
fn.addEventListener('keydown',e=>{if(e.key=='Enter'){e.preventDefault();fm.focus()}});
const _s=window.sendFairy;window.sendFairy=cb=>_s(()=>{cb&&cb();form.classList.add('sent')});
$('#again').onclick=()=>{form.classList.remove('sent');fn.value=fm.value='';state();fn.focus({preventScroll:true})};
gsap.set(form,{transformPerspective:900});const qrx=gsap.quickTo(form,'rotationX',{duration:.8}),qry=gsap.quickTo(form,'rotationY',{duration:.8});
form.addEventListener('mousemove',e=>{const r=form.getBoundingClientRect();qry(((e.clientX-r.left)/r.width-.5)*5);qrx(-((e.clientY-r.top)/r.height-.5)*5)});form.addEventListener('mouseleave',()=>{qrx(0);qry(0)});
ScrollTrigger.create({trigger:sec,start:'top bottom',end:'bottom top',onToggle:s=>window.skip3d=s.isActive});
})();
/* ===== musica ambiental generada por codigo (sin archivos): apagada por defecto ===== */
;(function(){
const btn=document.getElementById('snd');if(!btn)return;
const AC=window.AudioContext||window.webkitAudioContext;if(!AC){btn.style.display='none';return}
let ctx,master,filt,dly,verb,nb,nk=0,step=0,timer=null,on=false;const vis=new Set();
const BPM=104,ST=60/BPM/2;
const PAD=[[50,57,62,66],[45,57,61,64],[47,54,59,62],[43,55,59,62]];
const ARP=[[62,66,69,74],[61,64,69,73],[62,66,71,74],[62,67,71,74]];
const BAS=[38,45,47,43],PAT=[0,1,2,3,2,1,2,3];
const fq=m=>440*Math.pow(2,(m-69)/12);
function build(){
ctx=new AC();const comp=ctx.createDynamicsCompressor();comp.threshold.value=-16;comp.ratio.value=4;
master=ctx.createGain();master.gain.value=0;filt=ctx.createBiquadFilter();filt.type='lowpass';filt.frequency.value=3800;filt.Q.value=.6;
filt.connect(master);master.connect(comp);comp.connect(ctx.destination);
dly=ctx.createDelay(1);dly.delayTime.value=ST*1.5;const fb=ctx.createGain();fb.gain.value=.36;
const wt=ctx.createGain();wt.gain.value=.34;dly.connect(fb);fb.connect(dly);dly.connect(wt);wt.connect(filt);
const len=Math.floor(ctx.sampleRate*2.6),ir=ctx.createBuffer(2,len,ctx.sampleRate);
for(let c=0;c<2;c++){const d=ir.getChannelData(c);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,2.6)}
verb=ctx.createConvolver();verb.buffer=ir;const vg=ctx.createGain();vg.gain.value=.35;verb.connect(vg);vg.connect(filt);
nb=ctx.createBuffer(1,Math.floor(ctx.sampleRate*.1),ctx.sampleRate);const nd=nb.getChannelData(0);for(let i=0;i<nd.length;i++)nd[i]=Math.random()*2-1}
function tone(type,fr,t,dur,vol,att,rel,sd,sv){const o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.value=fr;
g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(vol,t+att);g.gain.setTargetAtTime(0,t+dur,rel);o.connect(g);g.connect(filt);
if(sd){const s=ctx.createGain();s.gain.value=sd;g.connect(s);s.connect(dly)}
if(sv){const s=ctx.createGain();s.gain.value=sv;g.connect(s);s.connect(verb)}
o.start(t);o.stop(t+dur+rel*6)}
function kick(t){const o=ctx.createOscillator(),g=ctx.createGain();o.frequency.setValueAtTime(130,t);o.frequency.exponentialRampToValueAtTime(42,t+.14);
g.gain.setValueAtTime(.42,t);g.gain.exponentialRampToValueAtTime(.001,t+.24);o.connect(g);g.connect(filt);o.start(t);o.stop(t+.26)}
function hat(t){const s=ctx.createBufferSource(),h=ctx.createBiquadFilter(),g=ctx.createGain();s.buffer=nb;h.type='highpass';h.frequency.value=7000;
g.gain.setValueAtTime(.05,t);g.gain.exponentialRampToValueAtTime(.001,t+.06);s.connect(h);h.connect(g);g.connect(filt);s.start(t);s.stop(t+.1)}
function sched(){while(nk<ctx.currentTime+.18){const s=step%64,ci=s>>4,k=s&15,t=nk;
if(k==0)PAD[ci].forEach(m=>{tone('sawtooth',fq(m)*1.004,t,16*ST-.3,.012,1.2,.6,0,.5);tone('sawtooth',fq(m)*.996,t,16*ST-.3,.012,1.2,.6,0,.5)});
tone('triangle',fq(ARP[ci][PAT[k%8]]),t,.1,k%4==0?.1:.065,.005,.12,.45,.25);
if(s%8==0)tone('sine',fq(BAS[ci]),t,ST*3,.22,.02,.15);
if(step>=16){if(k%2==0)kick(t);else hat(t)}
step++;nk+=ST}}
const level=()=>vis.size?.62:.5;
function ui(){btn.classList.toggle('on',on);btn.setAttribute('aria-pressed',on);btn.setAttribute('aria-label',on?'Silenciar música':'Activar música');btn.querySelector('.t').textContent=on?'música · on':'música · off'}
function start(){if(!ctx)build();ctx.resume();nk=ctx.currentTime+.08;step=0;master.gain.cancelScheduledValues(ctx.currentTime);master.gain.setTargetAtTime(level(),ctx.currentTime,.8);
filt.frequency.value=vis.size?9000:3800;timer=setInterval(sched,40);on=true;ui()}
function stop(){master.gain.setTargetAtTime(0,ctx.currentTime,.35);clearInterval(timer);timer=null;on=false;ui();setTimeout(()=>{if(!on&&ctx)ctx.suspend()},1500)}
btn.onclick=()=>on?stop():start();
document.addEventListener('visibilitychange',()=>{if(!ctx||!on)return;document.hidden?ctx.suspend():ctx.resume()});
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>{es.forEach(e=>e.isIntersecting?vis.add(e.target):vis.delete(e.target));
if(on&&ctx){filt.frequency.setTargetAtTime(vis.size?9000:3800,ctx.currentTime,1.2);master.gain.setTargetAtTime(level(),ctx.currentTime,1.2)}},{threshold:.25});
['#contact','#thanks'].forEach(q=>{const el=document.querySelector(q);el&&io.observe(el)})}
})();