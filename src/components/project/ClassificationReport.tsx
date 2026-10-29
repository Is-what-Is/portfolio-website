import { TableScroll } from "./TableScroll";

/** Precision, recall, F1-score and support, as in scikit-learn's report. */
type Scores = [precision: number, recall: number, f1: number, support: number];

/**
 * A scikit-learn classification report as an accessible table: one row per
 * class, then accuracy, macro average and weighted average.
 */
export function ClassificationReport({
  label,
  caption,
  classes,
  accuracy,
  macro,
  weighted,
}: {
  /** e.g. "Table 3" */
  label: string;
  caption: string;
  /** One entry per class: [row label, precision, recall, F1-score, support]. */
  classes: [string, ...Scores][];
  /** [accuracy, support] */
  accuracy: [number, number];
  macro: Scores;
  /** Omitted when the source report has no weighted average. */
  weighted?: Scores;
}) {
  const score = (value: number) => value.toFixed(2);
  const count = (value: number) => value.toLocaleString("en-GB");
  const row = (name: string, [precision, recall, f1, support]: Scores) => (
    <tr key={name}>
      <th scope="row">{name}</th>
      <td className="num">{score(precision)}</td>
      <td className="num">{score(recall)}</td>
      <td className="num">{score(f1)}</td>
      <td className="num">{count(support)}</td>
    </tr>
  );

  return (
    <TableScroll label={label} caption={caption}>
      <table>
        <thead>
          <tr>
            <th scope="col">Class</th>
            <th scope="col" className="num">Precision</th>
            <th scope="col" className="num">Recall</th>
            <th scope="col" className="num">F1-score</th>
            <th scope="col" className="num">Support</th>
          </tr>
        </thead>
        <tbody>
          {classes.map(([name, ...scores]) => row(name, scores))}
          <tr>
            <th scope="row">Accuracy</th>
            <td className="num">
              <span aria-hidden="true">—</span>
              <span className="sr-only">Not applicable</span>
            </td>
            <td className="num">
              <span aria-hidden="true">—</span>
              <span className="sr-only">Not applicable</span>
            </td>
            <td className="num">{score(accuracy[0])}</td>
            <td className="num">{count(accuracy[1])}</td>
          </tr>
          {row("Macro average", macro)}
          {weighted && row("Weighted average", weighted)}
        </tbody>
      </table>
    </TableScroll>
  );
}
