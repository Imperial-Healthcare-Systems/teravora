/* =============================================================================
 * Why Now — V3 section-wise build. Server-rendered body injected as a scoped
 * .pg-whynow island (SEO-visible markup) + a light reveal runtime.
 * Copy is DRAFT pending human approval (copy = human_decides).
 * Built beat by beat: [1] dark hero · [2] regulatory clock · [3] four forces ·
 * [4] cost of waiting · [5] CTA.
 * ========================================================================== */
export const WHYNOW_BODY = String.raw`
<!-- ═══ BEAT 1 · dark hero (thesis) ═══════════════════════════════════════ -->
<section class="wn-hero" id="wn-hero">
  <div class="wn-hero-bg" aria-hidden="true"></div>
  <div class="wn-hero-scrim" aria-hidden="true"></div>
  <div class="wn-hero-flare" aria-hidden="true"></div>
  <div class="wrap">
    <div class="wn-hero-in">
      <span class="eyebrow">Why now</span>
      <h1>
        <span class="l1"><span class="word">The</span> <span class="word">clock</span> <span class="word">is</span> <span class="word">already</span> <span class="word">running.</span></span><br>
        <span class="l2"><span class="word">The</span> <span class="word">advantage</span> <span class="word">is</span> <span class="word">still</span> <span class="word">open.</span></span>
      </h1>
      <p class="wn-lede">
        Lenders and DFIs pricing E&amp;S risk into capital, IFC &amp; Equator
        conditions on every deal, CSRD reaching into Indian supply chains, and
        BRSR-Core assurance at home &mdash; the requirements are arriving on a
        <b>fixed schedule</b>. The companies that build defensible evidence
        <b>before</b> the deadline set their own terms. The ones that wait inherit
        someone else&rsquo;s.
      </p>
      <div class="wn-cta">
        <a class="btn btn-gold" href="/start"><span>Request a Proposal</span> <span class="arw">&rarr;</span></a>
        <a class="btn btn-ghost" href="/solutions">See what we do</a>
      </div>
    </div>
  </div>
  <div class="wn-scroll" aria-hidden="true"><div class="wrap"><b>The forces below are not optional</b></div></div>
</section>

<!-- ═══ BEAT 2 · the regulatory clock (light glide-path timeline) ═════════ -->
<section class="wn-clock" id="regulatory-clock">
  <div class="wrap">
    <div class="wn-clock-head reveal">
      <span class="eyebrow eyebrow-dk">The regulatory clock</span>
      <h2>The schedule is already published. <span class="mut">Only your readiness is optional.</span></h2>
      <p>
        SEBI&rsquo;s reasonable-assurance duty on the BRSR Core arrives on a
        widening glide path. Every financial year pulls a larger band of listed
        companies into <b>independent assurance</b> &mdash; the threshold is
        moving toward you, not away.
      </p>
      <span class="wn-flag">Schedule per SEBI&rsquo;s BRSR-Core reasonable-assurance glide path</span>
    </div>

    <div class="wn-timeline reveal">
      <div class="wn-track" aria-hidden="true"><i></i></div>

      <div class="wn-node">
        <span class="wn-fy">FY 2023&ndash;24</span>
        <span class="wn-dot" aria-hidden="true"></span>
        <div class="wn-card">
          <b class="wn-th">Top 150</b>
          <span class="wn-th-sub">listed, by market cap</span>
          <p>Reasonable assurance of the BRSR Core becomes mandatory for the first band.</p>
          <div class="wn-cov" aria-hidden="true"><i style="--w:15%"></i></div>
          <span class="wn-cov-l">~150 companies</span>
        </div>
      </div>

      <div class="wn-node">
        <span class="wn-fy">FY 2024&ndash;25</span>
        <span class="wn-dot" aria-hidden="true"></span>
        <div class="wn-card">
          <b class="wn-th">Top 250</b>
          <span class="wn-th-sub">listed, by market cap</span>
          <p>The net widens; value-chain ESG disclosure begins on a comply-or-explain basis.</p>
          <div class="wn-cov" aria-hidden="true"><i style="--w:25%"></i></div>
          <span class="wn-cov-l">~250 companies</span>
        </div>
      </div>

      <div class="wn-node">
        <span class="wn-fy">FY 2025&ndash;26</span>
        <span class="wn-dot" aria-hidden="true"></span>
        <div class="wn-card">
          <b class="wn-th">Top 500</b>
          <span class="wn-th-sub">listed, by market cap</span>
          <p>Assured disclosure becomes the mid-market norm &mdash; and a lender and buyer expectation.</p>
          <div class="wn-cov" aria-hidden="true"><i style="--w:50%"></i></div>
          <span class="wn-cov-l">~500 companies</span>
        </div>
      </div>

      <div class="wn-node on">
        <span class="wn-nowtag">This financial year</span>
        <span class="wn-fy">FY 2026&ndash;27</span>
        <span class="wn-dot" aria-hidden="true"></span>
        <div class="wn-card">
          <b class="wn-th">Top 1000</b>
          <span class="wn-th-sub">listed, by market cap</span>
          <p>The duty reaches its full width. By now, readiness is a track record &mdash; not a project.</p>
          <div class="wn-cov" aria-hidden="true"><i style="--w:100%"></i></div>
          <span class="wn-cov-l">~1000 companies</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ BEAT 3 · four forces (dark image grid) ═══════════════════════════ -->
<section class="wn-forces" id="four-forces">
  <div class="wrap">
    <div class="wn-forces-head reveal">
      <span class="eyebrow">The four forces</span>
      <h2>Pressure is arriving from four directions at once.</h2>
      <p>
        This was never a single deadline. Regulators, capital, global buyers and
        the market are converging on the <b>same expectation</b> &mdash; a
        disclosure you can prove, not just publish.
      </p>
    </div>

    <div class="wn-grid">
      <article class="wn-force reveal">
        <div class="wn-force-img">
          <img src="/v/why-now/force-regulators.webp" alt="A grand columned institutional building under a clear sky" loading="lazy" width="920" height="1150">
          <span class="wn-force-kick">Regulators</span>
        </div>
        <div class="wn-force-body">
          <h3>The mandate is assured, not assumed.</h3>
          <p>SEBI&rsquo;s BRSR Core moves reporting from self-declared to independently assured &mdash; band by band, on the schedule above.</p>
        </div>
      </article>

      <article class="wn-force reveal">
        <div class="wn-force-img">
          <img src="/v/why-now/force-capital.webp" alt="Modern financial-district towers seen from below" loading="lazy" width="920" height="1150">
          <span class="wn-force-kick">Capital &amp; lenders</span>
        </div>
        <div class="wn-force-body">
          <h3>Capital is repricing ESG risk.</h3>
          <p>Lenders and investors now read sustainability data as a credit and valuation signal. Numbers no one has assured get discounted.</p>
        </div>
      </article>

      <article class="wn-force reveal">
        <div class="wn-force-img">
          <img src="/v/why-now/force-global.webp" alt="Aerial view of a busy container port with cranes and a cargo ship" loading="lazy" width="920" height="1150">
          <span class="wn-force-kick">Global value chains</span>
        </div>
        <div class="wn-force-body">
          <h3>Global buyers are asking first.</h3>
          <p>CSRD and IFRS S2 reach through multinational supply chains into their Indian suppliers&rsquo; data &mdash; often ahead of the local deadline.</p>
        </div>
      </article>

      <article class="wn-force reveal">
        <div class="wn-force-img">
          <img src="/v/why-now/force-reputation.webp" alt="Professionals in a bright modern office in discussion" loading="lazy" width="920" height="1150">
          <span class="wn-force-kick">Reputation</span>
        </div>
        <div class="wn-force-body">
          <h3>Trust now runs on evidence.</h3>
          <p>Stakeholders reward a claim they can check and penalise one they can&rsquo;t. Reputation compounds on proof, not intent.</p>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- ═══ BEAT 4 · the cost of waiting (light diverging fork) ══════════════ -->
<section class="wn-cost" id="cost-of-waiting">
  <div class="wrap">
    <div class="wn-cost-head reveal">
      <span class="eyebrow eyebrow-dk">The cost of waiting</span>
      <h2>Readiness is cheapest before it&rsquo;s required.</h2>
      <p>
        The work doesn&rsquo;t shrink if you delay it &mdash; it <b>compresses</b>.
        The same disclosure, built under deadline, costs more, proves less, and
        arrives after the advantage is already taken.
      </p>
    </div>

    <div class="wn-fork reveal" aria-hidden="true">
      <svg viewBox="0 0 900 300" role="img">
        <defs>
          <linearGradient id="fkgold" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#c4912f"/>
            <stop offset="1" stop-color="#e7c877"/>
          </linearGradient>
        </defs>
        <path class="fk-path fk-dn" d="M70,150 C 320,150 520,160 840,252"/>
        <path class="fk-path fk-up" d="M70,150 C 320,150 520,118 840,52"/>
        <g class="fk-node">
          <circle cx="70" cy="150" r="6" fill="#0e2033"/>
          <text class="fk-start" x="70" y="176" text-anchor="middle">Today</text>
          <circle cx="840" cy="52" r="6" fill="#c4912f"/>
          <text class="fk-lab fk-lab-up" x="828" y="40" text-anchor="end">First-mover position</text>
          <circle cx="840" cy="252" r="5" fill="#b6c1cc"/>
          <text class="fk-lab fk-lab-dn" x="828" y="274" text-anchor="end">The scramble</text>
        </g>
      </svg>
    </div>

    <div class="wn-paths">
      <div class="wn-path wait reveal">
        <span class="wn-path-k">If you wait for the deadline</span>
        <h3>The scramble.</h3>
        <ul>
          <li>Assurance capacity is booked &mdash; you <b>queue behind everyone</b> on the same deadline.</li>
          <li>Data gathered in a rush gets <b>restated</b> &mdash; publicly, and at cost.</li>
          <li>Capital and buyers apply the <b>unassured discount</b> to numbers no one has checked.</li>
        </ul>
      </div>
      <div class="wn-path move reveal">
        <span class="wn-path-k">If you move now</span>
        <h3>The head start.</h3>
        <ul>
          <li>You set the timeline &mdash; assurance <b>on your schedule</b>, not the queue&rsquo;s.</li>
          <li>A clean, multi-year trail <b>compounds</b> into credibility you can show.</li>
          <li>You become the <b>credible option</b> before your peers are ready.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- ═══ BEAT 5 · CTA (ported home configurator) ═════════════════════════ -->
<section class="final" id="cta">
  <div class="dhband" aria-hidden="true"></div><div class="fflare" aria-hidden="true"></div>
  <div class="wrap">
    <div class="final-head">
      <h2 class="reveal">Bring us your deadline.</h2>
      <p class="reveal">Two questions scope your proposal &mdash; and your specification builds live on the right. Then a specialist responds; a real person, not a form receipt.</p>
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
              <div class="opt" data-v="Exploring"><span>Exploring &mdash; no fixed date yet</span><span class="tag">EARLY</span></div>
            </div>
            <div class="cfg-nav"><button class="cfg-back" data-back>&larr; Back</button></div>
          </div>
          <div class="cfg-step" data-s="2">
            <div class="cfg-k">STEP 03 / 03 · REQUEST</div>
            <h3>Your specification is ready.</h3>
            <p style="color:var(--n200);font-size:.95rem;margin-bottom:18px">Everything on the right goes to your specialist. Send it and we&rsquo;ll respond with the scoped method.</p>
            <div class="hero-cta"><a class="btn btn-gold" href="#" id="cfgsubmit"><span>Request a Proposal</span><span class="arw">&rarr;</span></a></div>
            <div class="cfg-nav"><button class="cfg-back" data-back>&larr; Change answers</button></div>
          </div>
          <div class="cfg-step" data-s="3">
            <div class="cfg-done"><div class="tick">&#10003;</div><h3>Request received.</h3>
              <p style="color:var(--n200);max-width:44ch;margin-top:10px">A Teravora specialist will respond within two minutes during business hours &mdash; with the method, scoped to your answers. <em>(Demo &mdash; no data is sent from this comp.)</em></p>
            </div>
          </div>
        </div></div>
      </div>
      <div class="dossier reveal">
        <svg class="draw" id="ddraw" preserveAspectRatio="none"><rect id="drect" x="1" y="1" rx="15"></rect></svg>
        <div class="dsl">&#9671; ASSURANCE SPECIFICATION</div>
        <div class="drow"><span class="k">PROFILE</span><span class="val dim" id="dband">&mdash; select &mdash;</span></div>
        <div class="drow"><span class="k">FILING</span><span class="val dim" id="dfy">&mdash;</span></div>
        <div class="drow"><span class="k">STANDARD</span><span class="val">BRSR-Core &middot; 49 KPIs / 9 attributes</span></div>
        <div class="dspec">Reasonable assurance scope, mapped to your profile.</div>
        <div class="dnote">Regulatory specification: SEBI BRSR-Core standard.</div>
      </div>
    </div>
  </div>
</section>
`;
