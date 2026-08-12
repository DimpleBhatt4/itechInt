// ============================================================
// PRODUCT DATA
// ============================================================

// ------------------------------------------------------------
// 1. Continuous Inkjet (CIJ)
// ------------------------------------------------------------

export const cijProductInfo = {
  id: "cij",
  label: "Continuous Inkjet (CIJ)",

  description:
    "Our CIJ printers deliver reliable, high-speed, and non-contact printing on a wide variety of surfaces. Ideal for applications that require clear, precise coding on moving production lines.",

  usp: [
    "High speed printing up to 5 lines",
    "Print on metal, plastic, glass, and more",
    "Low maintenance with long service intervals",
    "IP55 stainless steel cabinet for harsh environments",
    "Wide range of inks for various applications",
  ],

  techSpec: [
    {
      id: 1,
      label: "Printing Technology",
      description: "Continuous Inkjet (CIJ)",
    },
    {
      id: 2,
      label: "Print Speed",
      description: "Up to 348 m/min",
    },
    {
      id: 3,
      label: "Print Height",
      description: "1 mm to 18 mm",
    },
    {
      id: 4,
      label: "Print Lines",
      description: "Up to 5 lines",
    },
    {
      id: 5,
      label: "Fonts",
      description: "Multiple fonts including multi-language support",
    },
    {
      id: 6,
      label: "Ink Types",
      description: "Dye based, pigmented, food grade, UV inks available",
    },
    {
      id: 7,
      label: "Connectivity",
      description: "USB, RS232, Ethernet",
    },
    {
      id: 8,
      label: "Operating Temperature",
      description: "5°C to 45°C",
    },
    {
      id: 9,
      label: "Protection Class",
      description: "IP55 Stainless Steel",
    },
    {
      id: 10,
      label: "Power Supply",
      description: "100-240V AC, 50/60Hz",
    },
  ],

  // Replace with your actual product images
  images: [
    "/assets/assets/img1.jpeg",
  ],

  // brochure: {
  //   title: "CIJ Printer Brochure",
  //   file: "/assets/brochures/cij-printer-brochure.pdf",
  // },

  videos: [
    {
      id: 1,
      title: "CIJ Printer Live Demonstration",
      url: "/assets/videos/cij-demo.mp4",
    },
  ],

  videoUrl: "/assets/videos/cij-demo.mp4",
};


// ------------------------------------------------------------
// 2. Laser Marking Systems
// ------------------------------------------------------------

export const laserProductInfo = {
  id: "laser-marking",
  label: "Laser Marking Systems",

  description:
    "Advanced laser marking systems designed for permanent, high-quality marking and coding on a wide range of industrial materials and products.",

  usp: [
    "Permanent and high-contrast marking",
    "High-speed non-contact operation",
    "Low consumable requirements",
    "Excellent marking precision",
    "Suitable for demanding industrial environments",
  ],

  techSpec: [
    {
      id: 1,
      label: "Technology",
      description: "Industrial Laser Marking",
    },
    {
      id: 2,
      label: "Laser Type",
      description: "Fiber / CO₂ / UV options",
    },
    {
      id: 3,
      label: "Marking Speed",
      description: "Up to 7,000 mm/s",
    },
    {
      id: 4,
      label: "Marking Area",
      description: "Model dependent",
    },
    {
      id: 5,
      label: "Materials",
      description: "Metal, plastic, glass and coated surfaces",
    },
    {
      id: 6,
      label: "Connectivity",
      description: "Ethernet / USB",
    },
    {
      id: 7,
      label: "Cooling",
      description: "Air cooled / integrated cooling",
    },
    {
      id: 8,
      label: "Protection",
      description: "Industrial enclosure options",
    },
  ],

  images: [
    "/assets/img1.jpeg",
  ],

  brochure: {
    title: "Laser Marking Systems Brochure",
    file: "/assets/brochures/laser-marking-brochure.pdf",
  },

  videos: [
    {
      id: 1,
      title: "Laser Marking Live Demonstration",
      url: "/assets/videos/laser-demo.mp4",
    },
    {
      id: 2,
      title: "Laser Installation",
      url: "/assets/videos/laser-installation.mp4",
    },
  ],

  videoUrl: "/assets/videos/laser-demo.mp4",
};


// ------------------------------------------------------------
// 3. Thermal Inkjet (TIJ)
// ------------------------------------------------------------

