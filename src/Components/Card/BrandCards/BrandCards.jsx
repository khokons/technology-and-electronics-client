import { useLoaderData } from "react-router-dom";
import BrandCard from "../BrandCard/BrandCard";




const BrandCards = () => {

    const cardInfo = useLoaderData();
    console.log(cardInfo)

    return (
        <div>
    <h2 className="text-2xl text-center text-[#000435] uppercase my-10 font-extrabold">Our Brands</h2>
       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            cardInfo.map((card)=><BrandCard key={card.id} card={card}></BrandCard>)
        }
       </div>

        </div>
    );
};

export default BrandCards;