import React from "react";
import SearchBar from "./SearchBar";
import RestaruantCard from "./RestaruantCard";
import { resList } from "../utils/mockData";

const Body = () => {
    return (
        <div className="m-2 ">
            <SearchBar />
            <div className="flex flex-wrap gap-5">
                {resList.map((restaruant, i) => (
                    <RestaruantCard
                        key={i}
                        resData={restaruant}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
