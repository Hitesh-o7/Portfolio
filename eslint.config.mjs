import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// eslint-config-next@16 ships native flat configs; the old FlatCompat bridge crashes with it
// ("Converting circular structure to JSON"), and `next lint` no longer exists in Next 16.
const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
