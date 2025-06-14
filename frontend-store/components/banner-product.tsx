import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return (
        <>
      <div className="mt-4 text-center">
      <p>Enciende momentos especiales</p>
      <h4 className="mt-2 text-5xl font-extrabold uppercase">Velas artesanales</h4>
      <p className="my-2 text-lg">Aromas que transforman tu espacio en un refugio</p>
      <Link href="#" className={buttonVariants()}>Comprar</Link>
      </div>

      <div
        className="h-[350px] bg-cover lg:h-[550px] mt-5"
        style={{ backgroundImage: "url('/100.png')" }}
      />

        
     
      </>

      
    );
  };

  
  export default BannerProduct;
  