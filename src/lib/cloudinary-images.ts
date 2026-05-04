export type MasonryImage = {
  id: string;
  src: string;
  alt: string;
  height: number;
};

export type GalleryImage = {
  id: string;
  title: string;
  sourceUrl: string;
  altText: string;
  width: number;
  height: number;
};

export const MASONRY_IMAGES: MasonryImage[] = [
  { id: '1', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05685.jpg', alt: 'Wedding ceremony', height: 400 },
  { id: '2', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05410.jpg', alt: 'Wedding details', height: 500 },
  { id: '3', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05290.jpg', alt: 'Reception details', height: 450 },
  { id: '4', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05272.jpg', alt: 'Celebration', height: 420 },
  { id: '5', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0451.jpg', alt: 'Intimate moment', height: 480 },
  { id: '6', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0446.jpg', alt: 'Wedding portrait', height: 460 },
  { id: '7', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0428.jpg', alt: 'Guest interactions', height: 440 },
  { id: '8', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0423.jpg', alt: 'Bride details', height: 490 },
  { id: '9', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0391.jpg', alt: 'Wedding portrait', height: 470 },
  { id: '10', src: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0388.jpg', alt: 'Candid moment', height: 430 },
  { id: '11', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5783-scaled.jpg', alt: 'Portrait', height: 510 },
  { id: '12', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5690-scaled.jpg', alt: 'Portrait', height: 450 },
  { id: '13', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5672-scaled.jpg', alt: 'Portrait', height: 480 },
  { id: '14', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5669-scaled.jpg', alt: 'Portrait', height: 470 },
  { id: '15', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5653-scaled.jpg', alt: 'Portrait', height: 460 },
  { id: '16', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_5650-scaled.jpg', alt: 'Portrait', height: 490 },
  { id: '17', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_1796-scaled.jpg', alt: 'Portrait', height: 440 },
  { id: '18', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_1800-scaled.jpg', alt: 'Portrait', height: 475 },
  { id: '19', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_1794-scaled.jpg', alt: 'Portrait', height: 500 },
  { id: '20', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_1791-scaled.jpg', alt: 'Portrait', height: 420 },
  { id: '21', src: 'https://www.msocorockers.co.za/wp-content/uploads/2025/11/IMG_1790-scaled.jpg', alt: 'Portrait', height: 485 },
];

export const WEDDING_GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', title: 'Ceremony Moment', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05685.jpg', altText: 'Wedding ceremony moment', width: 917, height: 1500 },
  { id: '2', title: 'Bride & Groom', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05438.jpg', altText: 'Bride and groom portrait', width: 917, height: 1500 },
  { id: '3', title: 'Wedding Details', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05410.jpg', altText: 'Wedding detail shot', width: 917, height: 1500 },
  { id: '4', title: 'Ceremony Proceedings', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05378.jpg', altText: 'Ceremony in progress', width: 917, height: 1500 },
  { id: '5', title: 'Guest Moments', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05321.jpg', altText: 'Guests enjoying ceremony', width: 917, height: 1500 },
  { id: '6', title: 'Reception Details', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05290.jpg', altText: 'Reception setup', width: 917, height: 1500 },
  { id: '7', title: 'Celebration', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC05272.jpg', altText: 'Celebration moment', width: 917, height: 1500 },
  { id: '8', title: 'Intimate Moment', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0451.jpg', altText: 'Intimate moment', width: 917, height: 1500 },
  { id: '9', title: 'Wedding Portrait', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0446.jpg', altText: 'Wedding portrait', width: 917, height: 1500 },
  { id: '10', title: 'Guest Interactions', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0428.jpg', altText: 'Guests interacting', width: 917, height: 1500 },
  { id: '11', title: 'Bride Details', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC_0423.jpg', altText: 'Bride detail shot', width: 917, height: 1500 },
  { id: '12', title: 'Ceremony Highlight', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/4.jpg', altText: 'Ceremony highlight', width: 917, height: 1500 },
];

export const CORPORATE_GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', title: 'Corporate Event Setup', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02488.jpg', altText: 'Professional staging and lighting', width: 917, height: 1500 },
  { id: '2', title: 'Broadcast Production', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02474.jpg', altText: 'Multi-camera broadcast setup', width: 917, height: 1500 },
  { id: '3', title: 'LED Video Wall', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02469.jpg', altText: 'LED display technology', width: 917, height: 1500 },
  { id: '4', title: 'Executive Headshots', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02464.jpg', altText: 'Professional corporate portraits', width: 917, height: 1500 },
  { id: '5', title: 'Audio System Configuration', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02438.jpg', altText: 'Line array audio setup', width: 917, height: 1500 },
  { id: '6', title: 'Brand Activation', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02413.jpg', altText: 'Interactive brand experience', width: 917, height: 1500 },
  { id: '7', title: 'Live Event Coverage', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02373.jpg', altText: 'Event documentation', width: 917, height: 1500 },
  { id: '8', title: 'Lighting Rig Configuration', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02369.jpg', altText: 'Intelligent lighting design', width: 917, height: 1500 },
  { id: '9', title: 'Product Photography', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02356.jpg', altText: 'Professional product showcase', width: 917, height: 1500 },
  { id: '10', title: 'Conference Setup', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02351.jpg', altText: 'Professional conference space', width: 917, height: 1500 },
  { id: '11', title: 'Stage Production', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02340.jpg', altText: 'Full stage setup and design', width: 917, height: 1500 },
  { id: '12', title: 'Photo Booth Integration', sourceUrl: 'https://www.msocorockers.co.za/wp-content/uploads/2026/02/DSC02323.jpg', altText: 'Interactive photo booth experience', width: 917, height: 1500 },
];
