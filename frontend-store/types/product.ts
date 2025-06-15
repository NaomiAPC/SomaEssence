export type ProductType = {
    id: number;
    documentId: string;
    productName: string;
    slug: string;
    description: string | null;
    active: boolean;
    isFeatured: boolean;
    images: {
      id: number;
      name: string;
      url: string;
    }[];
    porDocena: number;
    price: number;
    smell: string;
  };

  
  