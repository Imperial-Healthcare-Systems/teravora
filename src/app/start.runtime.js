/* eslint-disable */
export function init_start() {
  if (typeof window === 'undefined') return;
  if (window.__trv_start_ran) return; window.__trv_start_ran = true;
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

  // START — 3-step proposal flow with live-building spec (E1-safe; no fabricated proof)
  (function(){
    var card=document.getElementById("fcard");if(!card)return;
    var state={trigger:null,band:null,timeline:null},step=1;
    var steps=[].slice.call(card.querySelectorAll(".fstep"));
    var stepInd=document.getElementById("stepInd"),fcTitle=document.getElementById("fcTitle"),fcHelp=document.getElementById("fcHelp"),pbar=document.getElementById("pbar");
    var backBtn=document.getElementById("backBtn"),nextBtn=document.getElementById("nextBtn"),nextLbl=document.getElementById("nextLbl");
    var titles=["What's prompting this?","A little context","Where do we reach you?"];
    var helps=["Two quick taps. This routes you to the right specialist.","One required field. The rest help us tailor the reply — skip anything you'd rather not share.","Last step. A specialist replies within two business days."];
    var LBL={trigger:{brsr:"BRSR / assurance deadline",customer:"Customer / lender asked",deal:"Deal due diligence",emissions:"Measure / cut emissions",unsure:"Not sure yet"},
             band:{t500:"Listed · top 500",t1000:"Listed · top 1,000",other:"Listed · other",supplier:"Supplier / MSME",investor:"Investor / lender",na:"Not sure"},
             timeline:{thisfy:"This FY","6mo":"Next 6 months",explore:"Exploring"}};
    function lane(){var t=state.trigger,b=state.band;
      if(t==="deal")return["DD lane","We'll scope to your deal timeline before anything else."];
      if(t==="unsure"||b==="supplier"||b==="na"||b==="other")return["Education lane","There's no filing deadline forcing your hand — we'll start by helping you work out what actually applies."];
      if(t==="brsr"||b==="t500"||b==="t1000")return["Fast lane","Because your deadline is real, we'll lead with what has to be assured first."];
      return["Scoping","We'll lead with what your band requires first."]}
    function setSV(id,val){var el=document.getElementById(id);el.textContent=val||"—";el.classList.toggle("set",!!val)}
    function updateSpec(){setSV("sv-trigger",state.trigger&&LBL.trigger[state.trigger]);setSV("sv-band",state.band&&LBL.band[state.band]);setSV("sv-timeline",state.timeline&&LBL.timeline[state.timeline]);
      var has=state.trigger||state.band,el=document.getElementById("sv-lane");el.textContent=has?lane()[0]:"—";el.classList.toggle("set",!!has)}
    card.querySelectorAll(".opts").forEach(function(g){var grp=g.dataset.group;
      g.querySelectorAll(".opt").forEach(function(o){o.insertAdjacentHTML("afterbegin",'<span class="rd"></span>');
        o.addEventListener("click",function(){g.querySelectorAll(".opt").forEach(function(x){x.classList.remove("sel")});o.classList.add("sel");state[grp]=o.dataset.val;
          if(grp==="trigger"){document.getElementById("divertNote").hidden=(o.dataset.val!=="unsure")}
          updateSpec()})})});
    function show(n){steps.forEach(function(s){s.hidden=(+s.dataset.step!==n)});step=n;
      stepInd.textContent="Step "+n+" of 3";fcTitle.textContent=titles[n-1];fcHelp.textContent=helps[n-1];
      pbar.style.width=(n/3*100)+"%";backBtn.hidden=(n===1);nextLbl.textContent=(n===3?"Request a Proposal":"Continue")}
    function valid(){if(step===1)return state.trigger&&state.band;
      if(step===2)return document.getElementById("company").value.trim();
      if(step===3){var e=document.getElementById("email").value.trim(),ok=/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e);
        document.getElementById("emailErr").hidden=ok;var nm=document.getElementById("name").value.trim(),cs=document.getElementById("consent").checked;return nm&&ok&&cs}
      return true}
    nextBtn.addEventListener("click",function(){if(!valid()){card.classList.add("shk");setTimeout(function(){card.classList.remove("shk")},420);return}
      if(step<3){show(step+1)}else{submit()}});
    backBtn.addEventListener("click",function(){if(step>1)show(step-1)});
    function submit(){document.getElementById("confLane").textContent=lane()[1];
      card.hidden=true;document.getElementById("confirmCard").hidden=false;
      document.getElementById("specFoot").textContent="Matched — a specialist has your context.";
      var s=document.getElementById("start");if(s)window.scrollTo({top:s.offsetTop-40,behavior:"smooth"})}
    show(1);updateSpec();
  })();
}
