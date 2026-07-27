/* eslint-disable */
// Home (V1) runtime — ported verbatim from the approved v1-home-comp.
// Drives: reveal observer, hero word-stagger, marquee, count scanners, proof
// ledger scramble, BRSR infographic ring, particle canvas, method SVG engine,
// portfolio toggle, persona tabs, configurator. Nav-scroll is owned by the
// global <Nav>, so it is intentionally absent here.
export function initHome() {
  if (typeof window === "undefined") return;
  if (window.__trvHomeRan) return;      // StrictMode / re-mount guard
  window.__trvHomeRan = true;

  var reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  
  

  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.14});
  document.querySelectorAll(".reveal").forEach(function(el){reduce?el.classList.add("in"):io.observe(el)});

  document.querySelectorAll(".hl-line").forEach(function(line,li){
    var words=line.textContent.split(" ");line.innerHTML="";
    words.forEach(function(w,i){var s=document.createElement("span");s.className="word";s.textContent=w;line.appendChild(s);if(i<words.length-1)line.appendChild(document.createTextNode(" "));
      if(!reduce)setTimeout(function(){s.classList.add("in")},250+(li*300)+(i*90));else s.classList.add("in");});
  });

  var tokens=[["#why","INDIA-BASED ENVIRONMENTAL & SOCIAL RISK PRACTICE"],["#proof","25+ YEARS OF ESG EXPERTISE · BACKED BY TERAVUE"],["#why","IFC PERFORMANCE STANDARDS · EQUATOR PRINCIPLES · ESDD"],["#method","THE METHOD IS SHOWN · NOT ASSERTED"],["#real-economy","SCOPE 3 · ALL FIFTEEN CATEGORIES · THE FULL VALUE CHAIN"],["#infographic","STANDARDS · IFC PS · EQUATOR · GHG PROTOCOL · IFRS S1/S2 · BRSR-CORE"],["#cta","EVIDENCE BEHIND EVERY NUMBER → REQUEST A PROPOSAL"]];
  var mq=document.getElementById("mq");
  function seg(){var f=document.createDocumentFragment();tokens.forEach(function(t){var a=document.createElement("a");a.href=t[0];a.textContent=t[1];f.appendChild(a);var s=document.createElement("span");s.className="sep";s.textContent="◆";f.appendChild(s)});return f}
  mq.appendChild(seg());mq.appendChild(seg());

  function scan(el){var to=+el.dataset.to,st=null,d=900;
    function tick(t){if(!st)st=t;var p=Math.min((t-st)/d,1),e=1-Math.pow(1-p,3);
      el.textContent=Math.round(to*e);
      if(p<1)requestAnimationFrame(tick);else el.textContent=to}
    requestAnimationFrame(tick)}
  var cio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){reduce?e.target.textContent=e.target.dataset.to:scan(e.target);cio.unobserve(e.target)}})},{threshold:.6});
  document.querySelectorAll("[data-to]").forEach(function(el){cio.observe(el)});

  /* proof — glass ledger: sequential reveal + status scramble + hover-bridge + view toggle */
  (function(){
    var lg=document.getElementById("ledger");if(!lg)return;
    var rows=lg.querySelectorAll('.lg-view[data-view="sample"] .lrow');
    var pts=document.querySelectorAll(".proof-pts .ppt");
    function scramble(el){var fin=el.dataset.final||el.textContent,ch="ABCDEFGHKMNPRSTUXYZ0123456789#*%",st=null,d=560;el.dataset.final=fin;
      function tk(t){if(!st)st=t;var p=Math.min((t-st)/d,1),n=fin.length,sh=Math.floor(p*n),s="",i;
        for(i=0;i<n;i++)s+=(i<sh?fin[i]:(fin[i]===" "?" ":ch[Math.floor(Math.random()*ch.length)]));
        el.textContent=s;if(p<1)requestAnimationFrame(tk);else el.textContent=fin}
      requestAnimationFrame(tk)}
    function link(k,on){var r=lg.querySelector('.lrow[data-row="'+k+'"]');if(r)r.classList.toggle("hl",on);if(pts[+k])pts[+k].classList.toggle("hl",on)}
    pts.forEach(function(p,k){p.addEventListener("mouseenter",function(){link(k,true)});p.addEventListener("mouseleave",function(){link(k,false)})});
    rows.forEach(function(r){var k=r.dataset.row;r.addEventListener("mouseenter",function(){link(k,true)});r.addEventListener("mouseleave",function(){link(k,false)})});
    lg.querySelectorAll(".lg-toggle button").forEach(function(b){b.addEventListener("click",function(){
      lg.querySelectorAll(".lg-toggle button").forEach(function(x){x.classList.remove("on")});b.classList.add("on");
      lg.querySelectorAll(".lg-view").forEach(function(v){v.hidden=(v.dataset.view!==b.dataset.v)})})});
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){
      rows.forEach(function(r,k){var v=r.querySelector(".v");
        if(reduce){r.classList.add("ok")}
        else setTimeout(function(){r.classList.add("ok");if(v)scramble(v)},260+k*300)});
      io.unobserve(e.target)}})},{threshold:.4});
    io.observe(lg);
  })();

  /* infographic — BRSR-Core ring: immutable PNG slideshow (bg) + transparent hotspot overlay (fg) */
  (function(){
    var A=[
      ["GHG emissions","Scope 1 and Scope 2 greenhouse-gas footprint — and Scope 3 where material — with intensity per rupee of turnover.",["SCOPE 1","SCOPE 2","INTENSITY"],"ENVIRONMENTAL",0],
      ["Water footprint","Withdrawal, consumption and discharge, with intensity and any zero-liquid-discharge coverage.",["WITHDRAWAL","DISCHARGE"],"ENVIRONMENTAL",0],
      ["Energy footprint","Total energy consumed and its intensity, plus the share drawn from renewable sources.",["TOTAL","RENEWABLE"],"ENVIRONMENTAL",0],
      ["Embracing circularity","Waste generated, the share recovered or recycled, and what is safely disposed.",["WASTE","RECOVERED"],"ENVIRONMENTAL",0],
      ["Employee wellbeing","Coverage of safety, health and wellbeing measures across the workforce.",["SAFETY","HEALTH"],"SOCIAL",1],
      ["Gender diversity","Representation across the workforce and equal remuneration for equal work.",["REPRESENTATION","EQUAL PAY"],"SOCIAL",1],
      ["Inclusive development","Jobs and sourcing directed to smaller and more marginalised producers and regions.",["SOURCING","MSME"],"SOCIAL",1],
      ["Fairness to customers & suppliers","Consumer complaints, data and cyber safety, and timely payments to suppliers.",["COMPLAINTS","PAYMENTS"],"SOCIAL",1],
      ["Openness of business","Concentration of purchases and sales, related-party dealings, loans and advances.",["CONCENTRATION","RELATED-PARTY"],"GOVERNANCE",2]
    ];
    var FRAMES=["/v/home/ac701337b.webp","/v/home/acb153623.webp","/v/home/acf6636f8.webp","/v/home/a48b88afe.webp","/v/home/aaf4ed172.webp","/v/home/a5acca33c.webp","/v/home/adf71bef7.webp","/v/home/a3b5a3718.webp","/v/home/ac2585710.webp"];
    var frames=document.getElementById("igframes"),hot=document.getElementById("ighot"),hotg=hot.querySelector("g"),
        rail=document.querySelectorAll(".ig-rail li"),esg=document.querySelectorAll("#igesg .e"),
        idx=document.getElementById("igidx"),tt=document.getElementById("ightitle"),
        dd=document.getElementById("igdesc"),tg=document.getElementById("igtags");
    var imgs=FRAMES.map(function(src){var m=document.createElement("img");m.src=src;m.alt="";frames.appendChild(m);return m});
    /* transparent hotspot wedges — geometry matches the cropped 1000x1000 ring frame */
    var CX=500,CY=500,R0=160,R1=486,SEG=40;
    function pol(r,deg){var a=(deg-90)*Math.PI/180;return (CX+r*Math.cos(a)).toFixed(1)+" "+(CY+r*Math.sin(a)).toFixed(1)}
    function sector(a0,a1){var laf=(a1-a0)>180?1:0;
      return "M"+pol(R1,a0)+" A"+R1+" "+R1+" 0 "+laf+" 1 "+pol(R1,a1)+" L"+pol(R0,a1)+" A"+R0+" "+R0+" 0 "+laf+" 0 "+pol(R0,a0)+" Z"}
    var ci=0,paused=false;
    A.forEach(function(a,i){
      var p=document.createElementNS("http://www.w3.org/2000/svg","path");
      p.setAttribute("d",sector(i*SEG-SEG/2,i*SEG+SEG/2));
      p.addEventListener("mouseenter",function(){ci=i;paused=true;sel(i)});
      hotg.appendChild(p);
    });
    function sel(i){
      imgs.forEach(function(m,k){m.classList.toggle("on",k===i)});
      rail.forEach(function(r,k){r.classList.toggle("on",k===i)});
      var grp=A[i][4];esg.forEach(function(e,k){e.classList.toggle("on",k===grp)});
      document.getElementById("infographic").style.setProperty("--seg",["#3E9E7A","#4FBCC2","#E4BE68"][grp]);  /* E green · S teal · G gold */
      idx.textContent="ATTRIBUTE "+String(i+1).padStart(2,"0")+" / 09 · "+A[i][3];
      tt.textContent=A[i][0];dd.textContent=A[i][1];
      tg.innerHTML="";A[i][2].forEach(function(x){var s=document.createElement("span");s.textContent=x;tg.appendChild(s)});
    }
    sel(0);
    hot.addEventListener("mouseleave",function(){paused=false});   /* resume from the last-hovered segment */
    if(!reduce){setInterval(function(){if(paused)return;ci=(ci+1)%9;sel(ci)},2600)}
  })();

  /* particles */
  var cv=document.getElementById("stars");
  if(cv){var ctx=cv.getContext("2d"),W,H,ps=[],mouse={x:-999,y:-999},DPR=devicePixelRatio||1;
    function sz(){W=cv.width=innerWidth*DPR;H=cv.height=cv.offsetHeight*DPR}
    var N=reduce?36:52;for(var i=0;i<N;i++){var x=Math.random()*innerWidth*DPR,y=Math.random()*760*DPR;ps.push({x:x,y:y,hx:x,hy:y,vx:0,vy:0,r:(Math.random()*1.5+.5)*DPR,g:Math.random()<.5})}
    sz();
    cv.addEventListener("pointermove",function(e){var r=cv.getBoundingClientRect();mouse.x=(e.clientX-r.left)*DPR;mouse.y=(e.clientY-r.top)*DPR});
    cv.addEventListener("pointerleave",function(){mouse.x=mouse.y=-999});
    /* NARRATIVE: scattered data points. The cursor is the METHOD — where it passes, nearby points
       gather onto a ring and their links resolve to gold: scattered data → structured, verifiable
       disclosure. It never collapses to a dot (ring radius holds the formation open), and when the
       method leaves, points relax home to scatter again. */
    var LINK=120*DPR,PULL=175*DPR,RING=58*DPR;
    function draw(){ctx.clearRect(0,0,W,H);
      var active=mouse.x>-500;
      for(var p of ps){p.near=false;
        if(active){var dx=mouse.x-p.x,dy=mouse.y-p.y,dm=Math.hypot(dx,dy);
          if(dm<PULL&&dm>0.1){p.near=true;var tx=mouse.x-dx/dm*RING,ty=mouse.y-dy/dm*RING,s=(1-dm/PULL)*0.02;
            p.vx+=(tx-p.x)*s;p.vy+=(ty-p.y)*s}}
        p.vx+=(p.hx-p.x)*0.006;p.vy+=(p.hy-p.y)*0.006;p.vx*=0.9;p.vy*=0.9;p.x+=p.vx;p.y+=p.vy;
        ctx.beginPath();ctx.arc(p.x,p.y,p.near?p.r*1.35:p.r,0,6.283);
        ctx.fillStyle=p.near?"rgba(228,190,104,.92)":(p.g?"rgba(228,190,104,.7)":"rgba(79,188,194,.7)");ctx.fill()}
      for(var a=0;a<ps.length;a++)for(var b=a+1;b<ps.length;b++){var q=ps[a],w=ps[b],d=Math.hypot(q.x-w.x,q.y-w.y);
        if(d<LINK){var bond=q.near&&w.near;
          ctx.beginPath();ctx.moveTo(q.x,q.y);ctx.lineTo(w.x,w.y);
          ctx.strokeStyle=bond?"rgba(228,190,104,"+(.5*(1-d/LINK))+")":"rgba(79,188,194,"+(.12*(1-d/LINK))+")";
          ctx.lineWidth=(bond?1.3:1)*DPR;ctx.stroke()}}
      if(!reduce)requestAnimationFrame(draw)}
    if(reduce){for(var q of ps){ctx.beginPath();ctx.arc(q.x,q.y,q.r,0,6.283);ctx.fillStyle="rgba(228,190,104,.6)";ctx.fill()}}else draw();
    addEventListener("resize",sz)}

  /* method engine */
  var path=document.getElementById("mpath"),node=document.getElementById("mnode"),pulse=document.getElementById("mpulse"),ro=document.getElementById("ro"),steps=[].slice.call(document.querySelectorAll(".step")),msteps=[].slice.call(document.querySelectorAll(".mstep"));
  var meta=[[46,268,"01 ASSESS"],[150,196,"02 COMPLY"],[250,120,"03 IMPROVE"],[350,52,"04 PROVE"]],segAt=[0,0,0,0],L=0;
  if(path){L=path.getTotalLength();path.style.strokeDasharray=L;path.style.strokeDashoffset=reduce?0:L;
    function lenAtXY(tx,ty){var best=0,bd=1e9;for(var s=0;s<=L;s+=2){var pt=path.getPointAtLength(s);var d=Math.hypot(pt.x-tx,pt.y-ty);if(d<bd){bd=d;best=s}}return best}
    meta.forEach(function(m,i){segAt[i]=lenAtXY(m[0],m[1])});
    var drawn=false;new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting&&!drawn){drawn=true;if(!reduce){path.style.transition="stroke-dashoffset 2.6s cubic-bezier(.16,1,.3,1)";path.style.strokeDashoffset=0}}})},{threshold:.4}).observe(path);
  }
  function pad(n){return String(Math.round(n)).padStart(3,"0")}
  function setStep(i){steps.forEach(function(s,k){s.classList.toggle("on",k==i)});
    msteps.forEach(function(s,k){s.classList.toggle("on",k==i)});
    if(node){node.setAttribute("cx",meta[i][0]);node.setAttribute("cy",meta[i][1])}
    if(ro)ro.textContent="STEP "+meta[i][2];
    if(pulse&&path&&!reduce){var target=segAt[i],start=pulse._at||0,t0=null,dur=650;pulse.setAttribute("opacity","1");
      (function anim(t){if(!t0)t0=t;var p=Math.min((t-t0)/dur,1);var cur=start+(target-start)*p;var pt=path.getPointAtLength(cur);pulse.setAttribute("cx",pt.x);pulse.setAttribute("cy",pt.y);pulse._at=cur;if(p<1)requestAnimationFrame(anim);})(0)}
  }
  steps.forEach(function(s){s.addEventListener("mouseenter",function(){setStep(+s.dataset.i)});s.addEventListener("click",function(){setStep(+s.dataset.i)})});
  if(!reduce){var ai=0;setInterval(function(){if(document.querySelector("#method .step:hover"))return;ai=(ai+1)%4;setStep(ai)},2800)}

  /* portfolio toggle */
  document.querySelectorAll(".pf-toggle button").forEach(function(b){b.addEventListener("click",function(){
    document.querySelectorAll(".pf-toggle button").forEach(function(x){x.classList.remove("on")});b.classList.add("on");
    document.querySelectorAll(".pf-view").forEach(function(v){v.hidden=(v.dataset.view!==b.dataset.v)})})});

  /* start-here personas */
  var ICON={
    columns:'<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 104h96M18 104V44m18 60V44m18 60V44m18 60V44m18 60V44M8 44l52-28 52 28"/></svg>',
    chain:'<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="14" y="50" width="40" height="20" rx="10"/><rect x="66" y="50" width="40" height="20" rx="10"/><path d="M46 60h28"/></svg>',
    shield:'<svg viewBox="0 0 120 120" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M60 12l40 15v25c0 28-18 45-40 54C38 97 20 80 20 52V27z"/><path d="M42 60l12 12 22-28"/></svg>'
  };
  var PER=[
    ["FOR LENDERS & DEAL TEAMS","The diligence has to survive the deal clock.","IFC Performance Standards and Equator conditions land on the deal, not after it. Desktop ESDD where speed governs, escalating to Site-Based ESDD where the risk demands eyes on the asset — findings reported for decisions, not for shelf documentation.","ENVIRONMENTAL & SOCIAL DUE DILIGENCE",ICON.columns,0,0],
    ["A CUSTOMER OR LENDER ASKED FOR DATA","You're being pulled into the cascade.","Turn the request into a clean, credible data set you can hand over — the evidence behind each number, not a questionnaire answered once.","BUILD THE EVIDENCE BASE",ICON.chain,-70,-30],
    ["RISK, QUANTIFIED","The exposure, framed against the method — not guesswork.","We frame the penalty and audit-committee risk against a concrete method, so the board conversation is about a defensible plan, not a vague worry.","SEE HOW WE PROVE IT",ICON.shield,60,-60]
  ];
  var tabs=[].slice.call(document.querySelectorAll(".ptab")),ck=document.getElementById("ck"),ch=document.getElementById("ch"),cp=document.getElementById("cp"),cgo=document.getElementById("cgo"),cam=document.getElementById("cam");
  var bgis=[document.getElementById("bgi0"),document.getElementById("bgi1"),document.getElementById("bgi2")];
  bgis.forEach(function(el,i){el.innerHTML=PER[i][4]});
  function setPersona(i){var d=PER[i];ck.textContent=d[0];ch.textContent=d[1];cp.textContent=d[2];cgo.innerHTML=d[3]+' <span class="arw">→</span>';
    if(cam&&!reduce)cam.style.transform="translate("+d[5]+"px,"+d[6]+"px)";
    bgis.forEach(function(el,k){el.classList.toggle("show",k===i);if(!reduce)el.style.transform=k===i?"translate("+(d[5]*.6)+"px,"+(d[6]*.6)+"px)":"translate("+(d[5]*.6)+"px,"+(d[6]*.6+30)+"px) scale(.92)"})}
  tabs.forEach(function(t){t.addEventListener("click",function(){tabs.forEach(function(x){x.classList.remove("on")});t.classList.add("on");setPersona(+t.dataset.p)})});
  bgis[0].classList.add("show");

  /* configurator + dossier */
  var cfg={band:null,fy:null},cur=0,barEl=document.getElementById("cfgbar"),inEl=document.getElementById("cfgin");
  var dband=document.getElementById("dband"),dfy=document.getElementById("dfy"),dstd=document.getElementById("dstd"),drect=document.getElementById("drect");
  function drawBorder(){if(!drect||reduce)return;try{var w=drect.ownerSVGElement.clientWidth,h=drect.ownerSVGElement.clientHeight;drect.setAttribute("width",w-2);drect.setAttribute("height",h-2);var per=2*((w-2)+(h-2));drect.style.strokeDasharray=per;drect.style.strokeDashoffset=per;drect.getBoundingClientRect();drect.style.transition="stroke-dashoffset 1.1s cubic-bezier(.16,1,.3,1)";drect.style.strokeDashoffset=0}catch(e){}}
  function showStep(n){cur=n;inEl.style.transform="translateX(-"+(n*25)+"%)";if(barEl)barEl.style.width=Math.min((n+1)/3*100,100)+"%"}
  document.querySelectorAll(".opts").forEach(function(g){g.addEventListener("click",function(e){var o=e.target.closest(".opt");if(!o)return;
    [].slice.call(g.children).forEach(function(x){x.classList.remove("sel")});o.classList.add("sel");cfg[g.dataset.group]=o.dataset.v;
    if(g.dataset.group==="band"){dband.textContent=o.dataset.v;dband.classList.remove("dim");if(o.dataset.fy){dfy.textContent=o.dataset.fy;dfy.classList.remove("dim")}if(dstd&&o.dataset.std){dstd.textContent=o.dataset.std;dstd.classList.remove("dim")}drawBorder()}
    else{dfy.textContent=o.dataset.v;dfy.classList.remove("dim");drawBorder()}
    setTimeout(function(){showStep(g.dataset.group==="band"?1:2)},reduce?0:240)})});
  document.querySelectorAll("[data-back]").forEach(function(b){b.addEventListener("click",function(){showStep(Math.max(cur-1,0))})});
  // Hand off to the full /start request form, carrying the scoped answers so they
  // prefill there (band always maps; timing maps where /start has a matching bucket).
  var BAND2START={"Lender / DFI":"lender","Investor / deal team":"investor","Sponsor / borrower":"sponsor","Top 500 listed":"t500","Top 1,000 listed":"t1000","Value chain / supplier":"supplier"};
  var FY2START={"Live now":"thisfy","This financial year":"thisfy","Exploring":"explore"};
  var submit=document.getElementById("cfgsubmit");if(submit)submit.addEventListener("click",function(e){e.preventDefault();
    var q=[];if(cfg.band&&BAND2START[cfg.band])q.push("band="+BAND2START[cfg.band]);if(cfg.fy&&FY2START[cfg.fy])q.push("timeline="+FY2START[cfg.fy]);
    window.location.href="/start"+(q.length?"?"+q.join("&"):"")+"#start"});

}
