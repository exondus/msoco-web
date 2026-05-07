/**
 * MEDIA REGISTRY — Cloudinary source of truth
 *
 * ALL_ASSETS is the single source of truth. The typed arrays below are derived
 * from it automatically — add images to ALL_ASSETS and they appear everywhere.
 *
 * ALL_ASSETS entry shape:
 *   link        — full Cloudinary URL (image or video)
 *   tag         — 'traditional wedding' | 'white wedding' | 'corporate' | 'portrait' | 'hero video'
 *   orientation — 'portrait' | 'landscape'  (omit for videos)
 *   alt         — descriptive alt text
 *   featured    — true marks for hero/highlight slots (optional)
 */

import type { CloudinaryAsset, CloudinaryVideo } from './cloudinary';

// ---------------------------------------------------------------------------
// RAW ASSET LIST — single source of truth
// ---------------------------------------------------------------------------
export const ALL_ASSETS = [
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778082465/DSC05408_mufd5z.jpg",
    tag: "traditional wedding",
    orientation: "landscape",
    alt: "Maidens and elders in traditional wedding attire",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778082458/DSC05647_cncfzj.jpg",
    tag: "traditional wedding",
    orientation: "landscape",
    alt: "Makoti and her maidens",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778082456/DSC05495_yzguou.jpg",
    tag: "traditional wedding",
    orientation: "portrait",
    alt: "Makoti performing her traditional ritual",
  },{
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083897/qwer_ckvzbg.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "The groom doting over his new wife",
    featured: true,
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083888/IMG_2422_jrxils.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "Couple making the moment unforgettable",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083885/sdfas_qm4znu.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "Makoti looking amazing",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083887/tuu_godony.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "Sbali looks ready for the big moment",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778082432/DSC05261_i8rzyi.jpg",
    tag: "traditional wedding",
    orientation: "portrait",
    alt: "Makoti looking glorious",
    featured: true,
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778082429/IMG_1786_ykgyxi.jpg",
    tag: "traditional wedding",
    orientation: "portrait",
    alt: "The happy couple",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778082427/IMG_1782_truu9e.jpg",
    tag: "traditional wedding",
    orientation: "portrait",
    alt: "The happy couple posing for the camera",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778082425/IMG_1794_ptgsqm.jpg",
    tag: "traditional wedding",
    orientation: "portrait",
    alt: "Makoti in her second traditional outfit",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778082424/DSC05684_twgdm5.jpg",
    tag: "traditional wedding",
    orientation: "portrait",
    alt: "Makoti and her family member",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778082422/DSC05383_lcmgzr.jpg",
    tag: "traditional wedding",
    orientation: "landscape",
    alt: "Makoti showing off her skills",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778082413/DSC05374_vy8mbt.jpg",
    tag: "traditional wedding",
    orientation: "portrait",
    alt: "Traditional dancer performing at the wedding",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778082413/IMG_1784_zw6e58.jpg",
    tag: "traditional wedding",
    orientation: "portrait",
    alt: "Sbali beaming with pride next to his new wife",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778082399/IMG_1796_rkquaj.jpg",
    tag: "traditional wedding",
    orientation: "portrait",
    alt: "The man of the hour",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778082396/IMG_1789_eorbv2.jpg",
    tag: "traditional wedding",
    orientation: "portrait",
    alt: "Couple posing for the camera",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778082387/IMG_1791_hzrmxd.jpg",
    tag: "traditional wedding",
    orientation: "portrait",
    alt: "Couple creating a lasting memory",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778082461/IMG_1798_ducz1x.jpg",
    tag: "traditional wedding",
    orientation: "portrait",
    alt: "Beautiful couple in traditional wedding attire",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083905/DSC04985_mlasqh.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "Couple cutting cake",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083898/IMG_2028_x3tszz.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "Couple posing on the white carper",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083882/IMG_2434_hveo7d.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "Makoti, savouring the moment",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083882/IMG_2364_s6l1cj.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "Couple ceasing the day with the pose of the day",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083877/IMG_2207_npbtye.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "Couple and the minister showing their legal papers",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083872/IMG_2157_wncikb.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "Makoti putting a ring on her man",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083868/IMG_0705_gtnios.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "The happy couple looking heavenly",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083863/IMG_1898_zpkbzw.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "Makoti putting on the final touches",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083861/IMG_0714_iubc22.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "Makoti and her maidens looking beautiful",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083860/IMG_1918_h566ic.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "Makoti in an amazing dress",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083850/DSC04526_eyy4h7.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "Sbali looking sharp",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083848/IMG_0689_cd0oka.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "Couple sealing it with a kiss",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083847/IMG_0639_abp0jg.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "Sbali drowning his wife's eyes",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083840/IMG_0362_je2ft0.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "Makoti, what a sight",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083839/DSC_0399_ztd0x3.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "Gorgeous couple stealing a moment",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083836/DSC_1413_rpxprz.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "Sbli, the man of the hour",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083836/DSC04691_sniuif.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "This wedding is lit ",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083836/DSC04439_edtgzj.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "Couple sealing their union with a kiss ",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083833/DSC04442_gyhmra.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "The groom showing off his wife's majestic dress",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083825/DSC_0457_a1r2pe.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "Sbali loooking dapper",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083815/DSC04420_stnag6.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "Couple ceasing the moment",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083814/DSC04391_fqhqbe.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "Brige and groom only has eyes for each other",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083812/DSC_0490_d1t37y.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "The groom and his crew",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083800/DSC_1377_wddrhq.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "Makoti looking amazing",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083804/DSC04295_dqofog.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "Couple in their 'I do moment!'",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083800/DSC_1407_gnkn5g.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "Sbali on his big day'",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083790/DSC_1379_rglmff.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "The magnetic couple",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083788/DSC_0393_is7cgc.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "The couple in their fairytale moment",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083778/DSC_1372_knhnst.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "Couple positing in a scerene setting",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083765/DSC_0446_r1fw2y.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "Makoti contemplating",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083758/DSC_0439_afd93p.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "Makoti raising her hand as the official wife",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083757/DSC_0462_hquzsw.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "The groom calling time on bacherlorhood",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083756/DSC_0499_i9naqd.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "Makoti and her maidens celebrating their moment",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083755/DSC_0417_b8hxre.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "Sbali, a shoulder to lean on",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083742/DSC_1395_gf8bcx.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "The groom can't help but drown his new wife's eyes",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083737/DSC_1174_f3vvkf.jpg",
    tag: "white wedding",
    orientation: "landscape",
    alt: "Sbali sealing the day with a kiss",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/image/upload/v1778083737/DSC_1366_piwu5r.jpg",
    tag: "white wedding",
    orientation: "portrait",
    alt: "Makoti with a statement pose",
  },
  {
    link: "https://res.cloudinary.com/dm6y75l3e/video/upload/v1778082355/C0062_3_ayc4xh.mp4",
    tag: "hero video",
    alt: "Hero video",
  }
] as const;

