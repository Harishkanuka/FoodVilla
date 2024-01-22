import React from "react";
import { RESTRO_CARD_IMG } from "../utils/constants";

const RestaruantCard = (props) => {
    console.log(props);
    const { resData } = props;
    return (
        <div>
            <div class="w-80 h-96 rounded overflow-hidden shadow-lg bg-white  hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
                <img
                    className=" p-1 rounded-lg object-cover w-full h-1/2"
                    src={RESTRO_CARD_IMG + resData?.info?.cloudinaryImageId}
                    alt="resto-card-img"
                />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                        {resData?.info?.name}
                    </div>
                    <p class="text-gray-700 text-base">
                        {resData?.info?.avgRating + " ⭐"}
                    </p>
                    <p class="text-gray-700 text-base">
                        {resData?.info?.cuisines.join(",")}
                    </p>
                    <p class="text-gray-700 text-base">
                        {resData?.info?.costForTwo}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RestaruantCard;
