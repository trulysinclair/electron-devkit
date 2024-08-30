import type { Config } from "tailwindcss";
import sharedConfig from "shared/config-tailwind";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  prefix: "ui-",
  presets: [sharedConfig],
};

export default config;
