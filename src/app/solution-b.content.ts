// Solution B — Carbon & Climate. Dedicated body (replaces the MVP shortcut that
// reused the Solution A archetype content on this route). Same three-zone
// skeleton (ia/v0 §2): message → E1-safe proof adjacent to CTA → canonical CTA.
// E1: no client outcomes claimed; counters/chips are factual descriptors only.
export const SOLUTION_B_BODY = String.raw`<div class="rails"><i></i></div>

<header class="shero" id="top">
  <div class="shero-bg" style="background-image:url('/v/solution/hero-carbon.webp');background-position:center 42%"></div>
  <div class="shero-veil"></div>
  <canvas id="stars"></canvas>
  <div class="shero-flare"></div>
  <div class="wrap"><div class="shero-in">
    <span class="eyebrow reveal">Carbon &amp; Climate</span>
    <h1><span class="hl-line">A carbon number you can defend — and a pathway to cut it.</span></h1>
    <p class="lede reveal">A <span class="g">GHG inventory</span> <i>(greenhouse-gas footprint across Scope 1, 2 and 3)</i> built to the GHG Protocol, a decarbonisation pathway a board can approve, and climate disclosure aligned to <span class="g">TCFD and IFRS S2</span> — every figure traceable to its activity data.</p>
    <div class="hero-cta reveal">
      <a class="btn btn-gold" href="#cta"><span>Request a Proposal</span><span class="arw">→</span></a>
      <a class="btn btn-ghost" href="#scope"><span>See our method</span></a>
    </div>
    <div class="chips reveal">
      <span class="chip"><b>GHG Protocol</b> Scope 1 · 2 · 3</span>
      <span class="chip"><b>IFRS S2</b> climate disclosure</span>
      <span class="chip"><b>TCFD</b>-aligned reporting</span>
      <span class="chip on"><b>Traceable</b> to activity data</span>
    </div>
  </div></div>
  <div class="scrollcue" aria-hidden="true"><div class="wrap"><b>Why an estimate is no longer enough</b></div></div>
</header>

<section class="sec prob" id="why">
  <div class="wrap">
    <div class="prob-top">
      <div class="sec-head reveal" style="margin-bottom:0">
        <span class="mono eyebrow">The shift</span>
        <h2>Your emissions number used to be an estimate. Now it gets tested.</h2>
        <p>Emissions and energy sit inside the KPIs India's assured disclosure regime covers — and customers, lenders and boards are asking for the working, not the summary. Three pressures land at once.</p>
      </div>
    </div>
    <div class="pressure">
      <div class="pcard reveal"><div class="k">01 · THE REGULATOR</div><h4>Assured, not asserted.</h4><p>Greenhouse gases and energy are attributes of BRSR-Core — the assured subset of India's mandated disclosure. A footprint that can't be traced to activity data is where assurance stalls.</p></div>
      <div class="pcard reveal"><div class="k">02 · THE VALUE CHAIN</div><h4>Your customers count you.</h4><p>Your emissions are someone else's Scope 3. Customers and lenders with their own targets increasingly ask suppliers for credible numbers — and drop the ones who can't show them.</p></div>
      <div class="pcard reveal"><div class="k">03 · THE OPERATION</div><h4>Energy is money.</h4><p>Behind every tonne of CO₂e is fuel and electricity you paid for. A footprint you actually understand is also a map of operating cost — decarbonisation done properly is an efficiency programme.</p></div>
    </div>
  </div>
</section>

<section class="sec" id="scope">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="mono eyebrow">What this is · what you get</span>
      <h2>From fuel bills and meter readings to a board-approvable pathway.</h2>
      <p>We build the inventory, set the trajectory, and prepare the disclosure — and you keep the calculation trail behind every figure, so next year is an update, not a rebuild.</p>
    </div>
    <div class="trace reveal" aria-hidden="true"><span class="tline"></span><span class="tdot"></span><span class="tdot"></span><span class="tdot"></span><span class="tdot"></span><span class="tpulse"></span></div>
    <div class="steps4">
      <div class="s4 reveal"><div class="n">01 · MEASURE</div><h4>Build the inventory</h4><p>Scope 1, 2 and 3 to the GHG Protocol — boundaries set, factors sourced and versioned, every line traced to activity data.</p></div>
      <div class="s4 reveal"><div class="n">02 · TARGET</div><h4>Set the trajectory</h4><p>A baseline your board can sign, and reduction targets grounded in what your operations can actually deliver.</p></div>
      <div class="s4 reveal"><div class="n">03 · CUT</div><h4>Plan the reductions</h4><p>Interventions ranked by abatement and cost — energy, process and procurement levers in one sequenced pathway.</p></div>
      <div class="s4 reveal"><div class="n">04 · DISCLOSE</div><h4>Report it credibly</h4><p>Climate disclosure aligned to TCFD and IFRS S2, consistent with your BRSR — written to survive the reader who checks.</p></div>
    </div>
  </div>
</section>

<section class="sec" id="scope3">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="mono eyebrow" style="color:var(--gold-l)">Signature capability · Scope 3</span>
      <h2>The hard part is the value chain. We have done all fifteen categories.</h2>
      <p>Scope 3 is where most of the footprint hides — and where most inventories stop. We have calculated Scope 3 across <b style="color:var(--paper)">all fifteen categories — the full supply-chain footprint — for an energy company</b>: purchased and capital goods, transport, waste, business travel, use of sold products and end-of-life, each traced to activity data.</p>
    </div>
    <figure class="reveal" style="margin:0">
      <img src="/v/home/ae4e4fefc.webp" alt="Carbon accounting architecture — Scope 1 direct, Scope 2 purchased energy and Scope 3 value-chain emissions reconciled into an audit-ready ledger" style="width:100%;height:auto;display:block;border:1px solid rgba(196,145,47,.22);border-radius:14px" loading="lazy">
      <figcaption style="margin-top:12px;font-family:var(--mono);font-size:.6rem;letter-spacing:.12em;color:rgba(255,255,255,.5)">◇ SCOPE 1 · 2 · 3 — DIRECT, ENERGY AND THE FULL VALUE CHAIN. ILLUSTRATIVE ARCHITECTURE, NOT A CLIENT RESULT.</figcaption>
    </figure>
  </div>
</section>

<section class="sec" id="proof">
  <div class="wrap">
    <div class="sec-head reveal" style="max-width:none;margin-bottom:34px">
      <span class="mono eyebrow" style="color:var(--gold-l)">Built to be checked — and we show how</span>
      <h2>Every tonne we report carries its activity data, its factor and its source.</h2>
    </div>
    <div class="pb-grid">
      <div class="reveal">
        <p style="color:var(--n200);margin-bottom:18px">The inventory is mastered against the standards that govern it, so the same numbers serve your disclosure, your customers and your lenders:</p>
        <div class="stds">
          <span class="std2"><b>GHG</b> Protocol</span>
          <span class="std2"><b>IFRS</b> S1 / S2</span>
          <span class="std2"><b>TCFD</b></span>
          <span class="std2"><b>BRSR-Core</b> GHG / energy</span>
        </div>
        <div class="pov">A footprint is not a number — it is a calculation. We hand over the calculation, so you are never asked to defend a figure you cannot reconstruct.</div>
        <div class="illus">
          <span class="lbl">◇ ILLUSTRATIVE MODEL — NOT A CLIENT RESULT</span>
          <p>A typical engagement takes you from source data to a complete Scope 1–3 inventory and a costed reduction pathway across a single reporting cycle.</p>
        </div>
        <div class="egate">[ VERIFIED REDUCTION OUTCOMES POPULATE HERE ONCE SUBSTANTIATED — WE DO NOT PUBLISH AN OUTCOME WE HAVE NOT VERIFIED. ]</div>
      </div>
      <div class="readycard reveal">
        <div class="rc-head"><span class="t">GHG INVENTORY · SAMPLE</span><span class="tag">THE METHOD, NOT A CLAIM</span></div>
        <div class="rc-row"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><span class="lx">ACTIVITY DATA · SOURCED AT SITE</span><span class="v" data-final="TRACED">TRACED</span></div>
        <div class="rc-row"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><span class="lx">EMISSION FACTORS · SOURCED &amp; VERSIONED</span><span class="v" data-final="SOURCED">SOURCED</span></div>
        <div class="rc-row"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span><span class="lx">PATHWAY · RANKED BY ABATEMENT &amp; COST</span><span class="v" data-final="COSTED">COSTED</span></div>
        <div class="rc-foot">RECONCILED TO THE MULTI-MARKET TRACK RECORD OF OUR PARENT PRACTICE, TERAVUE.</div>
      </div>
    </div>
    <div class="inline-cta reveal">
      <a class="btn btn-gold" href="#cta"><span>Request a Proposal</span><span class="arw">→</span></a>
      <a class="lk" href="#scope">See the four-step method →</a>
    </div>
  </div>
</section>

<section class="band" id="real-economy-band" aria-label="The real economy behind the footprint">
  <div class="band-img" style="background-image:url('/v/solution/band-carbon.webp')"></div>
  <div class="band-scrim"></div>
  <div class="wrap band-in">
    <span class="mono band-kicker reveal">◇ THE REAL ECONOMY</span>
    <h2 class="band-h reveal">Every tonne on the page<br>burned somewhere real.</h2>
    <p class="band-sub reveal">Behind the inventory is the boiler, the fleet and the grid your figures describe. A credible footprint starts at the meter — not in a spreadsheet template.</p>
  </div>
</section>

<section class="sec prob" id="fit">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="mono eyebrow">Where you sit</span>
      <h2>Built for the teams a carbon number lands on.</h2>
    </div>
    <div class="personas">
      <div class="pc2 reveal"><div class="ic">▲</div><h4>Manufacturers &amp; operators</h4><p>Energy-intensive operations that need a defensible footprint and a reduction pathway that respects how the plant actually runs.</p><span class="lk">Request a Proposal →</span></div>
      <div class="pc2 reveal"><div class="ic">▤</div><h4>Listed companies</h4><p>Carrying GHG and energy KPIs into assured disclosure, and answering climate questions from the board and investors.</p><span class="lk">Request a Proposal →</span></div>
      <div class="pc2 reveal"><div class="ic">⬡</div><h4>Suppliers with customer asks</h4><p>Asked for emissions data by customers and lenders with their own targets. We scope a proportionate, credible response.</p><span class="lk">Request a Proposal →</span></div>
    </div>
  </div>
</section>

<section class="sec final" id="cta">
  <div class="wrap">
    <h2 class="reveal">Bring us your meter readings.</h2>
    <p class="reveal">Tell us your operations and what your buyers or board are asking for. A specialist scopes a proposal — a real person, not a form receipt.</p>
    <div class="hero-cta reveal">
      <a class="btn btn-gold" href="/start"><span>Request a Proposal</span><span class="arw">→</span></a>
      <a class="btn btn-ghost" href="/how-we-prove"><span>See how we prove it</span></a>
    </div>
  </div>
</section>

<section class="sec" id="faq">
  <div class="wrap">
    <div class="sec-head reveal"><span class="mono eyebrow">Common questions</span><h2>Carbon accounting &amp; climate disclosure, briefly.</h2></div>
    <div class="faq reveal">
      <div class="qa"><button>What are Scope 1, 2 and 3 emissions? <span class="pl">+</span></button><div class="a">Under the GHG Protocol: <i>Scope 1</i> is what you burn directly (fuel, process, fleet); <i>Scope 2</i> is the electricity and energy you purchase; <i>Scope 3</i> is everything up and down your value chain — usually the largest and hardest to measure.</div></div>
      <div class="qa"><button>What is IFRS S2, and does it apply in India? <span class="pl">+</span></button><div class="a">IFRS S2 is the ISSB's climate-disclosure standard. India's regulators are monitoring adoption, larger issuers are voluntarily aligning to reassure global investors, and BRSR↔ISSB convergence is widely anticipated — so S2-consistent climate reporting is readiness, not gold-plating.</div></div>
      <div class="qa"><button>Is a GHG inventory mandatory for us? <span class="pl">+</span></button><div class="a">If you are in India's top-1,000 listed companies, greenhouse-gas and energy disclosure is part of your BRSR — and within BRSR-Core it is phased into reasonable assurance by market-cap band. Unlisted suppliers increasingly face the same ask contractually, from customers.</div></div>
      <div class="qa"><button>Do you publish outcome numbers? <span class="pl">+</span></button><div class="a">No — we are a new India brand and will not publish an outcome we have not verified. We prove the method: activity data, factor and source behind every figure. Track record shown is our parent practice, Teravue, attributed.</div></div>
    </div>
  </div>
</section>`;
