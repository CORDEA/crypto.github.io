import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["index.ts"],
  outdir: "dist",
  bundle: true,
  minify: true,
  platform: "browser",
});
