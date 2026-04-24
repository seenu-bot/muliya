// Collections data structure with products
// Each collection has: id, name, slug, banner image, description, and products array
// Each product has: id (MJ:number format), name, image, price, and optional fields

export interface Product {
  id: string;           // Format: "MJ:001", "MJ:002", etc.
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  description?: string;
  metal?: string;
  weight?: string;
  category?: string;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  bannerImage: string;
  thumbnailImage: string;
  description: string;
  products: Product[];
}

export const collections: Collection[] = [
  {
    id: "col-001",
    name: "Mahathi",
    slug: "mahathi",
    bannerImage: "/images/mahathi.png",
    thumbnailImage: "/images/Mahathi - s.png",
    description: "Antique collection inspired by royal heritage. Timeless designs crafted for the modern queen.",
    products: [
      {
        id: "MJ:001",
        name: "Mahathi Antique Necklace",
        image: "/images/mahathi.png",
        price: 245000,
        originalPrice: 275000,
        metal: "22K Gold",
        weight: "45g",
        description: "Intricate antique necklace with traditional temple design"
      },
      {
        id: "MJ:002",
        name: "Mahathi Heritage Earrings",
        image: "/images/earrings.png",
        price: 85000,
        metal: "22K Gold",
        weight: "18g",
        description: "Matching heritage jhumkas with pearl drops"
      },
      {
        id: "MJ:003",
        name: "Mahathi Bridal Set",
        image: "/images/bangles.png",
        price: 485000,
        originalPrice: 525000,
        metal: "22K Gold",
        weight: "95g",
        description: "Complete bridal set with necklace, earrings, and maang tikka"
      },
      {
        id: "MJ:004",
        name: "Mahathi Temple Pendant",
        image: "/images/shiny-gemstone-necklace-reflects-elegance-glamour-generated-by-ai.jpg",
        price: 65000,
        metal: "22K Gold",
        weight: "12g",
        description: "Sacred temple motif pendant with chain"
      },
      {
        id: "MJ:005",
        name: "Mahathi Antique Bangles",
        image: "/images/bangles.png",
        price: 125000,
        metal: "22K Gold",
        weight: "35g",
        description: "Set of 4 antique finish bangles"
      },
      {
        id: "MJ:006",
        name: "Mahathi Royal Ring",
        image: "/images/ringwithperson.png",
        price: 45000,
        metal: "22K Gold",
        weight: "8g",
        description: "Statement ring with antique finish"
      }
    ]
  },
  {
    id: "col-002",
    name: "Amuliya",
    slug: "amuliya",
    bannerImage: "/images/amuliya.png",
    thumbnailImage: "/images/Amuliya-s.png",
    description: "Precious moments, precious jewels. Contemporary designs for everyday elegance.",
    products: [
      {
        id: "MJ:007",
        name: "Amuliya Diamond Necklace",
        image: "/images/amuliya.png",
        price: 185000,
        metal: "18K Gold with Diamonds",
        weight: "28g",
        description: "Contemporary diamond necklace for modern elegance"
      },
      {
        id: "MJ:008",
        name: "Amuliya Stud Earrings",
        image: "/images/earrings.png",
        price: 55000,
        metal: "18K Gold with Diamonds",
        weight: "6g",
        description: "Classic diamond studs with modern setting"
      },
      {
        id: "MJ:009",
        name: "Amuliya Pendant Set",
        image: "/images/luxury-jewellery-display.jpg",
        price: 95000,
        metal: "18K Gold with Diamonds",
        weight: "15g",
        description: "Matching pendant and earring set"
      },
      {
        id: "MJ:010",
        name: "Amuliya Bracelet",
        image: "/images/bracelet_files/bracelet-1.png",
        price: 75000,
        metal: "18K Gold with Diamonds",
        weight: "12g",
        description: "Delicate tennis bracelet with diamond accents"
      },
      {
        id: "MJ:011",
        name: "Amuliya Cocktail Ring",
        image: "/images/ringwithperson.png",
        price: 42000,
        metal: "18K Gold with Diamonds",
        weight: "7g",
        description: "Statement cocktail ring with solitaire diamond"
      },
      {
        id: "MJ:012",
        name: "Amuliya Pearl Earrings",
        image: "/images/earrings-1.jpeg",
        price: 35000,
        metal: "18K Gold",
        weight: "8g",
        description: "Elegant pearl drop earrings with diamond tops"
      }
    ]
  },
  {
    id: "col-003",
    name: "Indian Bridal",
    slug: "indian-bridal",
    bannerImage: "/images/mangalsutra.png",
    thumbnailImage: "/images/Indian-bridal-s.png",
    description: "Make your special day unforgettable. Exquisite bridal jewellery for the Indian bride.",
    products: [
      {
        id: "MJ:013",
        name: "Bridal Choker Set",
        image: "/images/mangalsutra.png",
        price: 385000,
        originalPrice: 425000,
        metal: "22K Gold with Polki",
        weight: "75g",
        description: "Royal choker set with matching earrings and maang tikka"
      },
      {
        id: "MJ:014",
        name: "Bridal Haaram",
        image: "/images/shiny-gemstone-necklace-reflects-elegance-glamour-generated-by-ai.jpg",
        price: 295000,
        metal: "22K Gold with Polki",
        weight: "58g",
        description: "Long bridal haaram with intricate nakshi work"
      },
      {
        id: "MJ:015",
        name: "Bridal Bangles Set",
        image: "/images/bangles.png",
        price: 165000,
        metal: "22K Gold",
        weight: "42g",
        description: "Set of 8 bridal bangles with traditional designs"
      },
      {
        id: "MJ:016",
        name: "Bridal Kamarbandh",
        image: "/images/young-model-demonstrating-expensive-jewelry.jpg",
        price: 125000,
        metal: "22K Gold",
        weight: "32g",
        description: "Traditional waist belt with pendant drops"
      },
      {
        id: "MJ:017",
        name: "Bridal Nose Ring",
        image: "/images/closeup-shot-female-wearing-beautiful-silver-necklace-with-diamond-pendant.jpg",
        price: 35000,
        metal: "22K Gold with Pearls",
        weight: "10g",
        description: "Traditional bridal nath with pearl chain"
      },
      {
        id: "MJ:018",
        name: "Bridal Anklets",
        image: "/images/piggybank.png",
        price: 55000,
        metal: "22K Gold",
        weight: "18g",
        description: "Pair of heavy bridal payals with ghungroo"
      }
    ]
  },
  {
    id: "col-004",
    name: "Indian Ethnic",
    slug: "indian-ethnic",
    bannerImage: "/images/silveriya.png",
    thumbnailImage: "/images/Indian-Ethnic-s.png",
    description: "Celebrate tradition with our ethnic collection. Crafted for festivals and special occasions.",
    products: [
      {
        id: "MJ:019",
        name: "Ethnic Temple Necklace",
        image: "/images/nithya.png",
        price: 185000,
        metal: "22K Gold",
        weight: "38g",
        description: "Traditional temple design necklace with Lakshmi motif"
      },
      {
        id: "MJ:020",
        name: "Ethnic Jhumka Earrings",
        image: "/images/earrings.png",
        price: 65000,
        metal: "22K Gold",
        weight: "16g",
        description: "Classic temple jhumkas with pearl drops"
      },
      {
        id: "MJ:021",
        name: "Ethnic Vaddanam",
        image: "/images/young-model-demonstrating-expensive-jewelry.jpg",
        price: 225000,
        metal: "22K Gold",
        weight: "48g",
        description: "Traditional waist belt for silk sarees"
      },
      {
        id: "MJ:022",
        name: "Ethnic Armlet",
        image: "/images/close-up-smiling-pretty-lady-posing-while-demonstrating-designer-jewelry-beauty-concept.jpg",
        price: 45000,
        metal: "22K Gold",
        weight: "12g",
        description: "Bajuband with intricate ethnic design"
      },
      {
        id: "MJ:023",
        name: "Ethnic Hair Accessories",
        image: "/images/closeup-shot-female-wearing-beautiful-silver-necklace-with-diamond-pendant.jpg",
        price: 35000,
        metal: "22K Gold",
        weight: "8g",
        description: "Set of 3 traditional hair pins"
      },
      {
        id: "MJ:024",
        name: "Ethnic Toe Rings",
        image: "/images/ringwithperson.png",
        price: 15000,
        metal: "22K Gold",
        weight: "4g",
        description: "Pair of traditional toe rings"
      }
    ]
  },
  {
    id: "col-005",
    name: "Ruby and Emerald",
    slug: "ruby-and-emerald",
    bannerImage: "/images/Ruby-and-Emerald-s.png",
    thumbnailImage: "/images/Ruby-and-Emerald-s.png",
    description: "Royal jewels with precious gemstones. Timeless elegance in every piece.",
    products: [
      {
        id: "MJ:025",
        name: "Ruby Emerald Necklace",
        image: "/images/pournik.png",
        price: 385000,
        originalPrice: 425000,
        metal: "22K Gold with Ruby & Emerald",
        weight: "55g",
        description: "Mango mala with ruby and emerald stones"
      },
      {
        id: "MJ:026",
        name: "Ruby Emerald Earrings",
        image: "/images/earrings.png",
        price: 125000,
        metal: "22K Gold with Ruby & Emerald",
        weight: "22g",
        description: "Chandbali earrings with precious gemstones"
      },
      {
        id: "MJ:027",
        name: "Emerald Pendant Set",
        image: "/images/luxury-jewellery-display.jpg",
        price: 165000,
        metal: "22K Gold with Emerald",
        weight: "28g",
        description: "Pendant set with Colombian emeralds"
      },
      {
        id: "MJ:028",
        name: "Ruby Studded Bangles",
        image: "/images/bangles.png",
        price: 195000,
        metal: "22K Gold with Ruby",
        weight: "45g",
        description: "Set of 6 ruby studded gold bangles"
      },
      {
        id: "MJ:029",
        name: "Royal Emerald Ring",
        image: "/images/ringwithperson.png",
        price: 85000,
        metal: "22K Gold with Emerald",
        weight: "12g",
        description: "Statement ring with large emerald center"
      },
      {
        id: "MJ:030",
        name: "Ruby Emerald Maang Tikka",
        image: "/images/mangalsutra.png",
        price: 45000,
        metal: "22K Gold with Ruby & Emerald",
        weight: "10g",
        description: "Bridal maang tikka with gemstones"
      }
    ]
  },
  {
    id: "col-006",
    name: "Apsara",
    slug: "apsara",
    bannerImage: "/images/Apsara-s.png",
    thumbnailImage: "/images/Apsara-s.png",
    description: "The divine collection. Inspired by celestial beauty, crafted for goddesses.",
    products: [
      {
        id: "MJ:031",
        name: "Apsara Rose Gold Necklace",
        image: "/images/amuliya.png",
        price: 145000,
        metal: "18K Rose Gold with Diamonds",
        weight: "25g",
        description: "Elegant rose gold necklace with diamond pavé"
      },
      {
        id: "MJ:032",
        name: "Apsara Rose Gold Earrings",
        image: "/images/earrings.png",
        price: 55000,
        metal: "18K Rose Gold with Diamonds",
        weight: "10g",
        description: "Delicate rose gold danglers"
      },
      {
        id: "MJ:033",
        name: "Apsara Rose Gold Bracelet",
        image: "/images/bracelet_files/bracelet-1.png",
        price: 65000,
        metal: "18K Rose Gold with Diamonds",
        weight: "12g",
        description: "Rose gold cuff bracelet with diamond accents"
      },
      {
        id: "MJ:034",
        name: "Apsara Rose Gold Ring",
        image: "/images/ringwithperson.png",
        price: 35000,
        metal: "18K Rose Gold with Diamond",
        weight: "6g",
        description: "Stackable rose gold ring with solitaire"
      },
      {
        id: "MJ:035",
        name: "Apsara Pendant",
        image: "/images/closeup-shot-female-wearing-beautiful-silver-necklace-with-diamond-pendant.jpg",
        price: 42000,
        metal: "18K Rose Gold with Diamond",
        weight: "8g",
        description: "Teardrop pendant with diamond center"
      },
      {
        id: "MJ:036",
        name: "Apsara Rose Gold Chain",
        image: "/images/luxury-jewellery-display.jpg",
        price: 85000,
        metal: "18K Rose Gold",
        weight: "18g",
        description: "Italian design rose gold chain"
      }
    ]
  }
];

// Helper functions
export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find(c => c.slug === slug);
}

export function getProductById(productId: string): { product: Product; collection: Collection } | undefined {
  for (const collection of collections) {
    const product = collection.products.find(p => p.id === productId);
    if (product) {
      return { product, collection };
    }
  }
  return undefined;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
}
