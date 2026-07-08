// Ported body markup of the approved v1-home-comp (assets in /public/v/home).
// Rendered via dangerouslySetInnerHTML; the global Nav/Footer wrap it in layout.
export const HOME_BODY = String.raw`<div class="rails"><i></i></div>



<span id="top"></span>
<header class="hero">
  <div class="hero-bg"></div><div class="hero-veil"></div>
  <canvas id="stars"></canvas><div class="hero-flare"></div>
  <div class="wrap"><div class="hero-in">
    <span class="eyebrow reveal">Turn your sustainability goals into measurable results.</span>
    <h1 id="headline"><span class="hl-line">Practical ESG.</span><br><span class="l2 hl-line">Measurable Impact.</span></h1>
    <p class="hero-sub reveal">ESG reporting in India is now a deadline, not a choice. Teravora takes you from scattered data to a filed, defensible disclosure — with the method shown at every step, so it holds up when your assurer asks how you got there.</p>
    <div class="hero-cta reveal"><a class="btn btn-gold" href="#cta"><span>Request a Proposal</span><span class="arw">→</span></a><a class="btn btn-ghost" href="#start">Find your starting point</a></div>
    <div class="hero-note reveal"><b>ESG</b> Environmental, Social &amp; Governance.</div>
  </div></div>
  <div class="scrollcue" aria-hidden="true"><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l7 7 7-7"/></svg><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l7 7 7-7"/></svg></div>
  <div class="audit-ticker" aria-hidden="true"><div class="mq-track" id="mq"></div></div>
</header>

<section class="sec why" id="why">
  <div class="wrap">
    <div class="sec-label reveal"><span>SEC-02 // BUYER TRIGGER</span><span>SEBI-BRSR</span></div>
    <div class="why-grid">
      <div class="reveal">
        <h2>The rules moved. Your reporting has to move with them.</h2>
        <p>India's largest listed companies now face <b style="color:var(--paper)">reasonable assurance</b> — an independent auditor's sign-off. Most teams have the data. What they lack is a method that turns it into a disclosure an auditor will pass.</p>
        <div class="inline-cta"><a class="btn btn-gold" href="#cta"><span>Request a Proposal</span><span class="arw">→</span></a><a class="lk" href="#method">See the method ↓</a></div>
        <div class="statlist">
          <div class="statrow"><span class="n" data-to="500">0</span><span class="d">Top listed companies, first assurance band<span class="s">FY 2025–26</span></span></div>
          <div class="statrow"><span class="n" data-to="1000">0</span><span class="d">Band widens the following year<span class="s">FY 2026–27</span></span></div>
          <div class="statrow"><span class="n">＋</span><span class="d">Suppliers &amp; mid-market, via customers &amp; lenders<span class="s">VALUE-CHAIN CASCADE</span></span></div>
        </div>
      </div>
      <figure class="why-fig reveal">
        <img src="/v/home/why-cascade.webp" alt="ESG compliance cascade — listed corporation down through Tier 1–5 suppliers and the value chain">
        <figcaption class="fig-cap"><span>◇ ESG COMPLIANCE CASCADE</span><span>SEBI BRSR-CORE</span></figcaption>
      </figure>
    </div>
  </div>
</section>

<section class="sec ig" id="infographic">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="mono eyebrow">BRSR-Core at a glance</span>
      <h2>The assured subset, made legible.</h2>
      <p>BRSR-Core is the part of your disclosure that faces reasonable assurance. Grouped by Environmental, Social and Governance — hover any segment.</p>
    </div>
  </div>
  <div class="ig-stage">
    <div class="ig-inner">
      <ol class="ig-rail reveal">
        <li>01</li><li>02</li><li>03</li><li>04</li><li>05</li><li>06</li><li>07</li><li>08</li><li>09</li>
      </ol>
      <div class="ig-ring reveal">
        <div class="ig-frames" id="igframes"></div>
        <svg class="ig-hot" id="ighot" viewBox="0 0 1000 1000" aria-hidden="true"><g></g></svg>
      </div>
      <div class="ig-detail reveal">
        <div class="ig-idx" id="igidx">ATTRIBUTE 01 / 09 · ENVIRONMENTAL</div>
        <h3 id="ightitle">GHG emissions</h3>
        <p id="igdesc">Scope 1 and Scope 2 greenhouse-gas footprint — and Scope 3 where material — with intensity per rupee of turnover.</p>
        <div class="ig-tags" id="igtags"></div>
        <div class="ig-note">[ OFFICIAL SEBI-BRSR-CORE SPECIFICATION — NOT A CLIENT OUTCOME METRIC ]</div>
        <div class="ig-cap">49 KPIs · 9 ATTRIBUTES</div>
        <div class="ig-esg" id="igesg">
          <div class="e e0"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20c0-9 7-16 16-16 0 9-7 16-16 16Z"/><path d="M4 20 14 10"/></svg></div><div class="lb">ENVIRONMENTAL</div></div>
          <div class="e e1"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8.5" r="2.6"/><circle cx="16.5" cy="9.5" r="2.1"/><path d="M4 19c0-3 2.2-5 5-5s5 2 5 5"/><path d="M14.5 19c.1-2.3 1.5-3.8 3.4-3.8s2.1 1.2 2.1 2.3"/></svg></div><div class="lb">SOCIAL</div></div>
          <div class="e e2"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9 12 4l9 5"/><path d="M5.5 9.5V17M9.5 9.5V17M14.5 9.5V17M18.5 9.5V17"/><path d="M3.5 17.5h17"/></svg></div><div class="lb">GOVERNANCE</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="band" id="impact-band" aria-label="Measurable impact">
  <div class="band-img" style="background-image:url('/v/home/band-impact.webp')"></div>
  <div class="band-scrim"></div>
  <div class="wrap band-in">
    <span class="mono band-kicker reveal">◇ MEASURABLE IMPACT</span>
    <h2 class="band-h reveal">The disclosure is the deadline.<br>The impact is the point.</h2>
    <p class="band-sub reveal">Every figure we file traces back to something real — carbon cut, water saved, a risk retired. The audit trail is how you prove it happened.</p>
  </div>
</section>

<section class="sec method" id="method">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="badge-hl">◇ METHOD ENGINE · TRACE VIEW</span>
      <h2>One method, four steps — from first data to assured disclosure.</h2>
      <p>You see the working at every stage. That is the difference between a filing and a defensible disclosure.</p>
    </div>
    <div class="engine">
      <div class="pipe reveal">
        <div class="pgrid"></div>
        <div class="mticks" aria-hidden="true"><span>1.0</span><span>0.6</span><span>0.2</span><span>0</span></div>
        <svg viewBox="0 0 440 320" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <defs><linearGradient id="gtrace" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4FBCC2" stop-opacity=".34"/><stop offset="1" stop-color="#4FBCC2" stop-opacity="0"/></linearGradient></defs>
          <path id="mfill" d="M46 268 L150 268 L150 196 L250 196 L250 120 L350 120 L350 52 L394 52 L394 320 L46 320 Z" fill="url(#gtrace)"/>
          <path id="mpath" d="M46 268 L150 268 L150 196 L250 196 L250 120 L350 120 L350 52 L394 52" stroke="#4FBCC2" stroke-width="2.9"/>
          <circle id="mpulse" r="4.5" fill="#E4BE68" opacity="0"/>
        </svg>
        <div class="mnodes" aria-hidden="true">
          <span class="mstep on" data-i="0" style="left:10.45%;top:83.75%"><b>Assess</b><i></i></span>
          <span class="mstep" data-i="1" style="left:34.09%;top:61.25%"><b>Comply</b><i></i></span>
          <span class="mstep" data-i="2" style="left:56.82%;top:37.5%"><b>Improve</b><i></i></span>
          <span class="mstep" data-i="3" style="left:79.55%;top:16.25%"><b>Prove</b><i></i></span>
        </div>
        <div class="readout"><span id="ro">STEP 01 ASSESS</span></div>
      </div>
      <div class="steps reveal">
        <div class="step on" data-i="0"><div class="sh"><span class="sn">01</span><span class="st">Assess</span></div><p class="sd">We map your existing data against every requirement and find the gaps, in plain language.</p></div>
        <div class="step" data-i="1"><div class="sh"><span class="sn">02</span><span class="st">Comply</span></div><p class="sd">We prepare a BRSR filing built to pass reasonable assurance the first time.</p></div>
        <div class="step" data-i="2"><div class="sh"><span class="sn">03</span><span class="st">Improve</span></div><p class="sd">We turn the disclosure you must produce into operating and financing advantages you can use.</p></div>
        <div class="step" data-i="3"><div class="sh"><span class="sn">04</span><span class="st">Prove</span></div><p class="sd">We build the audit trail behind every number, so the result stands up to scrutiny.</p></div>
      </div>
    </div>
  </div>
</section>

<section class="sec proof" id="proof">
  <div class="wrap">
    <span class="mono eyebrow reveal" style="color:var(--gold-l);display:inline-block">25+ years of global ESG experience. Built for India.</span>
    <div class="proof-grid">
      <div class="proof-left reveal">
      <div class="sec-head" style="margin-bottom:26px">
      <h2>Built on decades of ESG expertise. Designed for Indian businesses.</h2>
      <p>Backed by more than 25 years of Teravue's global sustainability practice, we help Indian organisations turn ESG from obligation into practical guidance, recognised frameworks and measurable outcomes.</p>
      </div>
      <div class="proof-pts">
        <div class="ppt" data-row="0"><div class="i">01</div><div><h4>Decades of experience.<span class="st">EXPERIENCE</span></h4><p>25+ years of ESG and sustainability advisory through our parent practice, Teravue — across manufacturing, energy, infrastructure and financial services.</p></div></div>
        <div class="ppt" data-row="1"><div class="i">02</div><div><h4>Standards you recognise.<span class="st">EXPERTISE</span></h4><p>Our advisory aligns with the frameworks that govern Indian ESG — BRSR, GRI, SASB and TCFD — adapted to your business realities.</p></div></div>
        <div class="ppt" data-row="2"><div class="i">03</div><div><h4>Outcomes you can act on.<span class="st">EXECUTION</span></h4><p>ISO-certified, IMS-compliant delivery focused on practical, data-backed progress your leadership can measure.</p></div></div>
        <a class="btn btn-gold proof-cta" href="#cta"><span>Request a Proposal</span><span class="arw">→</span></a>
      </div>
      </div>
      <div class="ledger-glass reveal" id="ledger">
        <div class="lg-head">
          <div class="lg-toggle"><button class="on" data-v="sample">WHY TERAVORA</button><button data-v="flow">OUR APPROACH</button></div>
          <span class="lg-tag">BACKED BY TERAVUE</span>
        </div>
        <div class="lg-view" data-view="sample">
          <div class="lrow" data-row="0"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg></span><span class="lx">PRACTICE · GLOBAL ESG ADVISORY</span><span class="v v-src" data-final="25+ YRS">25+ YRS</span></div>
          <div class="lrow" data-row="1"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16"/><path d="M7 7h10"/><path d="M7 7l-3 6a3 3 0 0 0 6 0Z"/><path d="M17 7l3 6a3 3 0 0 1-6 0Z"/><path d="M8.5 20h7"/></svg></span><span class="lx">STANDARDS · RECOGNISED FRAMEWORKS</span><span class="v v-val" data-final="ALIGNED">ALIGNED</span></div>
          <div class="lrow" data-row="2"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 7.4-7 9-4-1.6-7-4.5-7-9V6Z"/><path d="M9 11.5l2 2 4-4"/></svg></span><span class="lx">DELIVERY · ISO-CERTIFIED PROCESS</span><span class="v v-ok" data-final="CERTIFIED">CERTIFIED</span></div>
        </div>
        <div class="lg-view" data-view="flow" hidden>
          <div class="flow">
            <div class="fnode"><div class="fn-k">01 · DISCOVER</div><div class="fn-t">Understand the business</div></div>
            <span class="farr">→</span>
            <div class="fnode"><div class="fn-k">02 · ASSESS</div><div class="fn-t">Map to the standard</div></div>
            <span class="farr">→</span>
            <div class="fnode"><div class="fn-k">03 · DELIVER</div><div class="fn-t">Measurable outcomes</div></div>
          </div>
        </div>
        <div class="manifest">
          <span class="mf-c tl"></span><span class="mf-c tr"></span><span class="mf-c bl"></span><span class="mf-c br"></span>
          <div class="mf-metrics">
            <div class="mf-b"><div class="n" data-to="49">0</div><div class="k">[ QTY // KPI_METRICS ]</div></div>
            <div class="mf-b"><div class="n" data-to="9">0</div><div class="k">[ BRSR-CORE ATTRIBUTES ]</div></div>
            <div class="mf-b"><div class="seal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="6.2"/><path d="M9.2 10l2 2 3.6-3.6"/><path d="M8.4 15.6L7 21l5-2.2L17 21l-1.4-5.4"/></svg></div><div class="k">ISO-CERTIFIED</div></div>
          </div>
          <div class="mf-note">The SEBI BRSR-Core specification — the standard we work to, not a client claim.</div>
          <div class="mf-std">
            <span class="std" data-t="Business Responsibility & Sustainability Report"><span class="sp">STD</span><span class="sc">BRSR</span></span>
            <span class="std" data-t="SEBI-assured subset — 49 KPIs / 9 attributes"><span class="sp">CORE</span><span class="sc">BRSR-CORE</span></span>
            <span class="std" data-t="Global Reporting Initiative"><span class="sp">STD</span><span class="sc">GRI</span></span>
            <span class="std" data-t="Sustainability Accounting Standards Board"><span class="sp">STD</span><span class="sc">SASB</span></span>
            <span class="std" data-t="Task Force on Climate-related Financial Disclosures"><span class="sp">CLIMATE</span><span class="sc">TCFD</span></span>
            <span class="std" data-t="ISO-certified, IMS-compliant delivery"><span class="sp">CERT</span><span class="sc">ISO</span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec tri" id="real-economy" aria-label="The real economy behind the disclosure">
  <div class="wrap">
    <div class="sec-label reveal"><span>SEC-06 // ON THE GROUND</span><span>WHY IT MATTERS</span></div>
    <div class="tri-head reveal"><h2>A disclosure is only as strong as what it points to.</h2><p>Behind BRSR-Core is the real economy — the assets, resources and people your numbers actually describe.</p></div>
    <div class="tri-grid">
      <figure class="tri-card reveal" style="--img:url('/v/home/tri-climate.webp')"><div class="tri-ph"></div><figcaption><span class="tk">CARBON &amp; CLIMATE</span><span class="tl">Energy and emissions — the Scope 1–3 story your footprint has to tell.</span></figcaption></figure>
      <figure class="tri-card reveal" style="--img:url('/v/home/tri-built.webp')"><div class="tri-ph"></div><figcaption><span class="tk">BUILT ENVIRONMENT</span><span class="tl">Resource use and green assets across the operations you report on.</span></figcaption></figure>
      <figure class="tri-card reveal" style="--img:url('/v/home/tri-land.webp')"><div class="tri-ph"></div><figcaption><span class="tk">LAND &amp; COMMUNITIES</span><span class="tl">Water, waste and the people your value chain reaches, end to end.</span></figcaption></figure>
    </div>
  </div>
</section>

<section class="sec pf" id="portfolio">
  <div class="wrap">
    <div class="pf-grid reveal">
      <div class="pf-intro">
        <div class="sec-head"><span class="mono eyebrow">The method, applied</span><h2>What working with Teravora looks like.</h2><p>The shape of a typical engagement — from kickoff to a filed, defensible disclosure.</p></div>
        <div class="pf-foot"><span>Want the track record behind the method?</span> <a href="https://teravue.org/" target="_blank" rel="noopener" class="lk">See our parent practice's work →</a></div>
      </div>
      <figure class="pf-fig">
        <div class="pf-imgwrap">
          <img src="/v/home/a6d4d21fb.webp" alt="Teravora India advisory network — specialist hubs across Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Ahmedabad and Pune">
          <div class="pf-live" aria-hidden="true"><span class="pf-pulse" style="left:28%;top:45%"></span><span class="pf-pulse" style="left:42.5%;top:15.5%;animation-delay:1.1s"></span><span class="pf-pulse" style="left:46%;top:48%;animation-delay:.6s"></span><span class="pf-pulse" style="left:41%;top:71%;animation-delay:1.7s"></span></div>
        </div>
        <figcaption class="fig-cap"><span>◇ SPECIALIST ADVISORY NETWORK · INDIA</span><span>NATIONAL REACH</span></figcaption>
      </figure>
    </div>
    <div class="pf-view reveal" data-view="process">
      <div class="tl">
        <div class="tl-step"><div class="tl-dot"></div><div class="tl-wk">WEEK 0</div><h4>Kickoff &amp; scope</h4><p>We map your band, deadline, and the data you already hold.</p></div>
        <div class="tl-step"><div class="tl-dot"></div><div class="tl-wk">WEEKS 1–2 · ASSESS</div><h4>Gap analysis</h4><p>Every BRSR-Core requirement marked present, partial, or missing — in plain language.</p></div>
        <div class="tl-step"><div class="tl-dot"></div><div class="tl-wk">WEEKS 3–6 · COMPLY</div><h4>Build the disclosure</h4><p>A filing assembled to pass reasonable assurance the first time.</p></div>
        <div class="tl-step"><div class="tl-dot"></div><div class="tl-wk">ONGOING · IMPROVE</div><h4>Turn it to advantage</h4><p>Use the disclosure for financing and operating gains, not just compliance.</p></div>
        <div class="tl-step"><div class="tl-dot"></div><div class="tl-wk">FILING · PROVE</div><h4>Audit trail delivered</h4><p>Every number backed by evidence your assurer can follow.</p></div>
      </div>
    </div>
  </div>
</section>

<section class="sec start" id="start">
  <div class="wrap">
    <div class="sec-head reveal"><span class="mono eyebrow">Find your starting point</span><h2>Where do you sit? We'll point you to the right first step.</h2></div>
    <div class="start-box reveal">
      <div class="cam" id="cam"></div><div class="flare"></div>
      <img class="sb-blueprint" src="/v/home/start-viz.webp" alt="">
      <div class="bgi" id="bgi0"></div><div class="bgi" id="bgi1"></div><div class="bgi" id="bgi2"></div>
      <div class="sb-inner">
        <div class="persona-tabs">
          <button class="ptab on" data-p="0"><span class="plft"><span class="pchip" style="background-image:url('/v/home/chip-listed.webp')"></span><span class="pl">For listed companies</span></span><span class="pk">S1 · S2</span></button>
          <button class="ptab" data-p="1"><span class="plft"><span class="pchip" style="background-image:url('/v/home/chip-suppliers.webp')"></span><span class="pl">For suppliers &amp; mid-market</span></span><span class="pk">S3</span></button>
          <button class="ptab" data-p="2"><span class="plft"><span class="pchip" style="background-image:url('/v/home/chip-cfo.webp')"></span><span class="pl">For CFOs &amp; compliance owners</span></span><span class="pk">RISK</span></button>
          <div class="allsol">Prefer to browse? <a href="#">See all solutions →</a></div>
        </div>
        <div class="sb-card">
          <div class="ck" id="ck">FOR LISTED COMPANIES</div>
          <h3 id="ch">BRSR assurance now applies to your band.</h3>
          <p id="cp">The independent, auditor-grade sign-off has arrived for your market-cap band. We get you to a disclosure that survives that bar — with the working shown at every step.</p>
          <a class="go" href="#cta" id="cgo">BRSR &amp; ASSURANCE READINESS <span class="arw">→</span></a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="final" id="cta">
  <div class="dhband"></div><div class="fflare"></div>
  <div class="wrap">
    <div class="final-head">
      <h2 class="reveal">Bring us your deadline.</h2>
      <p class="reveal">Two questions scope your proposal — and your specification builds live on the right. Then a specialist responds; a real person, not a form receipt.</p>
    </div>
    <div class="cfg-split">
      <div class="reveal">
        <div class="cfg-bar"><i id="cfgbar"></i></div>
        <div class="cfg-vp"><div class="cfg-in" id="cfgin">
          <div class="cfg-step" data-s="0">
            <div class="cfg-k">STEP 01 / 03 · SCOPE</div>
            <h3>Which describes you?</h3>
            <div class="opts" data-group="band">
              <div class="opt" data-v="Top 500 listed" data-fy="FY 2025-26"><span>Top 500 listed company</span><span class="tag">ASSURANCE FY25-26</span></div>
              <div class="opt" data-v="Top 1,000 listed" data-fy="FY 2026-27"><span>Top 1,000 listed company</span><span class="tag">ASSURANCE FY26-27</span></div>
              <div class="opt" data-v="Value chain / supplier" data-fy="Exploring"><span>Supplier or mid-market in a value chain</span><span class="tag">CASCADE</span></div>
            </div>
          </div>
          <div class="cfg-step" data-s="1">
            <div class="cfg-k">STEP 02 / 03 · TIMING</div>
            <h3>When is your filing?</h3>
            <div class="opts" data-group="fy">
              <div class="opt" data-v="FY 2026-27"><span>This financial year (FY26-27)</span><span class="tag">IMMINENT</span></div>
              <div class="opt" data-v="FY 2027-28"><span>Next financial year (FY27-28)</span><span class="tag">PLANNING</span></div>
              <div class="opt" data-v="Exploring"><span>Exploring — no fixed date yet</span><span class="tag">EARLY</span></div>
            </div>
            <div class="cfg-nav"><button class="cfg-back" data-back>← Back</button></div>
          </div>
          <div class="cfg-step" data-s="2">
            <div class="cfg-k">STEP 03 / 03 · REQUEST</div>
            <h3>Your specification is ready.</h3>
            <p style="color:var(--n200);font-size:.95rem;margin-bottom:18px">Everything on the right goes to your specialist. Send it and we'll respond with the scoped method.</p>
            <div class="hero-cta"><a class="btn btn-gold" href="#" id="cfgsubmit"><span>Request a Proposal</span><span class="arw">→</span></a></div>
            <div class="cfg-nav"><button class="cfg-back" data-back>← Change answers</button></div>
          </div>
          <div class="cfg-step" data-s="3">
            <div class="cfg-done"><div class="tick">✓</div><h3>Request received.</h3>
              <p style="color:var(--n200);max-width:44ch;margin-top:10px">A Teravora specialist will respond within two minutes during business hours — with the method, scoped to your answers. <em>(Demo — no data is sent from this comp.)</em></p>
            </div>
          </div>
        </div></div>
      </div>
      <div class="dossier reveal">
        <svg class="draw" id="ddraw" preserveAspectRatio="none"><rect id="drect" x="1" y="1" rx="15"></rect></svg>
        <div class="dsl">◇ ASSURANCE SPECIFICATION</div>
        <div class="drow"><span class="k">PROFILE</span><span class="val dim" id="dband">— select —</span></div>
        <div class="drow"><span class="k">FILING</span><span class="val dim" id="dfy">—</span></div>
        <div class="drow"><span class="k">STANDARD</span><span class="val">BRSR-Core · 49 KPIs / 9 attributes</span></div>
        <div class="dspec">Reasonable assurance scope, mapped to your profile.</div>
        <div class="dnote">Regulatory specification: SEBI BRSR-Core standard.</div>
      </div>
    </div>
  </div>
</section>

<a class="wafab" href="#" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.9 1 1-4.8-.2-.4A9.8 9.8 0 016 15c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 9.8-10 9.8zm5.5-7.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 2 .8 2.7.9 3.7.8.6-.1 1.8-.7 2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z"/></svg>
  <span class="lab">Chat with a specialist</span>
</a>`;