export const tijProductInfo = {
  id: "tij",
  label: "Thermal Inkjet (TIJ)",

  description:
    "Compact and reliable thermal inkjet printers designed for high-resolution coding and marking applications across a variety of industrial products and packaging.",

  usp: [
    "High-resolution printing up to 600 DPI",
    "Compact and easy-to-integrate design",
    "Fast-drying ink options",
    "Low maintenance operation",
    "Ideal for primary and secondary packaging",
  ],

  techSpec: [
    {
      id: 1,
      label: "Technology",
      description: "Thermal Inkjet (TIJ)",
    },
    {
      id: 2,
      label: "Resolution",
      description: "Up to 600 DPI",
    },
    {
      id: 3,
      label: "Print Height",
      description: "Up to 12.7 mm per cartridge",
    },
    {
      id: 4,
      label: "Print Speed",
      description: "Model dependent",
    },
    {
      id: 5,
      label: "Ink Options",
      description: "Water-based and solvent-based inks",
    },
    {
      id: 6,
      label: "Connectivity",
      description: "USB / Ethernet",
    },
    {
      id: 7,
      label: "Applications",
      description: "Cartons, labels, films and packaging",
    },
  ],

  images: [
    "/assets/products/tij/tij-main.jpg",
    "/assets/products/tij/tij-head.jpg",
    "/assets/products/tij/tij-application.jpg",
  ],

  brochure: {
    title: "TIJ Printer Brochure",
    file: "/assets/brochures/tij-brochure.pdf",
  },

  videos: [
    {
      id: 1,
      title: "TIJ Live Demonstration",
      url: "/assets/videos/tij-demo.mp4",
    },
  ],

  videoUrl: "/assets/videos/tij-demo.mp4",
};


// ------------------------------------------------------------
// 4. Thermal Transfer Overprinters (TTO)
// ------------------------------------------------------------

export const ttoProductInfo = {
  id: "tto",
  label: "Thermal Transfer Overprinters (TTO)",

  description:
    "Thermal transfer overprinting solutions for high-quality variable data, batch codes, expiry dates and graphics on flexible packaging materials.",

  usp: [
    "High-resolution printing",
    "Excellent print quality on flexible packaging",
    "Low ribbon consumption",
    "Fast and accurate coding",
    "Ideal for intermittent and continuous applications",
  ],

  techSpec: [
    {
      id: 1,
      label: "Technology",
      description: "Thermal Transfer Overprinting",
    },
    {
      id: 2,
      label: "Resolution",
      description: "300 DPI",
    },
    {
      id: 3,
      label: "Print Width",
      description: "Model dependent",
    },
    {
      id: 4,
      label: "Print Speed",
      description: "Up to 600 mm/s",
    },
    {
      id: 5,
      label: "Print Material",
      description: "Flexible packaging films and laminates",
    },
    {
      id: 6,
      label: "Ribbon",
      description: "Industrial thermal transfer ribbons",
    },
  ],

  images: [
    "/assets/products/tto/tto-main.jpg",
    "/assets/products/tto/tto-mounted.jpg",
    "/assets/products/tto/tto-application.jpg",
  ],

  brochure: {
    title: "TTO Brochure",
    file: "/assets/brochures/tto-brochure.pdf",
  },

  videos: [
    {
      id: 1,
      title: "TTO Live Demonstration",
      url: "/assets/videos/tto-demo.mp4",
    },
  ],

  videoUrl: "/assets/videos/tto-demo.mp4",
};


// ------------------------------------------------------------
// 5. Large Character Printers
// ------------------------------------------------------------

export const largeCharacterProductInfo = {
  id: "large-character",
  label: "Large Character Printers",

  description:
    "Robust large character printing systems designed for high-visibility coding on porous and non-porous industrial products.",

  usp: [
    "Large and highly visible characters",
    "Suitable for porous and non-porous surfaces",
    "Reliable industrial operation",
    "Long-distance printing capability",
    "Easy integration into production lines",
  ],

  techSpec: [
    {
      id: 1,
      label: "Technology",
      description: "Large Character Inkjet",
    },
    {
      id: 2,
      label: "Print Height",
      description: "Up to 100 mm",
    },
    {
      id: 3,
      label: "Print Lines",
      description: "Multiple line options",
    },
    {
      id: 4,
      label: "Applications",
      description: "Cartons, sacks, bags and construction materials",
    },
    {
      id: 5,
      label: "Ink",
      description: "Pigmented and non-pigmented options",
    },
    {
      id: 6,
      label: "Connectivity",
      description: "USB / Ethernet",
    },
  ],

  images: [
    "/assets/products/lcp/lcp-main.jpg",
    "/assets/products/lcp/lcp-application.jpg",
  ],

  brochure: {
    title: "Large Character Printer Brochure",
    file: "/assets/brochures/large-character-brochure.pdf",
  },

  videos: [
    {
      id: 1,
      title: "Large Character Printer Demonstration",
      url: "/assets/videos/lcp-demo.mp4",
    },
  ],

  videoUrl: "/assets/videos/lcp-demo.mp4",
};


