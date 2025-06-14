export interface Category {
    id: number;
    slug: string;
    categoryName: string;
    mainImage?: {
      id: number;
      name: string;
      url?: string;
      formats?: {
        thumbnail?: {
          url: string;
          medium?: { url: string };
        };
        // Puedes añadir otros tamaños si quieres
      };
    };
  }

  export interface CategoriesResponse {
    data: Category[];
    meta?: unknown;
  }
  