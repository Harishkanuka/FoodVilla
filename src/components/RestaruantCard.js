import React from "react";
import { RESTRO_CARD_IMG } from "../utils/constants";

const RestaruantCard = () => {
    return (
        <div>
            <div class="max-w-sm  rounded overflow-hidden shadow-lg bg-white  hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
                <img
                    className=" p-1 rounded-lg object-cover w-full "
                    src={RESTRO_CARD_IMG}
                    alt="resto-card-img"
                />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Mehgana Foods</div>
                    <p class="text-gray-700 text-base">4.4 Stars</p>
                </div>
            </div>
        </div>
    );
};

export default RestaruantCard;
