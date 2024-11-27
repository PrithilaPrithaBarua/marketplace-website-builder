import React from "react";
import logo from "../assets/Khushi logo for website.png";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Category from "./Category";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img src={logo} alt="logo" className=" h-12"></img>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <button onClick={() => navigate("/Signup")} className="btn mr-4">
              {" "}
              SignUp{" "}
            </button>

            <button onClick={() => navigate("/")} className="btn border-none ">
              <FaShoppingCart />
            </button>
          </ul>
        </div>
      </div>
      <Category/>
    </div>
  );
};

export default Navbar;
