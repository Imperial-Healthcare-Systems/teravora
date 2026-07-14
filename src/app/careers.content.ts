// Evergreen careers page (net-new IA, human-approved; footer-only entry).
// HONESTY RULES (content@v0 E1): no fabricated openings, no implied headcount,
// perks or tenure; the open-roles slot ships as an explicit empty state.
// ROLES SLOT (div.roles[data-roles="empty"] below): when real openings exist,
// replace the empty state with role cards AND add per-role JobPosting JSON-LD
// in careers/page.tsx. Never render a listing that is not a real, current opening.
// TBC with client — same status as PROPOSAL_FALLBACK_EMAIL (proposalConfig.ts).
const CAREERS_EMAIL = "careers@teravora.in";
const MAILTO = `mailto:${CAREERS_EMAIL}?subject=Open%20application%20%E2%80%94%20Teravora`;

export const CAREERS_BODY = String.raw`<div class="rails"><i></i></div>

<header class="shero" id="top">
  <div class="shero-bg"></div>
  <div class="shero-veil"></div>
  <div class="shero-flare"></div>
  <div class="wrap"><div class="shero-in">
    <span class="eyebrow reveal">Careers at Teravora</span>
    <h1><span class="hl-line">Do work you can stand behind.</span></h1>
    <p class="lede reveal">Teravora is an India ESG advisory built on a proven backbone. We hire practitioners who want their work to <span class="g">survive an auditor's questions</span> — not just fill a deck.</p>
    <div class="hero-cta reveal">
      <a class="btn btn-gold" href="${MAILTO}"><span>Send an open application</span><span class="arw">→</span></a>
      <a class="btn btn-ghost" href="#tracks"><span>See the disciplines</span></a>
    </div>
  </div></div>
  <a class="img-credit" href="https://creativecommons.org/licenses/by/2.0/" rel="license noopener" target="_blank">Photo: Dale Cruse · CC BY 2.0 · cropped</a>
  <div class="scrollcue" aria-hidden="true"><div class="wrap"><b>What the work offers</b></div></div>
</header>

<section class="sec" id="why">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="mono eyebrow">Why join</span>
      <h2>We are a young practice, so we will not promise what we cannot show.</h2>
      <p>What we can offer is the work itself — and for the right person, the work is the offer.</p>
    </div>
    <div class="vgrid">
      <div class="vcard reveal"><div class="k">THE WORK</div><h3>Built to be checked.</h3><p>Every number we produce carries its source, control and evidence path — built to survive reasonable assurance, the independent auditor-grade sign-off India's rules now demand. You learn to make work that holds up when it is tested, and that discipline stays with you for a career.</p></div>
      <div class="vcard reveal"><div class="k">THE STANDARDS</div><h3>Standards fluency, learned on live work.</h3><p>BRSR and BRSR-Core (the assured subset — 49 KPIs across 9 attributes), the GHG Protocol, IFRS S1/S2, IFC Performance Standards and the Equator Principles — practised on real engagements, not read about after the fact.</p></div>
      <div class="vcard reveal"><div class="k">THE STAGE</div><h3>Early enough to matter.</h3><p>Teravora is a new India practice on the backbone of our parent, Teravue. You get the scope and ownership of an early-stage team without starting from zero — the method, the standards fluency and the discipline are already in the building.</p></div>
      <div class="vcard reveal"><div class="k">THE LEADERSHIP</div><h3>Reviewed by practitioners, not decks.</h3><p>The practice is led by its founder — a Chartered Environmentalist and Chartered Chemical Engineer with CFA-ESG and GARP SCR credentials and more than 25 years across ESG governance, climate strategy and decarbonisation. The people who review your work do the work.</p></div>
    </div>
  </div>
</section>

<section class="sec prob" id="tracks">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="mono eyebrow">The disciplines</span>
      <h2>Three practice areas we hire in.</h2>
      <p>They mirror how we serve clients. Tell us which one fits you — or make the case for more than one.</p>
    </div>
    <div class="tracks">
      <div class="track reveal">
        <div class="track-h"><div class="track-g">◇</div><div class="track-t"><h3>BRSR &amp; Assurance Readiness</h3><div class="track-for">DISCLOSURE · ASSURANCE</div></div></div>
        <p class="track-p">Take listed companies from scattered data to a filed BRSR (Business Responsibility and Sustainability Report) that passes reasonable assurance: mapping data to the 49 BRSR-Core KPIs, closing gaps in plain language, and building the audit trail behind every number.</p>
        <p class="track-fit"><b>Fits:</b> audit, assurance, sustainability-reporting or ESG-compliance backgrounds — people who read a standard for what it requires, not what it suggests.</p>
      </div>
      <div class="track reveal">
        <div class="track-h"><div class="track-g">◆</div><div class="track-t"><h3>Carbon &amp; Climate</h3><div class="track-for">GHG · CLIMATE DISCLOSURE</div></div></div>
        <p class="track-p">Build greenhouse-gas inventories across Scope 1, 2 and 3 to the GHG Protocol, shape decarbonisation pathways a board can approve, and prepare climate disclosure aligned to TCFD and IFRS S2 — every figure traceable to its activity data.</p>
        <p class="track-fit"><b>Fits:</b> energy, engineering, carbon-accounting or climate-analytics backgrounds — comfortable defending a calculation line by line.</p>
      </div>
      <div class="track reveal">
        <div class="track-h"><div class="track-g">⬡</div><div class="track-t"><h3>ESG Due Diligence</h3><div class="track-for">TRANSACTIONS · IFC / EQUATOR</div></div></div>
        <p class="track-p">Assess environmental and social risk on live deals against the IFC Performance Standards and the Equator Principles, and report findings a deal team and a lender can both rely on — on a deal timeline, not an academic one.</p>
        <p class="track-fit"><b>Fits:</b> due-diligence, EHS, project-finance or E&amp;S-risk backgrounds — precise under time pressure.</p>
      </div>
    </div>
  </div>
</section>

<section class="sec" id="open-roles">
  <div class="wrap">
    <div class="sec-head reveal">
      <span class="mono eyebrow">Open roles</span>
      <h2>What's open right now.</h2>
    </div>
    <div class="roles reveal" data-roles="empty">
      <div class="roles-k">OPEN POSITIONS · UPDATED AS WE HIRE</div>
      <p class="roles-none">No open roles are listed right now.</p>
      <p class="roles-note">Real openings will be posted here as the practice grows — no ghost listings, no evergreen job ads. Until then, the open application below is the honest route in, and a practitioner reads every one.</p>
    </div>
    <ol class="steps reveal" aria-label="How applying works">
      <li><span class="st-n">01</span><b>Send it.</b> Which discipline fits, a CV or LinkedIn profile, and a few lines on why this work.</li>
      <li><span class="st-n">02</span><b>A practitioner reads it.</b> Not a screening tool. If there is a fit — now or on the horizon — we reply.</li>
      <li><span class="st-n">03</span><b>A conversation, not a gauntlet.</b> About the work, the standards you know, and what you want to build.</li>
    </ol>
  </div>
</section>

<section class="sec final" id="apply">
  <div class="wrap">
    <h2 class="reveal">Send an open application.</h2>
    <p class="reveal">Tell us which discipline fits, attach a CV or a LinkedIn profile, and add a few lines on why this work. That is all we need to start.</p>
    <div class="hero-cta reveal">
      <a class="btn btn-gold" href="${MAILTO}"><span>Send an open application</span><span class="arw">→</span></a>
      <a class="btn btn-ghost" href="/about"><span>Meet the practice</span></a>
    </div>
    <p class="apply-alt reveal">Or write to us directly: <a class="apply-mail" href="${MAILTO}">${CAREERS_EMAIL}</a></p>
  </div>
</section>`;
