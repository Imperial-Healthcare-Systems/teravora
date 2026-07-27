/* eslint-disable */
export function init_start() {
  if (typeof window === 'undefined') return;
  if (window.__trv_start_ran) return; window.__trv_start_ran = true;
var reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
  // hero headline — staggered word rise-in (per home.runtime.js)
  document.querySelectorAll(".pg-start .shero .hl-line").forEach(function(line,li){
    var words=line.textContent.split(" ");line.innerHTML="";
    words.forEach(function(w,i){var s=document.createElement("span");s.className="word";s.textContent=w;line.appendChild(s);
      if(i<words.length-1)line.appendChild(document.createTextNode(" "));
      if(!reduce)setTimeout(function(){s.classList.add("in")},90+(li*300)+(i*62));else s.classList.add("in");});
  });
  // nav scroll (transparent over hero -> solid on scroll)
  
  
  
  // reveal
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.14});
  document.querySelectorAll(".reveal").forEach(function(el){io.observe(el)});
  // count-up
  function count(el){var to=+el.dataset.to,t0=null;function tick(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/900,1);el.textContent=Math.round(to*(p<1?1-Math.pow(1-p,3):1));if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick)}
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
    var LBL={trigger:{brsr:"BRSR assessment or assurance",customer:"Lender / DFI asked",deal:"Deal due diligence",training:"Team training",emissions:"Measure / cut emissions",unsure:"Not sure yet"},
             band:{lender:"Lender / DFI",investor:"Investor / PE deal team",sponsor:"Sponsor / borrower",training:"Training buyer",t500:"Listed · top 500",t1000:"Listed · top 1,000",other:"Listed · other",supplier:"Supplier / MSME",na:"Not sure"},
             timeline:{thisfy:"This FY","6mo":"Next 6 months",explore:"Exploring"}};
    // A live deal carries a real clock, so deal/lender-driven requests lead the
    // queue alongside a filing deadline — they are the core practice, not an
    // education case. Only a genuinely undirected request lands in Education.
    function lane(){var t=state.trigger,b=state.band;
      if(t==="deal"||t==="customer"||b==="lender"||b==="investor"||b==="sponsor")return["Deal lane","A live deal has its own clock — we'll scope to your transaction timeline before anything else."];
      if(t==="brsr"||b==="t500"||b==="t1000")return["Fast lane","Because your timeline is real, we'll lead with what has to be ready for assessment or assurance first."];
      if(t==="training"||b==="training")return["Training lane","We'll scope the cohort and the level to your teams before anything else."];
      if(t==="emissions")return["Scoping","We'll start with the inventory boundary — including where Scope 3 actually sits."];
      if(t==="unsure"||b==="na")return["Education lane","Nothing is forcing your hand yet — we'll start by helping you work out what actually applies."];
      return["Scoping","We'll lead with what your situation requires first."]}
    var CHARS="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·/";
    function scramble(el,fin){if(reduce){el.textContent=fin;return}var t0=null;function tk(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/520,1),n=Math.floor(fin.length*p),s="";for(var i=0;i<fin.length;i++)s+=i<n?fin[i]:CHARS[Math.floor(Math.random()*CHARS.length)];el.textContent=s;if(p<1)requestAnimationFrame(tk);else el.textContent=fin}requestAnimationFrame(tk)}
    function typeOut(el,txt){if(reduce){el.textContent=txt;return}el.textContent="";var i=0;(function tk(){el.textContent=txt.slice(0,i++);if(i<=txt.length)setTimeout(tk,14)})()}
    function setSV(id,val){var el=document.getElementById(id);if(!el)return;var want=val||"—";if(el.dataset.cur===want)return;el.dataset.cur=want;el.classList.toggle("set",!!val);if(val){el.classList.add("flash");setTimeout(function(){el.classList.remove("flash")},600);scramble(el,val)}else{el.textContent="—"}}
    var STL=["AWAITING INPUT","BUILDING…","SCOPED"];
    function setStatus(s){var w=document.getElementById("specStatus"),l=document.getElementById("specStatusLbl"),sp=document.getElementById("spec");if(w)w.setAttribute("data-s",s);if(l)l.textContent=STL[s];if(sp)sp.classList.toggle("scanning",s===1)}
    function updateSpec(){
      setSV("sv-trigger",state.trigger&&LBL.trigger[state.trigger]);
      setSV("sv-band",state.band&&LBL.band[state.band]);
      setSV("sv-timeline",state.timeline&&LBL.timeline[state.timeline]);
      var has=state.trigger||state.band;
      setSV("sv-lane",has?lane()[0]:null);
      var der=document.getElementById("specDerive"),derTxt=document.getElementById("specDeriveTxt");
      if(der&&derTxt){if(has){der.hidden=false;var lt=lane()[1];if(derTxt.dataset.full!==lt){derTxt.dataset.full=lt;typeOut(derTxt,lt)}}else{der.hidden=true;derTxt.dataset.full="";derTxt.textContent=""}}
      var filled=(state.trigger?1:0)+(state.band?1:0)+(state.timeline?1:0);
      var pb=document.getElementById("specPbar");if(pb)pb.style.width=(filled/3*100)+"%";
      var scoped=state.trigger&&state.band;setStatus(scoped?2:(has?1:0));
    }
    card.querySelectorAll(".opts").forEach(function(g){var grp=g.dataset.group;
      g.querySelectorAll(".opt").forEach(function(o){o.insertAdjacentHTML("afterbegin",'<span class="rd"></span>');
        // a11y (G18): the option tiles are <div>s — make them keyboard-operable
        // (Enter/Space) with focus and selected state exposed to assistive tech.
        o.setAttribute("role","button");o.setAttribute("tabindex","0");o.setAttribute("aria-pressed","false");
        function pick(){g.querySelectorAll(".opt").forEach(function(x){x.classList.remove("sel");x.setAttribute("aria-pressed","false")});o.classList.add("sel");o.setAttribute("aria-pressed","true");state[grp]=o.dataset.val;
          if(grp==="trigger"){document.getElementById("divertNote").hidden=(o.dataset.val!=="unsure")}
          updateSpec()}
        o.addEventListener("click",pick);
        o.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "||e.key==="Spacebar"){e.preventDefault();pick()}})})});
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
    var sending=false;
    function fv(id){var el=document.getElementById(id);return el?el.value.trim():""}
    function collect(){return{trigger:state.trigger,band:state.band,company:fv("company"),sector:fv("sector"),timeline:state.timeline,note:fv("note"),name:fv("name"),email:fv("email"),phone:fv("phone"),role:fv("role"),consent:document.getElementById("consent").checked}}
    function showConfirmed(){document.getElementById("confLane").textContent=lane()[1];
      card.hidden=true;document.getElementById("confirmCard").hidden=false;
      document.getElementById("specFoot").textContent="Matched — a specialist has your context.";
      var w=document.getElementById("specStatus"),l=document.getElementById("specStatusLbl"),sp=document.getElementById("spec");
      if(w)w.setAttribute("data-s","3");if(l)l.textContent="MATCHED ✓";if(sp)sp.classList.remove("scanning");
      var pb=document.getElementById("specPbar");if(pb)pb.style.width="100%";
      var s=document.getElementById("start");if(s)window.scrollTo({top:s.offsetTop-40,behavior:"smooth"})}
    function endSend(){sending=false;nextBtn.disabled=false;nextBtn.removeAttribute("aria-disabled");nextLbl.textContent="Request a Proposal"}
    function showErr(){var e=document.getElementById("submitErr");if(e){e.innerHTML='⚠ We couldn’t send your request just now. Please try again, or email us at <a href="mailto:contact@teravora.in">contact@teravora.in</a> and we’ll pick it up.';e.hidden=false;e.focus&&e.setAttribute("tabindex","-1")}}
    function submit(){if(sending)return;sending=true;
      var e=document.getElementById("submitErr");if(e)e.hidden=true;
      nextBtn.disabled=true;nextBtn.setAttribute("aria-disabled","true");nextLbl.textContent="Sending…";
      fetch("/api/proposal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(collect())})
        .then(function(r){return r.json().catch(function(){return{ok:false}}).then(function(d){return{ok:r.ok&&d&&d.ok===true}})})
        .then(function(res){if(res.ok){showConfirmed()}else{endSend();showErr()}})
        .catch(function(){endSend();showErr()})}
    // Prefill from deep-link params (?trigger=&band=&timeline=) — carried over from
    // the home / why-now scoping configurators so the choice survives the handoff.
    try{var qp=new URLSearchParams(window.location.search);
      ["trigger","band","timeline"].forEach(function(grp){var val=qp.get(grp);if(!val)return;
        var g=card.querySelector('.opts[data-group="'+grp+'"]');if(!g)return;
        var opt=g.querySelector('.opt[data-val="'+val.replace(/"/g,"")+'"]');if(!opt)return;
        g.querySelectorAll(".opt").forEach(function(x){x.classList.remove("sel");x.setAttribute("aria-pressed","false")});
        opt.classList.add("sel");opt.setAttribute("aria-pressed","true");state[grp]=val;
        if(grp==="trigger"){var dn=document.getElementById("divertNote");if(dn)dn.hidden=(val!=="unsure")}});
    }catch(e){/* prefill is best-effort — a malformed URL never blocks the form */}
    show(1);updateSpec();
  })();
}
