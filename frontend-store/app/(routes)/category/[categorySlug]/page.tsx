"use client";

import { useGetCategoryProduct } from "@/app/api/hello/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";

export default function Page() {
    const params = useParams();
    const categorySlug = params?.categorySlug as string;
  
    const { result, loading } = useGetCategoryProduct(categorySlug);
  
    const products = result?.data ?? [];
    const categoryName = products[0]?.category?.categoryName;

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {loading && <p>Cargando...</p>}
      {!loading && !categoryName && <p>No se encontró la categoría.</p>}
      {categoryName && (
        <h1 className="text-3xl font-medium mb-6">Velas {categoryName}</h1>
      )}
      <Separator/>

      <div className="sm:flex sm:justify-between">
      <p>Filters of category</p>
      </div>

    </div>
  );
}
