import React from "react";
import SearchBar from "./SearchBar";
import RestaruantCard from "./RestaruantCard";

const Body = () => {
    return (
        <div className="m-2 ">
            <SearchBar />
            <div className="flex flex-wrap gap-5">
                <RestaruantCard />
                <RestaruantCard />
                <RestaruantCard />
                <RestaruantCard />
                <RestaruantCard />
                <RestaruantCard />
                <RestaruantCard />
            </div>
        </div>
    );
};

export default Body;
