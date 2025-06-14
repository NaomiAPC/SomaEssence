"use client";

import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

const dataFooter = [
  { id: 1, name: "Sobre Nosotros", link: "#" },
  { id: 2, name: "Productos", link: "#" },
  { id: 3, name: "Mi cuenta", link: "#" },
  { id: 4, name: "Política de privacidad", link: "#" },
];

const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <p className="text-lg font-semibold">
            <span className="font-bold">Soma</span> Essence
          </p>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-muted-foreground sm:mb-0">
            {dataFooter.map((item) => (
              <li key={item.id}>
                <Link href={item.link} className="hover:underline mr-4 md:mr-6" >
                  {item.name}
                </Link>

              </li>
            ))}
          </ul>
        </div>

        {/* Separator */}
        <Separator className="my-6 border-t border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <span className="block text-xm text-gray-500 sm:text-center dark:text-gray-400">
            &copy; 2024
            <Link href="#">Soma Essence. </Link>
            Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
};

export default Footer;