// ------------------------------------------------------------
// 6. High-Resolution Printers
// ------------------------------------------------------------

export const highResolutionProductInfo = {
  id: "high-resolution",
  label: "High-Resolution Printers",

  description:
    "High-resolution industrial printing systems for sharp text, barcodes, logos, graphics and variable data on packaging and products.",

  usp: [
    "High-resolution printing",
    "Sharp text and barcode quality",
    "Supports logos and graphics",
    "Fast-drying ink options",
    "Easy integration with production lines",
  ],

  techSpec: [
    {
      id: 1,
      label: "Technology",
      description: "High-Resolution Inkjet",
    },
    {
      id: 2,
      label: "Resolution",
      description: "Up to 600 DPI",
    },
    {
      id: 3,
      label: "Print Height",
      description: "Model dependent",
    },
    {
      id: 4,
      label: "Printing",
      description: "Text, graphics, logos and barcodes",
    },
    {
      id: 5,
      label: "Ink Options",
      description: "Water-based and solvent-based",
    },
    {
      id: 6,
      label: "Connectivity",
      description: "USB / Ethernet",
    },
  ],

  images: [
    "/assets/products/high-resolution/high-resolution-main.jpg",
    "/assets/products/high-resolution/high-resolution-application.jpg",
  ],

  brochure: {
    title: "High-Resolution Printer Brochure",
    file: "/assets/brochures/high-resolution-brochure.pdf",
  },

  videos: [
    {
      id: 1,
      title: "High-Resolution Printing Demo",
      url: "/assets/videos/high-resolution-demo.mp4",
    },
  ],

  videoUrl: "/assets/videos/high-resolution-demo.mp4",
};


// ------------------------------------------------------------
// 7. Label Printing & Applicators
// ------------------------------------------------------------

export const labelProductInfo = {
  id: "label-printing",
  label: "Label Printing & Applicators",

  description:
    "Integrated label printing and application systems for accurate, automated and high-speed product identification and traceability.",

  usp: [
    "Accurate label placement",
    "High-speed automated application",
    "Supports variable data printing",
    "Reduced manual intervention",
    "Easy integration with production lines",
  ],

  techSpec: [
    {
      id: 1,
      label: "Technology",
      description: "Print & Apply Labeling",
    },
    {
      id: 2,
      label: "Label Type",
      description: "Self-adhesive labels",
    },
    {
      id: 3,
      label: "Application",
      description: "Top, side and front application",
    },
    {
      id: 4,
      label: "Printing",
      description: "Text, barcode, QR code and graphics",
    },
    {
      id: 5,
      label: "Connectivity",
      description: "Ethernet / USB",
    },
  ],

  images: [
    "/assets/products/labels/label-main.jpg",
    "/assets/products/labels/label-application.jpg",
  ],

  brochure: {
    title: "Label Printing & Applicator Brochure",
    file: "/assets/brochures/label-printing-brochure.pdf",
  },

  videos: [
    {
      id: 1,
      title: "Label Applicator Demonstration",
      url: "/assets/videos/label-demo.mp4",
    },
  ],

  videoUrl: "/assets/videos/label-demo.mp4",
};


// ------------------------------------------------------------
// 8. Vision Inspection Systems
// ------------------------------------------------------------

