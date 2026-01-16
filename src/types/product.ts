export type ProductCategory = "black-tiger" | "fresh-water-scampi" | "vannamei";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory | string;
  description?: string;
  specifications: {
    type: string;
    scientificName: string;
    processingType: string;
    shelfLife: string;
    productionMethod: string;
    glazing: string;
    origin: string;
    packing: string;
    packaging?: string;
  };
  sizes: {
    iqf?: string;
    semiIqf?: string;
    block?: string;
  };
  keyFeatures?: string;
  images: string[];
  url?: string;
  headerImage?: string;
  isPremium?: boolean;
};
