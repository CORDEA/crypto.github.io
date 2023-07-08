import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["index.ts", "index.css"],
  outdir: "dist",
  bundle: true,
  minify: true,
  platform: "browser",
});