export const visionProductInfo = {
  id: "vision-inspection",
  label: "Vision Inspection Systems",

  description:
    "Automated vision inspection systems designed to verify product quality, print quality, labels, codes and packaging integrity.",

  usp: [
    "Automated quality inspection",
    "High-speed camera inspection",
    "Code and label verification",
    "Defect detection",
    "Real-time production monitoring",
  ],

  techSpec: [
    {
      id: 1,
      label: "Technology",
      description: "Machine Vision Inspection",
    },
    {
      id: 2,
      label: "Inspection",
      description: "Print, label, product and packaging inspection",
    },
    {
      id: 3,
      label: "Camera",
      description: "Industrial high-speed cameras",
    },
    {
      id: 4,
      label: "Detection",
      description: "OCR, OCV, barcode, QR and defect detection",
    },
    {
      id: 5,
      label: "Connectivity",
      description: "Ethernet / Industrial interfaces",
    },
  ],

  images: [
    "/assets/products/vision/vision-main.jpg",
    "/assets/products/vision/vision-camera.jpg",
    "/assets/products/vision/vision-application.jpg",
  ],

  brochure: {
    title: "Vision Inspection Brochure",
    file: "/assets/brochures/vision-inspection-brochure.pdf",
  },

  videos: [
    {
      id: 1,
      title: "Vision Inspection Demonstration",
      url: "/assets/videos/vision-demo.mp4",
    },
  ],

  videoUrl: "/assets/videos/vision-demo.mp4",
};


// ------------------------------------------------------------
// 9. Checkweighers
// ------------------------------------------------------------

export const checkweigherProductInfo = {
  id: "checkweighers",
  label: "Checkweighers",

  description:
    "High-speed dynamic checkweighing systems for accurate weight verification and quality control across automated production lines.",

  usp: [
    "Accurate in-line weighing",
    "High-speed product inspection",
    "Automatic reject system",
    "Production data monitoring",
    "Suitable for multiple industries",
  ],

  techSpec: [
    {
      id: 1,
      label: "Technology",
      description: "Dynamic Checkweighing",
    },
    {
      id: 2,
      label: "Accuracy",
      description: "Model and application dependent",
    },
    {
      id: 3,
      label: "Speed",
      description: "High-speed continuous operation",
    },
    {
      id: 4,
      label: "Reject",
      description: "Automatic product rejection",
    },
    {
      id: 5,
      label: "Display",
      description: "Industrial touchscreen interface",
    },
  ],

  images: [
    "/assets/products/checkweigher/checkweigher-main.jpg",
    "/assets/products/checkweigher/checkweigher-line.jpg",
  ],

  brochure: {
    title: "Checkweigher Brochure",
    file: "/assets/brochures/checkweigher-brochure.pdf",
  },

  videos: [
    {
      id: 1,
      title: "Checkweigher Demonstration",
      url: "/assets/videos/checkweigher-demo.mp4",
    },
  ],

  videoUrl: "/assets/videos/checkweigher-demo.mp4",
};


// ------------------------------------------------------------
// 10. Metal Detectors
// ------------------------------------------------------------

export const metalDetectorProductInfo = {
  id: "metal-detectors",
  label: "Metal Detectors",

  description:
    "Industrial metal detection systems designed to identify and reject metallic contaminants in food, pharmaceutical and manufacturing processes.",

  usp: [
    "High sensitivity metal detection",
    "Reliable contaminant rejection",
    "Stainless steel construction",
    "Easy cleaning and maintenance",
    "Suitable for food and industrial applications",
  ],

  techSpec: [
    {
      id: 1,
      label: "Technology",
      description: "Industrial Metal Detection",
    },
    {
      id: 2,
      label: "Detection",
      description: "Ferrous, non-ferrous and stainless steel",
    },
    {
      id: 3,
      label: "Construction",
      description: "Industrial stainless steel",
    },
    {
      id: 4,
      label: "Interface",
      description: "Industrial touchscreen",
    },
    {
      id: 5,
      label: "Reject System",
      description: "Automatic reject options",
    },
  ],

  images: [
    "/assets/products/metal-detector/metal-detector-main.jpg",
    "/assets/products/metal-detector/metal-detector-line.jpg",
  ],

  brochure: {
    title: "Metal Detector Brochure",
    file: "/assets/brochures/metal-detector-brochure.pdf",
  },

  videos: [
    {
      id: 1,
      title: "Metal Detection Demonstration",
      url: "/assets/videos/metal-detector-demo.mp4",
    },
  ],

  videoUrl: "/assets/videos/metal-detector-demo.mp4",
};


// ------------------------------------------------------------
// 11. Packaging Automation
// ------------------------------------------------------------