// ---------------------------------------------------------------------------
// Derives a Cloudinary public_id from a full Cloudinary URL
// e.g. https://res.cloudinary.com/abc/image/upload/v123/DSC05408_mufd5z.jpg
//   →  DSC05408_mufd5z
// ---------------------------------------------------------------------------
function publicIdFromUrl(url: string): string {
  const afterUpload = url.split('/upload/')[1] ?? url;
  const withoutVersion = afterUpload.replace(/^v\d+\//, '');
  return withoutVersion.replace(/\.[^.]+$/, '');
}

// ---------------------------------------------------------------------------
// WEDDINGS — Traditional (derived from ALL_ASSETS)
// ---------------------------------------------------------------------------
export const TRADITIONAL_WEDDING_IMAGES: CloudinaryAsset[] = ALL_ASSETS
  .filter((a): a is typeof a & { orientation: string } => a.tag === 'traditional wedding')
  .map((a, i) => ({
    id: `tw-${i + 1}`,
    publicId: publicIdFromUrl(a.link),
    alt: a.alt,
    orientation: a.orientation as 'portrait' | 'landscape',
    category: 'wedding' as const,
    weddingType: 'traditional' as const,
    featured: 'featured' in a ? a.featured : undefined,
  }));

// ---------------------------------------------------------------------------
// WEDDINGS — White / Western (derived from ALL_ASSETS)
// ---------------------------------------------------------------------------
export const WHITE_WEDDING_IMAGES: CloudinaryAsset[] = ALL_ASSETS
  .filter((a): a is typeof a & { orientation: string } => a.tag === 'white wedding')
  .map((a, i) => ({
    id: `ww-${i + 1}`,
    publicId: publicIdFromUrl(a.link),
    alt: a.alt,
    orientation: a.orientation as 'portrait' | 'landscape',
    category: 'wedding' as const,
    weddingType: 'white' as const,
    featured: 'featured' in a ? a.featured : undefined,
  }));

// ---------------------------------------------------------------------------
// CORPORATE
// ---------------------------------------------------------------------------
export const CORPORATE_IMAGES: CloudinaryAsset[] = [];

// ---------------------------------------------------------------------------
// PORTRAITS / HEADSHOTS
// ---------------------------------------------------------------------------
export const PORTRAIT_IMAGES: CloudinaryAsset[] = [];

// ---------------------------------------------------------------------------
// Combined views
// ---------------------------------------------------------------------------
export const ALL_WEDDING_IMAGES: CloudinaryAsset[] = [
  ...TRADITIONAL_WEDDING_IMAGES,
  ...WHITE_WEDDING_IMAGES,
];

export const ALL_IMAGES: CloudinaryAsset[] = [
  ...ALL_WEDDING_IMAGES,
  ...CORPORATE_IMAGES,
  ...PORTRAIT_IMAGES,
];

// ---------------------------------------------------------------------------
// VIDEOS
// ---------------------------------------------------------------------------
export const HERO_VIDEO: CloudinaryVideo = {
  id: 'hero-wedding',
  publicId: 'C0062_3_ayc4xh',
};
