/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetFeaturedProducts } from "@/app/api/hello/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import { ProductType } from "@/types/product";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import SkeletonSchema from "./skeletonSchema";
import { Card, CardContent } from "./ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./icon-button";
import { useRouter } from "next/navigation";

const FeaturedProducts = () => {
  const { loading, result }: ResponseType = useGetFeaturedProducts();
  const router = useRouter();

  console.log("Productos destacados result:", result);

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}

          {result?.map((product: ProductType) => {
            const imageUrl = product.images?.[0]?.url
              ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`
              : null;

            return (
              <CarouselItem
                key={product.id}
                className="md:basis-1/2 lg:basis-1/3 group"
              >
                <div className="p-1">
                  <Card className="py-4 border border-gray-200 shadow-none">
                    <CardContent className="relative flex items-center justify-center px-6 py-2">
                      {imageUrl ? (
                        <img
                          loading="lazy"
                          src={imageUrl}
                          alt={product.productName}
                          className="object-cover w-full h-48"
                          onError={(e) => {
                            e.currentTarget.src = "/default-image.png";
                          }}
                        />
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Imagen no disponible
                        </p>
                      )}

                      <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                        <div className="flex justify-center gap-x-6">
                          <IconButton
                            onClick={() =>
                              router.push(`/pproduct/${product.slug}`)
                            }
                            icon={<Expand size={20} />}
                            className="text-gray-600"
                          />

                          <IconButton
                            onClick={() => console.log("Agregar al carrito")}
                            icon={<ShoppingCart size={20} />}
                            className="text-gray-600"
                          />
                        </div>
                      </div>
                    </CardContent>
                    <div className="flex justify-between gap-4 px-8 pt-2">
                      <h3 className="text-lg font-bold">
                        {product.productName}
                      </h3>
                      <div className="flex items-center justify-between gap-3">
                       <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">Docena: ${product.porDocena}</p>
                       <p className="px-2 py-1 text-white bg-green-900 rounded-full w-fit">Unidad: ${product.price}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}

        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext className="hidden sm:flex"/>
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
