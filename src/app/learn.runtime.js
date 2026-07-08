/* eslint-disable */
export function init_learn() {
  if (typeof window === 'undefined') return;
  if (window.__trv_learn_ran) return; window.__trv_learn_ran = true;
  var reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  // reveal on scroll
  var io = new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.14});
  document.querySelectorAll(".reveal").forEach(function(el){io.observe(el)});
  // faq accordion
  document.querySelectorAll(".qa button").forEach(function(b){b.addEventListener("click",function(){b.parentElement.classList.toggle("open")})});
  // hero particles — scattered data resolves near the cursor (per home/solution)
  var cv = document.getElementById("stars");
  if (cv && !reduce) {
    var ctx=cv.getContext("2d"),W,H,ps=[],mouse={x:-999,y:-999},DPR=Math.min(devicePixelRatio||1,2);
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
    draw();addEventListener("resize",sz)
  }
}
