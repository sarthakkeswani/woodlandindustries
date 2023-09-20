import bluepvc from "../assets/blue-pvc.png";
import redpvc from "../assets/red-pvc.png";
import blackpvc from "../assets/black-pvc.png";
import transparentpvc1 from "../assets/pvc-transparent1.png";
import transparentpvc2 from "../assets/transparent-pvc-compound.png";
import transparentpvc3 from "../assets/pvc-transparent2.png";
import woodendrum1 from "../assets/wooden-drum1.png";
import woodendrum2 from "../assets/wooden-drum2.png";
import woodendrum3 from "../assets/wooden-drum3.png";
import woodenpallet1 from "../assets/wooden-pallet1.png";
import woodenpallet2 from "../assets/wooden-pallet2.png";
import woodenpallet3 from "../assets/wooden-pallet3.png";
import woodenbatten1 from "../assets/wooden-batten1.png";
import woodenbatten2 from "../assets/wooden-batten2.png";
import woodenbatten3 from "../assets/wooden-batten3.png";

export const products = [
  {
    id: 1,
    slug: "color",
    title: "Vibrant Visions: Premium Colored PVC Compounds",
    image: [bluepvc, blackpvc, redpvc],
    price: "60/Kg",
    featureDesc: [
      {
        feature: "Clarity and Brilliance",
        desc: "Glass-like appearance offering unparalleled visibility.",
      },
      {
        feature: "Durability",
        desc: "Long-lasting and resistant to wear and environmental factors.",
      },
      {
        feature: "Flexibility",
        desc: "Can be formulated to varying degrees of flexibility.",
      },
      {
        feature: "Chemical Resistance",
        desc: "Resistant to many chemicals, oils, and greases.",
      },
      {
        feature: "UV Stability",
        desc: "Can resist degradation from UV light.",
      },
    ],
  },

  {
    id: 2,
    slug: "transparent",
    title: "Crystal Clarity: Premium Transparent PVC Compounds",
    image: [transparentpvc1, transparentpvc2, transparentpvc3],
    price: "40/Kg",
    featureDesc: [
      {
        feature: "Clarity and Brilliance",
        desc: "Glass-like appearance offering unparalleled visibility.",
      },
      {
        feature: "Durability",
        desc: "Long-lasting and resistant to wear and environmental factors.",
      },
      {
        feature: "Flexibility",
        desc: "Can be formulated to varying degrees of flexibility.",
      },
      {
        feature: "Chemical Resistance",
        desc: "Resistant to many chemicals, oils, and greases.",
      },
      {
        feature: "UV Stability",
        desc: "Can resist degradation from UV light.",
      },
    ],
  },

  {
    id: 3,
    slug: "drums",
    title: "Wooden Drums: Craftsmanship Meets Utility",
    image: [woodendrum1, woodendrum2, woodendrum3],
    price: "650/Cubic Feet",
    featureDesc: [
      {
        feature: "Durability",
        desc: "Withstands time with inherent wood strength, ideal for heavy loads.",
      },
      {
        feature: "Eco-Friendly",
        desc: "A sustainable choice made from natural and renewable wood resources.",
      },
      {
        feature: "Versatility",
        desc: "Customizable in size and specs for various cable needs.",
      },
      {
        feature: "Natural Insulator",
        desc: "Provides insulation, reducing electrical interference.",
      },
    ],
  },

  {
    id: 4,
    slug: "pallets",
    title: "Wooden Pallets: The Backbone of Modern Logistics",
    image: [woodenpallet1, woodenpallet2, woodenpallet3],
    price: "700/Cubic Feet",
    featureDesc: [
      {
        feature: "Strength & Durability",
        desc: "Capable of bearing heavy loads, suitable for diverse products.",
      },
      {
        feature: "Sustainability",
        desc: "Made from eco-friendly, recyclable, and renewable wood.",
      },
      {
        feature: "Customizability",
        desc: "Tailored in various sizes and designs for transportation needs.",
      },
      {
        feature: "Repairability",
        desc: "Easily repaired, offering longer service life than plastics.",
      },
      {
        feature: "Types of Wood Used",
        desc: "Pine, Oak, Birch, Maple, each with distinct properties.",
      },
      {
        feature: "Applications",
        desc: "Used in retail, shipping, agriculture, and manufacturing.",
      },
      {
        feature: "Safety and Maintenance",
        desc: "Requires care from protrusions and moisture for longevity.",
      },
    ],
  },

  {
    id: 5,
    slug: "battens",
    title: "Wooden Battens: The Framework of Architectural Excellence",
    image: [woodenbatten1, woodenbatten2, woodenbatten3],
    price: "250/Cubic Feet",
    featureDesc: [
      {
        feature: "Structural Support",
        desc: "Provides framework in roofing, flooring, and wall cladding.",
      },
      {
        feature: "Aesthetic Appeal",
        desc: "Enhances spaces with decorative linear patterns and textures.",
      },
      {
        feature: "Adaptability",
        desc: "Customizable in length, thickness, and finish."},
      {
        feature: "Natural Insulation",
        desc: "Ideal for temperature and sound regulation.",
      },
      {
        feature: "Types of Wood Used",
        desc: "Pine, Oak, Cedar, Teak, each with unique properties.",
      },
      {
        feature: "Applications",
        desc: "Used in roofing, wall cladding, ceiling designs, and landscaping.",
      },
      {
        feature: "Maintenance and Care",
        desc: "Requires sealants and regular inspections.",
      },
    ],
  },
  
];
