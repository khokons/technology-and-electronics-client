/* eslint-disable react/prop-types */

const Product = ({tech}) => {
    const {image, name, brand, category, price, rating} = tech;

    return (
        <div className="relative flex flex-col text-gray-700 bg-gray-400/10 shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
          <img
            src={image}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6 grow">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
             {name}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {price}
            </p>
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
             {category}
            </p>
            <p className="block font-sans text-black antialiased font-bold leading-relaxed text-blue-gray-900 uppercase">
              {brand}
            </p>
          </div>
          <p className="">{rating}</p>
          
        </div>
        <div className="p-6 pt-0 flex justify-between">
          <button
            className="bg-[#A3A7D2] select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
           Details 
          </button>

          <button
            className="bg-[#A3A7D2] select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
           Update 
          </button>
        </div>
      </div>
    );
};

export default Product;