import { Section } from "../Section";
import { TIMETABLE } from "../../data/site";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

export function Timetable() {
  return (
    <Section
      eyebrow="Schedule"
      title="Weekly class timetable"
      subtitle="From 6 AM HIIT to evening CrossFit — pick your slot and show up."
      centered
    >
      <div className="overflow-x-auto rounded-3xl border border-border bg-card">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="px-4 py-4 sm:px-6">Time</th>
              {DAYS.map((d) => (
                <th key={d} className="px-4 py-4 sm:px-6">{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TIMETABLE.map((row) => (
              <tr key={row.time} className="border-b border-border last:border-b-0">
                <td className="px-4 py-4 font-semibold sm:px-6">{row.time}</td>
                {DAYS.map((d) => (
                  <td key={d} className="px-4 py-4 sm:px-6 text-muted-foreground">
                    {row[d.toLowerCase() as "mon"]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
