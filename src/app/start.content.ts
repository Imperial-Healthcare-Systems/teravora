export const START_BODY = String.raw`<div class="rails"><i></i></div>



<header class="shero start-hero" id="top">
  <div class="shero-bg"></div>
  <div class="shero-veil"></div>
  <div class="shero-flare"></div>
  <div class="wrap"><div class="shero-in">
    <div class="crumb reveal"><b>Get started</b> <span class="sep">/</span> Request a Proposal</div>
    <h1 class="reveal">Request a Proposal.</h1>
    <p class="lede reveal">Tell us what is prompting this. In two minutes you'll have a specialist working on a first read of what your band requires — and a proposed scope for a short call. <span class="g">Not a quote yet, and no obligation.</span></p>
  </div></div>
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
              <div class="opt" data-val="brsr">A BRSR / assurance deadline in our band</div>
              <div class="opt" data-val="customer">A customer or lender asked us for ESG data</div>
              <div class="opt" data-val="deal">A live deal or investment needs due diligence</div>
              <div class="opt" data-val="emissions">We want to measure or cut our emissions</div>
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
          <div class="spec-head"><span class="mono">◇ YOUR SCOPE · BUILDING</span></div>
          <div class="srow"><span class="sk">PROMPT</span><span class="sv" id="sv-trigger">—</span></div>
          <div class="srow"><span class="sk">BAND</span><span class="sv" id="sv-band">—</span></div>
          <div class="srow"><span class="sk">TIMELINE</span><span class="sv" id="sv-timeline">—</span></div>
          <div class="srow"><span class="sk">LANE</span><span class="sv lane" id="sv-lane">—</span></div>
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
</section>`;
