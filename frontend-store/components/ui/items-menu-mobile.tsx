"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Menu } from "lucide-react";
import Link from "next/link";

const ItemsMenuMobile = () => {
  return (
    <Popover>
      <PopoverTrigger aria-label="Abrir menú">
        <Menu className="w-6 h-6" />
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="end"
        className="bg-white rounded-md shadow-md p-4 space-y-2 w-48"
      >
        <Link href="/category/aromaticas" className="block text-sm hover:underline">
          Aromáticas
        </Link>
        <Link href="/category/cera" className="block text-sm hover:underline">
          Cera de abeja
        </Link>
        <Link href="/category/decorativas" className="block text-sm hover:underline">
          Decorativas
        </Link>
        <Link href="/category/parafina" className="block text-sm hover:underline">
          Parafina en gel
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default ItemsMenuMobile;
