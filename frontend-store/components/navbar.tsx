"use client";

import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./ui/menu-list";
import ItemsMenuMobile from "./ui/items-menu-mobile";
import ToggleTheme from "./toggle-theme";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
      {/* Logo */}
      <h1
        className="text-3xl"
        onClick={() => router.push("/")}
      >
        Soma<span className="font-bold">Essence</span>
      </h1>

      {/* Menu for desktop */}
      <div className="hidden sm:flex items-center justify-between">
        <MenuList/>
      </div>

      {/* Menu for mobile */}
      <div className="flex sm:hidden">
        <ItemsMenuMobile/>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-2">
        <ShoppingCart
          strokeWidth={1}
          className="cursor-pointer"
          onClick={() => router.push("/cart")}
        />

        <Heart
          strokeWidth={1}
          className="cursor-pointer"
          onClick={() => router.push("/loved-products")}
        />

        <User
          strokeWidth={1}
          className="cursor-pointer"
        />

        <ToggleTheme/>
      </div>
    </div>
  );
};

export default Navbar;
