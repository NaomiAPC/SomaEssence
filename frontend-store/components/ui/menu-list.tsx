"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Aromaticas",
    href: "/category/aromaticas",
    description:
      "Velas diseñadas para aromatizar ambientes, elaboradas con esencias naturales.",
  },
  {
    title: "Cera de abeja",
    href: "/category/cera",
    description:
      "Velas artesanales conocidas por su combustión limpia y propiedades purificadoras del aire.",
  },
  {
    title: "Decorativas",
    href: "/category/decorativas",
    description:
      "Velas utilizadas principalmente como elementos estéticos para embellecer espacios.",
  },
  {
    title: "Parafina en gel",
    href: "/category/parafina",
    description: "Velas transparentes, ideales para centros de mesa y efectos visuales únicos.",
  },
  
]

const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                   
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Soma Essence
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                    Velas artesanales hechas con amor, perfectas para ambientar tus espacios con calidez y estilo.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Tienda">
                Accede a toda tu informacion, tus pedidos y mucho mas.
              </ListItem>
              <ListItem href="/offers" title="Ofertas">
                Seccion dedicada a promociones y descuentos especiales.
              </ListItem>
              <ListItem href="/complemments" title="Complementos">
                Productos complementarios como envases de cristal, de yeso, etc.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Velas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
  <Link href="/complements" passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Complementos
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default MenuList
