/* eslint-disable */
export function init_how_we_prove() {
  if (typeof window === 'undefined') return;
  if (window.__trv_how_we_prove_ran) return; window.__trv_how_we_prove_ran = true;
var reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
  // nav scroll (transparent over hero -> solid on scroll)
  
  
  
  // reveal
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.14});
  document.querySelectorAll(".reveal").forEach(function(el){io.observe(el)});
  // count-up
  function count(el){var to=+el.dataset.to,t0=null;function tick(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/1100,1);el.textContent=Math.round(to*(p<1?1-Math.pow(1-p,3):1));if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick)}
  document.querySelectorAll("[data-to]").forEach(function(el){if(reduce){el.textContent=el.dataset.to;return}var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){count(el);o.unobserve(el)}})},{threshold:.6});o.observe(el)});
  // faq accordion
  document.querySelectorAll(".qa button").forEach(function(b){b.addEventListener("click",function(){b.parentElement.classList.toggle("open")})});
  // hero particles — scattered data resolves near the cursor (lenient gather, per home)
  var cv=document.getElementById("stars");
  if(cv&&!reduce){var ctx=cv.getContext("2d"),W,H,ps=[],mouse={x:-999,y:-999},DPR=Math.min(devicePixelRatio||1,2);
    function sz(){W=cv.width=innerWidth*DPR;H=cv.height=cv.offsetHeight*DPR}
    var N=44;for(var i=0;i<N;i++){var x=Math.random()*innerWidth*DPR,y=Math.random()*640*DPR;ps.push({x:x,y:y,hx:x,hy:y,vx:0,vy:0,r:(Math.random()*1.4+.5)*DPR,g:Math.random()<.5})}
    sz();
    cv.addEventListener("pointermove",function(e){var r=cv.getBoundingClientRect();mouse.x=(e.clientX-r.left)*DPR;mouse.y=(e.clientY-r.top)*DPR});
    cv.addEventListener("pointerleave",function(){mouse.x=mouse.y=-999});
    var LINK=120*DPR,PULL=175*DPR,RING=56*DPR;
    function draw(){ctx.clearRect(0,0,W,H);var active=mouse.x>-500;
      for(var p of ps){p.near=false;
        if(active){var dx=mouse.x-p.x,dy=mouse.y-p.y,dm=Math.hypot(dx,dy);
          if(dm<PULL&&dm>0.1){p.near=true;var tx=mouse.x-dx/dm*RING,ty=mouse.y-dy/dm*RING,s=(1-dm/PULL)*0.02;p.vx+=(tx-p.x)*s;p.vy+=(ty-p.y)*s}}
        p.vx+=(p.hx-p.x)*0.006;p.vy+=(p.hy-p.y)*0.006;p.vx*=0.9;p.vy*=0.9;p.x+=p.vx;p.y+=p.vy;
        ctx.beginPath();ctx.arc(p.x,p.y,p.near?p.r*1.3:p.r,0,6.283);
        ctx.fillStyle=p.near?"rgba(228,190,104,.9)":(p.g?"rgba(228,190,104,.5)":"rgba(79,188,194,.55)");ctx.fill()}
      for(var a=0;a<ps.length;a++)for(var b=a+1;b<ps.length;b++){var q=ps[a],w=ps[b],d=Math.hypot(q.x-w.x,q.y-w.y);
        if(d<LINK){var bond=q.near&&w.near;ctx.beginPath();ctx.moveTo(q.x,q.y);ctx.lineTo(w.x,w.y);
          ctx.strokeStyle=bond?"rgba(228,190,104,"+(.5*(1-d/LINK))+")":"rgba(79,188,194,"+(.1*(1-d/LINK))+")";ctx.lineWidth=(bond?1.3:1)*DPR;ctx.stroke()}}
      requestAnimationFrame(draw)}
    draw();addEventListener("resize",sz)}
  // proof readycard — sequential row reveal + status scramble (per home ledger)
  (function(){var card=document.querySelector(".readycard");if(!card)return;
    var rows=[].slice.call(card.querySelectorAll(".rc-row")),chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    function scramble(el){var fin=el.dataset.final,t0=null;function tk(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/650,1),n=Math.floor(fin.length*p),s="";for(var i=0;i<fin.length;i++)s+=i<n?fin[i]:chars[Math.floor(Math.random()*36)];el.textContent=s;if(p<1)requestAnimationFrame(tk);else el.textContent=fin}requestAnimationFrame(tk)}
    var done=false;new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting&&!done){done=true;rows.forEach(function(r,i){setTimeout(function(){r.classList.add("in");if(!reduce){var v=r.querySelector(".v");if(v&&v.dataset.final)scramble(v)}},i*280+120)})}})},{threshold:.4}).observe(card)})();
  // method engine — trace path draw + step readout (per home)
  var path=document.getElementById("mpath"),node=document.getElementById("mnode"),pulse=document.getElementById("mpulse"),ro=document.getElementById("ro"),steps=[].slice.call(document.querySelectorAll(".step"));
  var meta=[[46,268,"01 ASSESS"],[150,196,"02 COMPLY"],[250,120,"03 IMPROVE"],[350,52,"04 PROVE"]],segAt=[0,0,0,0],L=0;
  if(path){L=path.getTotalLength();path.style.strokeDasharray=L;path.style.strokeDashoffset=reduce?0:L;
    function lenAtXY(tx,ty){var best=0,bd=1e9;for(var s=0;s<=L;s+=2){var pt=path.getPointAtLength(s);var d=Math.hypot(pt.x-tx,pt.y-ty);if(d<bd){bd=d;best=s}}return best}
    meta.forEach(function(m,i){segAt[i]=lenAtXY(m[0],m[1])});
    var drawn=false;new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting&&!drawn){drawn=true;if(!reduce){path.style.transition="stroke-dashoffset 2.6s cubic-bezier(.16,1,.3,1)";path.style.strokeDashoffset=0}}})},{threshold:.4}).observe(path);
  }
  function pad(n){return String(Math.round(n)).padStart(3,"0")}
  function setStep(i){steps.forEach(function(s,k){s.classList.toggle("on",k==i)});
    if(node){node.setAttribute("cx",meta[i][0]);node.setAttribute("cy",meta[i][1])}
    if(ro)ro.textContent="X:"+pad(meta[i][0])+" Y:"+pad(meta[i][1])+" · STEP "+meta[i][2];
    if(pulse&&path&&!reduce){var target=segAt[i],start=pulse._at||0,t0=null,dur=650;pulse.setAttribute("opacity","1");
      (function anim(t){if(!t0)t0=t;var p=Math.min((t-t0)/dur,1);var cur=start+(target-start)*p;var pt=path.getPointAtLength(cur);pulse.setAttribute("cx",pt.x);pulse.setAttribute("cy",pt.y);pulse._at=cur;if(p<1)requestAnimationFrame(anim);})(0)}
  }
  steps.forEach(function(s){s.addEventListener("mouseenter",function(){setStep(+s.dataset.i)});s.addEventListener("click",function(){setStep(+s.dataset.i)})});
  if(!reduce){var ai=0;setInterval(function(){if(document.querySelector("#method .step:hover"))return;ai=(ai+1)%4;setStep(ai)},2800)}


  // T2 scrollytelling — active stage draws the climb (E1-safe: shape, not numbers)
  (function(){var cards=[].slice.call(document.querySelectorAll(".t2-card"));if(!cards.length)return;
    var line=document.getElementById("climbLine"),fill=document.getElementById("climbFill"),peak=document.getElementById("cpeak"),LL=line?line.getTotalLength():0;
    function setActive(i){cards.forEach(function(c,k){c.classList.toggle("on",k===i)});
      if(line&&!reduce)line.style.strokeDashoffset=LL*(1-(i+1)/3);
      if(fill)fill.style.opacity=i>=1?"1":"0";
      if(peak)peak.setAttribute("opacity",i>=2?"1":"0")}
    if(reduce){cards.forEach(function(c){c.classList.add("on")});if(line)line.style.strokeDashoffset=0;if(fill)fill.style.opacity="1";if(peak)peak.setAttribute("opacity","1");return}
    if(line){line.style.strokeDasharray=LL;line.style.strokeDashoffset=LL}
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)setActive(+e.target.dataset.i)})},{threshold:.6});
    cards.forEach(function(c){io.observe(c)});setActive(0)})();
}
