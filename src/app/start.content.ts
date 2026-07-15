export const START_BODY = String.raw`<div class="rails"><i></i></div>



<header class="shero start-hero" id="top">
  <div class="shero-bg"></div>
  <div class="shero-veil"></div>
  <div class="shero-flare"></div>
  <canvas id="stars"></canvas>
  <div class="wrap"><div class="shero-in">
    <span class="eyebrow reveal">Scope your proposal in minutes.</span>
    <h1><span class="hl-line">Request a Proposal.</span></h1>
    <p class="lede reveal">Tell us what is prompting this. In two minutes you'll have a specialist working on a first read of what your band requires — and a proposed scope for a short call. <span class="g">Not a quote yet, and no obligation.</span></p>
    <div class="hero-assure reveal">
      <span class="ha"><span class="ha-i">◷</span> Reply within <b>two business days</b></span>
      <span class="ha"><span class="ha-i">◆</span> A scoping conversation, <b>not a quote</b></span>
      <span class="ha"><span class="ha-i">☺</span> Reviewed by a <b>real specialist</b></span>
    </div>
  </div>
  <a class="scrollcue" href="#start" aria-label="Go to the form"><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l7 7 7-7"/></svg><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l7 7 7-7"/></svg></a>
  </div>
</header>

<section class="workspace" id="start">
  <div class="wrap">
    <div class="ws-grid">
      <div class="form-card" id="fcard">
        <div class="fc-top"><span class="step-ind" id="stepInd">Step 1 of 3</span><span class="fc-title" id="fcTitle">What's prompting this?</span></div>
        <p class="fc-help" id="fcHelp">Two quick taps. This routes you to the right specialist.</p>
        <div class="progress"><span class="pbar" id="pbar"></span></div>

        <div class="fstep" data-step="1">
          <div class="fld"><label>What's prompting this? <span class="req">required</span></label>
            <div class="opts" data-group="trigger">
              <div class="opt" data-val="deal">A live deal or project needs ESG due diligence</div>
              <div class="opt" data-val="customer">A lender, DFI or investor asked us for E&amp;S / ESG data</div>
              <div class="opt" data-val="emissions">We want to measure or cut our emissions</div>
              <div class="opt" data-val="brsr">A BRSR / assurance deadline in our band</div>
              <div class="opt" data-val="unsure">Not sure yet — help me work out what applies</div>
            </div>
          </div>
          <div class="fld"><label>Your listing band <span class="req">required</span></label>
            <div class="opts cols2" data-group="band">
              <div class="opt" data-val="t500">Listed · top 500</div>
              <div class="opt" data-val="t1000">Listed · top 1,000</div>
              <div class="opt" data-val="other">Listed · other</div>
              <div class="opt" data-val="supplier">Unlisted supplier / MSME</div>
              <div class="opt" data-val="investor">Investor or lender</div>
              <div class="opt" data-val="na">Other / not sure</div>
            </div>
          </div>
          <div class="divert-note" id="divertNote" hidden>No filing deadline forcing your hand? The <a href="#">5-minute BRSR readiness check</a> tells you which requirements apply to your band — a better place to start than this form.</div>
        </div>

        <div class="fstep" data-step="2" hidden>
          <div class="fld"><label>Company <span class="req">required</span></label><input type="text" id="company" placeholder="Your organisation"></div>
          <div class="fld"><label>Sector <span class="hint">optional</span></label><input type="text" placeholder="e.g. manufacturing, financial services, energy"></div>
          <div class="fld"><label>Timeline <span class="hint">optional</span></label>
            <div class="opts cols3" data-group="timeline">
              <div class="opt" data-val="thisfy">This FY</div><div class="opt" data-val="6mo">Next 6 months</div><div class="opt" data-val="explore">Exploring</div>
            </div>
          </div>
          <div class="fld"><label>Anything specific? <span class="hint">optional</span></label><textarea rows="3" placeholder="A line on what's prompting this — skip anything you'd rather not share."></textarea></div>
        </div>

        <div class="fstep" data-step="3" hidden>
          <div class="fld"><label>Name <span class="req">required</span></label><input type="text" id="name" placeholder="Your name"></div>
          <div class="fld"><label>Work email <span class="req">required</span></label><input type="email" id="email" placeholder="you@company.com"><span class="err" id="emailErr" hidden>⚠ Please enter a valid work email so we can reach you.</span></div>
          <div class="fld two"><div><label>Phone <span class="hint">optional</span></label><input type="tel" placeholder="+91"></div><div><label>Role <span class="hint">optional</span></label><input type="text" placeholder="e.g. Head of ESG"></div></div>
          <label class="consent"><input type="checkbox" id="consent"> <span>I agree to be contacted about my request. <a href="#">Privacy Policy</a>.</span></label>
        </div>

        <div class="fc-actions">
          <button class="btn btn-ghost lite" id="backBtn" hidden><span>← Back</span></button>
          <button class="btn btn-gold" id="nextBtn"><span id="nextLbl">Continue</span><span class="arw">→</span></button>
        </div>
      </div>

      <div class="form-card confirm" id="confirmCard" hidden>
        <div class="conf-badge">✓</div>
        <h2>Request received — here's what happens next.</h2>
        <p>A specialist reviews your context and replies within <b>two business days</b> with (1) a first read on what your band actually requires and (2) a proposed scope for a short call — not a quote yet.</p>
        <div class="conf-lane" id="confLane">Because your deadline is real, we'll lead with what has to be assured first.</div>
        <p class="conf-alt">While you wait, the <a href="#">5-minute BRSR readiness check</a> tells you which requirements apply to your band. <span class="conf-fallback">Trouble sending? Email <a href="#">proposal@teravora.in</a> and we'll pick it up.</span></p>
      </div>

      <div class="spec-wrap">
        <div class="spec" id="spec">
          <div class="spec-scan" aria-hidden="true"></div>
          <div class="spec-head">
            <span class="mono">◇ YOUR SCOPE</span>
            <span class="spec-status" id="specStatus" data-s="0"><span class="sdot"></span><span id="specStatusLbl">AWAITING INPUT</span></span>
          </div>
          <div class="spec-prog"><span class="spec-pbar" id="specPbar"></span></div>
          <div class="srow"><span class="sk">PROMPT</span><span class="sv" id="sv-trigger">—</span></div>
          <div class="srow"><span class="sk">BAND</span><span class="sv" id="sv-band">—</span></div>
          <div class="srow"><span class="sk">TIMELINE</span><span class="sv" id="sv-timeline">—</span></div>
          <div class="srow lane-row"><span class="sk">LANE</span><span class="sv lane" id="sv-lane">—</span></div>
          <div class="spec-derive" id="specDerive" hidden><span class="dv-tag">▸ DERIVED</span><span id="specDeriveTxt"></span></div>
          <div class="spec-foot" id="specFoot">A specialist is matched from your answers — you see reassurance, never a score.</div>
        </div>
        <div class="reassure">
          <div class="rz"><span class="ic">◷</span><div><b>Reply within two business days.</b><p>A first read on what your band requires, plus a proposed scope for a short call.</p></div></div>
          <div class="rz"><span class="ic">◆</span><div><b>Not a quote — a scoping conversation.</b><p>No number we can't stand behind, and no obligation on your side.</p></div></div>
          <div class="rz"><span class="ic">☺</span><div><b>A real person, not a form receipt.</b><p>Reviewed by a specialist, replied to by a specialist.</p></div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="trustband" aria-labelledby="tb-h">
  <div class="wrap">
    <div class="tb-grid">
      <div class="tb-lead reveal">
        <span class="tb-eyebrow">◇ LINEAGE &amp; STANDARDS</span>
        <h2 id="tb-h">Not a first attempt — a 25-year practice, now in India.</h2>
        <p>Teravora is the India branch of <b>Teravue</b>, a sustainability &amp; assurance practice with <b>25+ years</b> across MENA and India. You brief a team that has done this before — the methods and the track record come with us.</p>
        <div class="tb-attr">▸ Parent-practice track record attributed to Teravue — never restated as a Teravora result.</div>
      </div>
      <div class="tb-stds reveal">
        <span class="tb-stds-h">FRAMEWORKS WE WORK IN</span>
        <div class="tb-chips">
          <span class="tb-chip">BRSR &middot; BRSR-Core</span>
          <span class="tb-chip">IFRS S1 / S2</span>
          <span class="tb-chip">GHG Protocol</span>
          <span class="tb-chip">TCFD</span>
          <span class="tb-chip">GRI</span>
          <span class="tb-chip">IFC Standards</span>
          <span class="tb-chip">Equator Principles</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="sec faqsec" id="faq">
  <div class="wrap">
    <div class="sec-head reveal"><span class="badge-hl">&#9671; COMMON QUESTIONS</span><h2>Before you send it.</h2></div>
    <div class="faq reveal">
      <div class="qa"><button type="button">Is this a quote? <span class="pl">+</span></button><div class="a"><p>No. You'll get a first read on what your band actually requires and a proposed scope for a short call &mdash; not a number. Pricing follows only once the scope is agreed, so it reflects the work, not a guess.</p></div></div>
      <div class="qa"><button type="button">What does it cost, and am I committing to anything? <span class="pl">+</span></button><div class="a"><p>Nothing, and no. The proposal request and the scoping call are free and carry no obligation. You decide whether to go further once you've seen how we'd approach it.</p></div></div>
      <div class="qa"><button type="button">What if I'm not sure what applies to us? <span class="pl">+</span></button><div class="a"><p>That's a valid starting point &mdash; choose <i>&ldquo;Not sure yet&rdquo;</i> and we'll help you work out which requirements actually reach your band. If no filing deadline is forcing your hand, the 5-minute BRSR readiness check is often the better first step.</p></div></div>
      <div class="qa"><button type="button">Who sees the information I share? <span class="pl">+</span></button><div class="a"><p>Only the specialist reviewing your request. Your details are used to prepare your first read and to reach you about it &mdash; nothing else, and never sold. See our <a href="#">Privacy Policy</a>.</p></div></div>
    </div>
  </div>
</section>`;
