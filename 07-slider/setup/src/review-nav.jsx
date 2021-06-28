import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const ReviewNav = ({ handlePrev, handleNext }) => {
    return (
        <div>
            <button className="prev" onClick={handlePrev}>
                <FiChevronLeft />
            </button>
            <button className="next" onClick={handleNext}>
                <FiChevronRight />
            </button>
        </div>
    );
};

export default ReviewNav;
