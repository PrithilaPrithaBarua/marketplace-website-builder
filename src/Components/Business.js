import React from 'react';
import Bata from "../assets/Bata Logo.png";
import Gadget from "../assets/gadget logo.png";
import Sports from "../assets/sports.png";
import Shawpno from "../assets/Shawpno logo.png";
import Rong from "../assets/orng.png"

const Business = () => {
  return (
    <>
    <div className="px-8 font-extrabold text-2xl">
        <h1 className='mt-4'>Explore All Our Shops!</h1>
    </div>
      <div className="md:flex lg:flex gap-4 px-8 py-4">
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={Rong}
              alt="Jatra"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Jatra</h2>
            <p>To explore more from Jatra, click here!</p>
            <div className="card-actions justify-end">
              <button className="btn">Click Here</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={Bata}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bata</h2>
            <p>To explore more from Bata, click here!</p>
            <div className="card-actions justify-end">
              <button className="btn">Click Here</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={Shawpno}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shawpno</h2>
            <p>To explore more from Shawpno, click here!</p>
            <div className="card-actions justify-end">
              <button className="btn">Click Here</button>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={Gadget}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Gadget & Gear</h2>
            <p>To explore more from Gadget & Gear, click here!</p>
            <div className="card-actions justify-end">
              <button className="btn">Click Here</button>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={Sports} alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sports</h2>
            <p>To explore more from Sports, click here!</p>
            <div className="card-actions justify-end">
              <button className="btn">Click Here</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Business