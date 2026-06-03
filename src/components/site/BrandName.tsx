/** Logo palette: orange (left), teal (top), blue (right), gold (chart bars) */
const BRAND_ORANGE = "#F97316";
const BRAND_TEAL = "#14B8A6";
const BRAND_BLUE = "#3B82F6";

type BrandNameProps = {
  className?: string;
};

export function BrandName({ className = "" }: BrandNameProps) {
  return (
    <span className={`inline-flex items-baseline font-semibold tracking-tight ${className}`}>
      <span style={{ color: BRAND_ORANGE }}>fix</span>
      <span style={{ color: BRAND_TEAL }}>cloud</span>
      <span style={{ color: BRAND_BLUE }}>cost</span>
    </span>
  );
}

export const BRAND_ALT = "fixcloudcost";
