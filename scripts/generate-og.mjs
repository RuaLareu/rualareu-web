import sharp from "sharp";
import path from "node:path";

const SRC_LOGO = "public/images/rua-lareu-logo-clasico.png";
const OUT = "src/app/opengraph-image.png";
const W = 1200;
const H = 630;
const LOGO_W = 540;
const BG = { r: 0x31, g: 0x4a, b: 0x43, alpha: 1 };

const logo = await sharp(SRC_LOGO)
  .resize({ width: LOGO_W, height: LOGO_W, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

await sharp({
  create: { width: W, height: H, channels: 4, background: BG },
})
  .composite([
    {
      input: logo,
      left: Math.round((W - LOGO_W) / 2),
      top: Math.round((H - LOGO_W) / 2),
    },
  ])
  .png()
  .toFile(OUT);

console.log(`Generated: ${path.resolve(OUT)}  (${W}x${H})`);
