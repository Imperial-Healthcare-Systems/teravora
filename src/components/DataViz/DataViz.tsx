import styles from "./DataViz.module.css";

export type DataRow = { label: string } & Record<string, number | string>;
export type DataSeries = { key: string; label: string };
export type DataVizType = "bar" | "line" | "ring" | "progress" | "sparkline";

export type DataVizProps = {
  data: DataRow[];
  series: DataSeries[];
  type: DataVizType;
  /** REQUIRED — describes the chart for role="img". */
  ariaLabel: string;
  animate?: boolean;
  /** default true — emits the visually-hidden data table. */
  dataTable?: boolean;
  showValues?: boolean;
  caption?: string;
};

const CAT_TOKENS = [
  "--trv-sys-color-dataviz-cat-1",
  "--trv-sys-color-dataviz-cat-2",
  "--trv-sys-color-dataviz-cat-3",
  "--trv-sys-color-dataviz-cat-4",
  "--trv-sys-color-dataviz-cat-5",
  "--trv-sys-color-dataviz-cat-6",
];
// Non-color encoding: dash patterns for lines, SVG hatch ids for bars.
const DASH = ["0", "6 4", "2 3", "8 3 2 3", "1 4", "10 4"];

function color(i: number): string {
  return `var(${CAT_TOKENS[i % CAT_TOKENS.length]})`;
}

const W = 640;
const H = 320;
const PAD = { top: 24, right: 24, bottom: 40, left: 48 };

function nums(data: DataRow[], key: string): number[] {
  return data.map((r) => Number(r[key]) || 0);
}

