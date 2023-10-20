import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const cardData = useLoaderData();

  if (!cardData) {
    return (
      <div>
        <p>Loading data...</p>
      </div>
    );
  }

  // Assuming you have an array of card data, you can use the .find() method to locate the card with a matching _id.
  const matchingCard = cardData.find(
    (card) => card.brand_name === cardData.brand
  );

  if (!matchingCard) {
    return (
      <div>
        <p>Card not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-blue-800/30 ">
      <div className="card shadow-xl py-10">
        <figure>
         <img src="https://i.postimg.cc/6q0gSc9c/apple-underware.jpg" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center font-extrabold text-black">APPLE</h2>
          <h3 className="card-title justify-center font-extrabold text-black">Favorites Product in this website</h3>
          <p className="card-title justify-center">
          Undergarments are generally of two types, those that are worn to cover the torso and those that are worn to cover the waist and legs, although there are also underclothes which cover both. Different styles of underwear are generally worn by females and males
          </p>
          <div className="card-actions justify-center mt-4">
            <button className="btn bg-[#A3A7D2] border-hidden">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
