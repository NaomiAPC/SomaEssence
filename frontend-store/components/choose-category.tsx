"use client";

import { useGetCategories } from '@/app/api/hello/getProduct';
import Link from 'next/link';
import { Category } from '@/types/category'; // Asegúrate de importar el tipo

const ChooseCategory = () => {
  const { result, loading } = useGetCategories();

  return (
    <div className='max-w-6xl py-4 mx-auto sm:py-16 px-24'>
      <h3 className='px-6 pb-4 text-3xl sm:pb-8'>Elige tu categoría favorita</h3>

      <div className='grid gap-5 sm:grid-cols-4'>
      {!loading && result?.data?.map((category: Category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className='relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg'
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
             src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage?.formats?.medium?.url ?? category.mainImage?.url}`}

              alt={category.categoryName}
              className='max-w-[230px] transition duration-300 ease-in-out rounded-lg hover:scale-110'
            />
            <p className='absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg'>{category.categoryName}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChooseCategory;
