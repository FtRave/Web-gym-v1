import { useMemo, useState } from "react";
import { Section } from "../Section";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

type HeightUnit = "cm" | "m" | "ft" | "in";
type WeightUnit = "kg" | "g" | "lb" | "st";

function classify(bmi: number) {
  if (bmi < 18.5) return { label: "Underweight", tone: "text-blue-400" };
  if (bmi < 25) return { label: "Healthy", tone: "text-primary" };
  if (bmi < 30) return { label: "Overweight", tone: "text-orange-400" };
  return { label: "Obese", tone: "text-red-400" };
}

function toMeters(value: number, unit: HeightUnit) {
  switch (unit) {
    case "cm": return value / 100;
    case "m": return value;
    case "ft": return value * 0.3048;
    case "in": return value * 0.0254;
  }
}

function toKilograms(value: number, unit: WeightUnit) {
  switch (unit) {
    case "kg": return value;
    case "g": return value / 1000;
    case "lb": return value * 0.45359237;
    case "st": return value * 6.35029318;
  }
}

export function BmiCalculator() {
  const [height, setHeight] = useState("175");
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("cm");
  const [weight, setWeight] = useState("72");
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");

  const result = useMemo(() => {
    const hRaw = parseFloat(height);
    const wRaw = parseFloat(weight);
    if (!hRaw || !wRaw || hRaw <= 0 || wRaw <= 0) return null;
    const h = toMeters(hRaw, heightUnit);
    const w = toKilograms(wRaw, weightUnit);
    if (h <= 0 || w <= 0) return null;
    const bmi = w / (h * h);
    if (!isFinite(bmi)) return null;
    return { bmi, ...classify(bmi) };
  }, [height, heightUnit, weight, weightUnit]);

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
            <Label htmlFor="height">Height</Label>
            <div className="mt-2 flex gap-2">
              <Input
                id="height"
                type="number"
                min={0}
                step="any"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="flex-1"
              />
              <Select value={heightUnit} onValueChange={(v) => setHeightUnit(v as HeightUnit)}>
                <SelectTrigger className="w-24" aria-label="Height unit">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cm">cm</SelectItem>
                  <SelectItem value="m">m</SelectItem>
                  <SelectItem value="ft">ft</SelectItem>
                  <SelectItem value="in">in</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="weight">Weight</Label>
            <div className="mt-2 flex gap-2">
              <Input
                id="weight"
                type="number"
                min={0}
                step="any"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="flex-1"
              />
              <Select value={weightUnit} onValueChange={(v) => setWeightUnit(v as WeightUnit)}>
                <SelectTrigger className="w-24" aria-label="Weight unit">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kg">kg</SelectItem>
                  <SelectItem value="g">g</SelectItem>
                  <SelectItem value="lb">lb</SelectItem>
                  <SelectItem value="st">st</SelectItem>
                </SelectContent>
              </Select>
            </div>
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
