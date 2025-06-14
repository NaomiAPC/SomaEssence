import { useEffect, useState } from "react";
import { ProductType } from "@/types/product";

export function useGetFeaturedProducts() {
  const [result, setResult] = useState<ProductType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate[images][populate]=*`
        );

        const json = await res.json();

        if (!json.data || !Array.isArray(json.data)) {
          throw new Error("La respuesta de la API no contiene datos válidos.");
        }

        setResult(json.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Ocurrió un error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, result, error };
}