/** Visually-hidden data table — real SSR DOM, mirrors the chart (contract + gate). */
function DataTable({
  data,
  series,
  ariaLabel,
}: Pick<DataVizProps, "data" | "series" | "ariaLabel">) {
  return (
    <div className="trv-visually-hidden">
      <table>
        <caption>{ariaLabel}</caption>
        <thead>
          <tr>
            <th scope="col">Category</th>
            {series.map((s) => (
              <th key={s.key} scope="col">
                {s.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              {series.map((s) => (
                <td key={s.key}>{String(row[s.key] ?? "")}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Accessible SVG chart (DS §9). Every chart carries role="img" + aria-label AND a
 * visually-hidden <table>. Series are distinguished by pattern/dash + direct label,
 * NEVER hue alone. Final-state render IS the reduced-motion fallback.
 */
export function DataViz(props: DataVizProps) {
  const {
    data,
    series,
    type,
    ariaLabel,
    animate = false,
    dataTable = true,
    showValues = false,
    caption,
  } = props;

  const chartCls = animate
    ? `${styles.chart} ${styles.growIn}`
    : styles.chart;

  const allValues = series.flatMap((s) => nums(data, s.key));
  const max = Math.max(1, ...allValues);
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  return (
    <figure className={styles.figure}>
      <svg
        className={chartCls}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={ariaLabel}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {series.map((s, i) => (
            <pattern
              key={s.key}
              id={`trv-hatch-${i}`}
              patternUnits="userSpaceOnUse"
              width="6"
              height="6"
              patternTransform={`rotate(${45 + i * 20})`}
            >
              <rect width="6" height="6" fill={color(i)} opacity="0.85" />
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="6"
                stroke="var(--trv-sys-color-bg-canvas)"
                strokeWidth={i % 2 === 0 ? 1.5 : 0}
              />
            </pattern>
          ))}
        </defs>

        {type === "bar" || type === "progress"
          ? renderBars(data, series, { innerW, innerH, max, showValues })
          : null}
        {type === "line" || type === "sparkline"
          ? renderLines(data, series, { innerW, innerH, max })
          : null}
        {type === "ring" ? renderRing(data, series) : null}
      </svg>

      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
      {dataTable ? (
        <DataTable data={data} series={series} ariaLabel={ariaLabel} />
      ) : null}
    </figure>
  );
}

function renderBars(
  data: DataRow[],
  series: DataSeries[],
  o: { innerW: number; innerH: number; max: number; showValues: boolean },
) {
  const groups = data.length;
  const groupW = o.innerW / groups;
  const barW = (groupW * 0.7) / series.length;
  return (
    <g transform={`translate(${PAD.left},${PAD.top})`}>
      <line
        className={styles.axis}
        x1={0}
        y1={o.innerH}
        x2={o.innerW}
        y2={o.innerH}
      />
      {data.map((row, gi) => (
        <g key={row.label} transform={`translate(${gi * groupW},0)`}>
          {series.map((s, si) => {
            const v = Number(row[s.key]) || 0;
            const h = (v / o.max) * o.innerH;
            const x = groupW * 0.15 + si * barW;
            return (
              <g key={s.key}>
                <rect
                  className={styles.bar}
                  x={x}
                  y={o.innerH - h}
                  width={barW}
                  height={h}
                  fill={`url(#trv-hatch-${si})`}
                />
                {o.showValues ? (
                  <text
                    className={styles.valueLabel}
                    x={x + barW / 2}
                    y={o.innerH - h - 4}
                    textAnchor="middle"
                  >
                    {v}
                  </text>
                ) : null}
              </g>
            );
          })}
          <text
            className={styles.axisLabel}
            x={groupW / 2}
            y={o.innerH + 18}
            textAnchor="middle"
          >
            {row.label}
          </text>
        </g>
      ))}
    </g>
  );
}

function renderLines(
  data: DataRow[],
  series: DataSeries[],
  o: { innerW: number; innerH: number; max: number },
) {
  const step = data.length > 1 ? o.innerW / (data.length - 1) : o.innerW;
  return (
    <g transform={`translate(${PAD.left},${PAD.top})`}>
      <line
        className={styles.axis}
        x1={0}
        y1={o.innerH}
        x2={o.innerW}
        y2={o.innerH}
      />
      {series.map((s, si) => {
        const pts = data.map((row, i) => {
          const v = Number(row[s.key]) || 0;
          return [i * step, o.innerH - (v / o.max) * o.innerH] as const;
        });
        const d = pts
          .map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`)
          .join(" ");
        const last = pts[pts.length - 1];
        return (
          <g key={s.key}>
            <path
              className={styles.line}
              d={d}
              fill="none"
              stroke={color(si)}
              strokeWidth={2.5}
              strokeDasharray={DASH[si % DASH.length]}
              strokeLinejoin="round"
            />
            {last ? (
              <text
                className={styles.seriesLabel}
                x={last[0] - 4}
                y={last[1] - 6}
                textAnchor="end"
              >
                {s.label}
              </text>
            ) : null}
          </g>
        );
      })}
      {data.map((row, i) => (
        <text
          key={row.label}
          className={styles.axisLabel}
          x={i * step}
          y={o.innerH + 18}
          textAnchor="middle"
        >
          {row.label}
        </text>
      ))}
    </g>
  );
}

function renderRing(data: DataRow[], series: DataSeries[]) {
  const key = series[0]?.key;
  const total =
    data.reduce((sum, r) => sum + (Number(r[key]) || 0), 0) || 1;
  const cx = W / 2;
  const cy = H / 2;
  const r = 110;
  const circ = 2 * Math.PI * r;
  let offset = 0;
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="var(--trv-sys-color-bg-muted)"
        strokeWidth={28}
      />
      {data.map((row, i) => {
        const v = Number(row[key]) || 0;
        const frac = v / total;
        const len = frac * circ;
        const seg = (
          <circle
            key={row.label}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={color(i)}
            strokeWidth={28}
            strokeDasharray={`${len} ${circ - len}`}
            strokeDashoffset={-offset}
            transform={`rotate(-90 ${cx} ${cy})`}
          >
            <title>{`${row.label}: ${v}`}</title>
          </circle>
        );
        offset += len;
        return seg;
      })}
    </g>
  );
}
