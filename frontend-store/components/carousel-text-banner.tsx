"use client"

import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from 'embla-carousel-autoplay'

export const dataCarouselTop = [
    {
      id: 1,
      title: "Entrega a Domicilio",
      description:
        "5-7 días hábiles a partir de la confirmación de su pedido (menos de una docena), si es al por mayor de 15-20 días hábiles aproximadamente.",
      link: "#",
    },
    {
      id: 2,
      title: "Nota personalizada",
      description: "Si lo deseas se incluye una nota personalizada en tu pedido",
      link: "#",
    },
    {
      id: 3,
      title: "Garantía de calidad",
      description:
        "Te indicaremos cómo cuidar tus productos para que duren el mayor tiempo posible",
      link: "#",
    },
  ];
  
  const CarouselTextBanner = () => {
    const router=useRouter()

    return (
      <div className="bg-gray-200 dark:bg-primary">
        <Carousel className="w-full max-w-4xl mx-auto"
        plugins={[
            Autoplay({
                delay:2500 //ms
            })
        ]}>
         <CarouselContent>

            {dataCarouselTop.map(({id, title,description, link})=>(
                 <CarouselItem key={id} onClick={()=>router.push(link)} className="cursor-pointer">
                 <div>
                    <Card className="shadow-none border-none bg-transparent">
                        <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                         <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                         <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                        </CardContent>
                    </Card>
                 </div>
                 </CarouselItem>
            ))}
            </CarouselContent>
    
        </Carousel>
      </div>
    );
  };
  
  export default CarouselTextBanner;
  