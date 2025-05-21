import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using a Selector

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="w-full flex justify-between items-center flex-col bg-pink-100 shadow-lg sm:flex-row">
      <div className="logo-container">
        <img className="w-60" src={LOGO_URL} />
      </div>
      <div className="">
        <ul className="flex items-center justify-center flex-col p-5 m-5 gap-6 text-slate-600 text-md sm:flex-row">
          <li className="cursor-pointer">
            Online Status : {onlineStatus ? "online" : "offline"}
          </li>
          <li className="cursor-pointer">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link className="link" to="/about">
              About Us
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link className="link" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link className="link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="cursor-pointer font-bold text-xl">
            <Link className="link" to="/cart">
              Cart-({cartItems.length} items)
            </Link>
          </li>
          <button
            className="cursor-pointer bg-cyan-200 rounded-md text-black p-2 hover:bg-cyan-300 active:bg-slate-500 transition-colors"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
