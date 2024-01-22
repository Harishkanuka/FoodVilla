import React from "react";
import { FOOD_VILLA_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="flex justify-between shadow-md items-center border border-2 border-solid border-slate-200 bg-gradient-to-tl from-slate-300 mt-2 mb-3 ">
            <div className="relative">
                <img
                    className="h-20 w-20  "
                    src={FOOD_VILLA_URL}
                    alt=""
                />
            </div>
            <div className="mr-10 ">
                <ul className="flex gap-5">
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
