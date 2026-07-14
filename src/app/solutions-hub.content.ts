// /solutions hub — canonical index of the full service catalog (client-directed
// catalog completion, 2026-07-14). Breadcrumb JSON-LD on solution routes already
// pointed here; this page makes the URL real. Copy authored fresh; ordering is
// the conversion-ranked order (research@v0 §4), not the parent's org chart.
export const SOLUTIONS_HUB_BODY = String.raw`<div class="rails"><i></i></div>

<header class="shero hub" id="top">
  <div class="shero-bg"></div>
  <div class="shero-veil"></div>
  <canvas id="stars"></canvas>
  <div class="shero-flare"></div>
  <div class="wrap"><div class="shero-in">
    <span class="eyebrow reveal">Solutions</span>
    <h1><span class="hl-line">One evidence discipline. Seven ways in.</span></h1>
    <p class="lede reveal">Every engagement runs the same spine — <span class="g">assess → strategize → comply → improve → prove</span> — so wherever you start, the numbers you end with can be checked. Start from the pressure you are actually under.</p>
    <div class="hero-cta reveal">
      <a class="btn btn-gold" href="/start"><span>Request a Proposal</span><span class="arw">→</span></a>
      <a class="btn btn-ghost" href="#catalog"><span>Browse the catalog</span></a>
    </div>
  </div></div>
  <div class="scrollcue" aria-hidden="true"><div class="wrap"><b>The full catalog</b></div></div>
</header>

<section class="sec" id="catalog">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="mono eyebrow">The catalog</span>
      <h2>Pick the door that matches your pressure.</h2>
      <p>Deadline, deal, audit, buyer questionnaire or board question — each service is a different entry into the same practice.</p>
    </div>
    <div class="hubgrid">
      <a class="hubcard reveal" href="/solutions/esg-disclosure-assurance-readiness">
        <div class="hk">COMPLY · ASSURE</div><h3>BRSR &amp; Assurance Readiness</h3>
        <p>From scattered data to a filed BRSR built to survive reasonable assurance — audit trail included.</p>
        <span class="ha">Explore →</span>
      </a>
      <a class="hubcard reveal" href="/solutions/carbon-climate">
        <div class="hk">MEASURE · DECARBONISE</div><h3>Carbon &amp; Climate</h3>
        <p>A defensible Scope 1–3 footprint, a board-approvable reduction pathway, and TCFD / IFRS S2 disclosure.</p>
        <span class="ha">Explore →</span>
      </a>
      <a class="hubcard reveal" href="/solutions/esg-climate-strategy-advisory">
        <div class="hk">GOVERN · STRATEGIZE</div><h3>ESG &amp; Climate Strategy Advisory</h3>
        <p>Materiality to board-approved roadmap — ESG embedded in governance and operations, with named owners.</p>
        <span class="ha">Explore →</span>
      </a>
      <a class="hubcard reveal" href="/solutions/technical-environmental-services">
        <div class="hk">AUDIT · IMPLEMENT</div><h3>Technical &amp; Environmental Services</h3>
        <p>Energy, water and waste audits, LCA, EIA / ESIA and ISO / IMS — the engineering layer under the claims.</p>
        <span class="ha">Explore →</span>
      </a>
      <a class="hubcard reveal" href="/solutions/sustainable-finance-carbon-markets">
        <div class="hk">FUND · MONETISE</div><h3>Sustainable Finance &amp; Carbon Markets</h3>
        <p>Green capital, ESG ratings and carbon-market entry — on evidence built to survive diligence.</p>
        <span class="ha">Explore →</span>
      </a>
      <a class="hubcard reveal" href="/solutions/environmental-social-due-diligence">
        <div class="hk">DE-RISK · TRANSACT</div><h3>Environmental &amp; Social Due Diligence</h3>
        <p>IFC / Equator-aligned ESDD on a deal timeline — findings a deal team and a lender can both rely on.</p>
        <span class="ha">Explore →</span>
      </a>
      <a class="hubcard reveal" href="/solutions/capacity-building-esg-training">
        <div class="hk">TEACH · EMBED</div><h3>Capacity Building &amp; Training</h3>
        <p>Practitioner training on your own data and filings — so the capability outlives the engagement.</p>
        <span class="ha">Explore →</span>
      </a>
      <div class="hubcard ghost reveal" aria-hidden="true">
        <div class="hk">NOT SURE WHERE YOU FIT?</div><h3>Start from the pressure.</h3>
        <p>Tell us the deadline, deal or question you are facing — we route it to the right specialist, not a menu.</p>
      </div>
    </div>
  </div>
</section>

<section class="sec prob" id="spine">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="mono eyebrow">One practice</span>
      <h2>Different doors, same discipline.</h2>
      <p>Whichever service you enter through, the work runs one spine — and every stage hands its evidence to the next.</p>
    </div>
    <div class="spine reveal" aria-label="The engagement spine">
      <span class="sp">ASSESS</span><i>→</i><span class="sp">STRATEGIZE</span><i>→</i><span class="sp">COMPLY</span><i>→</i><span class="sp">IMPROVE</span><i>→</i><span class="sp on">PROVE</span>
    </div>
    <p class="spine-note reveal">The last stage is the point: work you can <b>prove</b> — to an auditor, a lender, a buyer or your board. <a class="lk2" href="/how-we-prove">See how we prove it →</a></p>
  </div>
</section>

<section class="sec final" id="cta">
  <div class="wrap">
    <h2 class="reveal">Bring us the pressure you're under.</h2>
    <p class="reveal">A deadline, a deal, an audit, a questionnaire. Tell us what is being asked of you — a specialist scopes a proposal. A real person, not a form receipt.</p>
    <div class="hero-cta reveal">
      <a class="btn btn-gold" href="/start"><span>Request a Proposal</span><span class="arw">→</span></a>
      <a class="btn btn-ghost" href="/about"><span>Meet the practice</span></a>
    </div>
  </div>
</section>`;