export const packagingProductInfo = {
  id: "packaging-automation",
  label: "Packaging Automation",

  description:
    "Integrated packaging automation solutions designed to improve production efficiency, consistency and overall line performance.",

  usp: [
    "Complete packaging line automation",
    "Improved production efficiency",
    "Reduced manual intervention",
    "Flexible line integration",
    "Reliable industrial operation",
  ],

  techSpec: [
    {
      id: 1,
      label: "Technology",
      description: "Packaging Automation",
    },
    {
      id: 2,
      label: "Applications",
      description: "Filling, sealing, labeling and coding",
    },
    {
      id: 3,
      label: "Integration",
      description: "Production line integration",
    },
    {
      id: 4,
      label: "Control",
      description: "PLC and HMI based control",
    },
    {
      id: 5,
      label: "Automation",
      description: "Fully and semi-automatic options",
    },
  ],

  images: [
    "/assets/products/packaging/packaging-main.jpg",
    "/assets/products/packaging/packaging-line.jpg",
  ],

  brochure: {
    title: "Packaging Automation Brochure",
    file: "/assets/brochures/packaging-automation-brochure.pdf",
  },

  videos: [
    {
      id: 1,
      title: "Packaging Automation Demo",
      url: "/assets/videos/packaging-demo.mp4",
    },
  ],

  videoUrl: "/assets/videos/packaging-demo.mp4",
};


// ------------------------------------------------------------
// 12. Track & Trace Solutions
// ------------------------------------------------------------

export const trackTraceProductInfo = {
  id: "track-trace",
  label: "Track & Trace Solutions",

  description:
    "End-to-end track and trace solutions that enable manufacturers to identify, monitor and trace products throughout the supply chain.",

  usp: [
    "End-to-end product traceability",
    "Barcode and QR code support",
    "Serialization capabilities",
    "Real-time production data",
    "Improved supply chain visibility",
  ],

  techSpec: [
    {
      id: 1,
      label: "Technology",
      description: "Track & Trace / Serialization",
    },
    {
      id: 2,
      label: "Codes",
      description: "Barcode, QR and DataMatrix",
    },
    {
      id: 3,
      label: "Traceability",
      description: "Product and batch level tracking",
    },
    {
      id: 4,
      label: "Connectivity",
      description: "Ethernet / Industrial networks",
    },
    {
      id: 5,
      label: "Data",
      description: "Production and traceability data management",
    },
  ],

  images: [
    "/assets/products/track-trace/track-trace-main.jpg",
    "/assets/products/track-trace/track-trace-line.jpg",
  ],

  brochure: {
    title: "Track & Trace Brochure",
    file: "/assets/brochures/track-trace-brochure.pdf",
  },

  videos: [
    {
      id: 1,
      title: "Track & Trace Solution Demo",
      url: "/assets/videos/track-trace-demo.mp4",
    },
  ],

  videoUrl: "/assets/videos/track-trace-demo.mp4",
};


// ------------------------------------------------------------
// 13. Industrial Consumables
// ------------------------------------------------------------

export const consumablesProductInfo = {
  id: "industrial-consumables",
  label: "Industrial Consumables",

  description:
    "A complete range of genuine industrial consumables including inks, make-up fluids, solvents and ribbons to maintain reliable printer performance.",

  usp: [
    "Genuine and compatible consumables",
    "Consistent print quality",
    "Wide range of ink formulations",
    "Fast availability of commonly used consumables",
    "Designed for reliable printer performance",
  ],

  techSpec: [
    {
      id: 1,
      label: "Consumables",
      description: "Ink, make-up, solvents and ribbons",
    },
    {
      id: 2,
      label: "Ink Types",
      description: "Dye-based, pigmented, food-grade and specialty inks",
    },
    {
      id: 3,
      label: "Applications",
      description: "CIJ, TIJ, TTO and other coding systems",
    },
    {
      id: 4,
      label: "Ribbon Types",
      description: "Thermal transfer ribbons",
    },
    {
      id: 5,
      label: "Packaging",
      description: "Application-specific packaging options",
    },
  ],

  images: [
    "/assets/products/consumables/consumables-main.jpg",
    "/assets/products/consumables/inks.jpg",
    "/assets/products/consumables/ribbons.jpg",
  ],

  brochure: {
    title: "Industrial Consumables Brochure",
    file: "/assets/brochures/consumables-brochure.pdf",
  },

  videos: [
    {
      id: 1,
      title: "Industrial Consumables Overview",
      url: "/assets/videos/consumables-demo.mp4",
    },
  ],

  videoUrl: "/assets/videos/consumables-demo.mp4",
};
