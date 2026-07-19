import { useMemo, useState } from "react";
import { Section } from "../Section";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

function classify(bmi: number) {
  if (bmi < 18.5) return { label: "Underweight", tone: "text-blue-400" };
  if (bmi < 25) return { label: "Healthy", tone: "text-primary" };
  if (bmi < 30) return { label: "Overweight", tone: "text-orange-400" };
  return { label: "Obese", tone: "text-red-400" };
}

export function BmiCalculator() {
  const [height, setHeight] = useState("175");
  const [weight, setWeight] = useState("72");

  const result = useMemo(() => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w || h <= 0) return null;
    const bmi = w / (h * h);
    return { bmi, ...classify(bmi) };
  }, [height, weight]);

  return (
    <Section
      eyebrow="Tools"
      title="Quick BMI Check"
      subtitle="Enter your height and weight for an instant reading. Then let our coaches build a plan around it."
      centered
    >
      <div className="mx-auto grid max-w-4xl gap-6 rounded-3xl border border-border bg-card p-6 sm:p-10 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <Label htmlFor="height">Height (cm)</Label>
            <Input id="height" type="number" min={80} max={250} value={height} onChange={(e) => setHeight(e.target.value)} className="mt-2" />
          </div>
          <div>
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input id="weight" type="number" min={20} max={300} value={weight} onChange={(e) => setWeight(e.target.value)} className="mt-2" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl bg-background p-8 text-center">
          {result ? (
            <>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your BMI</div>
              <div className="mt-2 font-display text-6xl font-black text-gradient-primary">
                {result.bmi.toFixed(1)}
              </div>
              <div className={`mt-3 text-sm font-semibold ${result.tone}`}>{result.label}</div>
            </>
          ) : (
            <div className="text-sm text-muted-foreground">Enter valid numbers to calculate</div>
          )}
        </div>
      </div>
    </Section>
  );
}