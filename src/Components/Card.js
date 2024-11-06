import React from "react";
import Dress from "../assets/Dress1.jpg";
import Food from "../assets/Food Grocery.jpg"
import Speaker from "../assets/Speaker.png";
import Utensils from "../assets/Kitchen Utensils.jpg"
import Badminton from "../assets/Badminton Shuttle cocks.jpg";
import Earrings from "../assets/Earrings.jpg";


const Card = () => {
  return (
    <>
    <div className="px-8 font-extrabold text-2xl">
        <h1>Explore All Products</h1>

      <div className="md:flex lg:flex xl:flex gap-4">
        <div className="card card-compact bg-base-100 w-96 shadow-xl mt-6">
          <figure>
          <img className="" src={Dress} alt="Dress" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dress!</h2>
            <p>Available</p>
            <p className="text-lg">1200tk</p>
            <div className="card-actions justify-end">
              <button className="btn ">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 w-96 shadow-xl  mt-6">
          <figure>
            <img
              src={Earrings}
              alt="Earrings"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Earrings!</h2>
            <p>Available</p>
            <p className="text-lg">200tk</p>
            <div className="card-actions justify-end">
              <button className="btn ">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 w-96 shadow-xl  mt-6">
          <figure>
            <img
              src={Speaker}
              alt="Speaker"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Speaker!</h2>
            <p>Available</p>
            <p className="text-lg">2100tk</p>
            <div className="card-actions justify-end">
              <button className="btn ">Buy Now</button>
            </div>
          </div>
        </div>
        
        <div className="card card-compact bg-base-100 w-96 shadow-xl  mt-6">
          <figure>
            <img
              src={Utensils}
              alt="Kitchen Utensils"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kitchen Utensils</h2>
            <p>Available</p>
            <p className="text-lg">1600tk</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 w-96 shadow-xl mt-6">
          <figure>
            <img
              src={Badminton}
              alt="Badminton Shuttle Cocks"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Badminton Shuttle Cocks!</h2>
            <p>Available</p>
            <p className="text-lg">200tk</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>

        
</div>
      </div>
    </>
  );
};

export default Card;
