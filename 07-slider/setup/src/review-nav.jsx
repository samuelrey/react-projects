import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

// ReviewNav provides a pair of buttons to view different reviews.
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
