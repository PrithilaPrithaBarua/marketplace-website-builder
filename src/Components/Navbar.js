import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Khushi logo for website.png"

const Navbar = () => {
  return (
    <div><div className="nav-bar px-8">
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>FASHION</a>
            </li>
            <li>
              <a>FOOD</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>GROCERY</a>
            </li>
            <li>
              <a>ELECTRONICS</a>
            </li>
            <li>
              <a>SPORTS</a>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <img className="h-10 " src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>FASHION</a>
          </li>
          <li>
            <details>
              <summary>FOOD</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>GROCERY</a>
          </li>
          <li>
            <a>ELECTRONICS</a>
          </li>
          <li>
            <a>SPORTS</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex space-x-4">
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Login
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Start Designing Your Website With Us!</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                <Link to="/page1">Click Here</Link>
              </button>
            </div>
          </dialog>
          <button className="btn">Cart</button>
        </div>
      </div>
    </div>
    {/*
    <nav className=" text-red p-4 flex items-center justify-between">
      <div>
        <div className="text-xl font-bold">
          <Link to={"/"}>
            <img className="h-10 " src={Logo} alt="logo" />
          </Link>
        </div>
      </div>

      <Page2/>
      <div className="flex space-x-4">
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Login
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Start Designing Your Website With Us!</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
              <Link to="/page1">Click Here</Link>
            </button>
          </div>
        </dialog>
        <button className="btn">Cart</button>
      </div>
    </nav>

    <h1 className="px-2">Home Page</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mr-2">
        <Link to="/page1">Go to Website Builder Page</Link>
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mr-2">
        <Link to="/page2">Go to Page 2</Link>
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mr-2">
        <Link to="/page3">Go to Page 3</Link>
      </button> */}
  </div></div>
  )
}

export default Navbar