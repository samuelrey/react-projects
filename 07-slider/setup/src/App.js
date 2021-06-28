import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
    const [reviews, setReviews] = useState(data);
    const [activeReview, setActiveReview] = useState(0);

    const { image, name, title, quote } = reviews[activeReview];

    const handlePrev = () => {
        setActiveReview(maybeWrapIndex(activeReview - 1));
    };

    const handleNext = () => {
        setActiveReview(maybeWrapIndex(activeReview + 1));
    };

    const maybeWrapIndex = (i) => {
        if (i < 0) {
            return reviews.length - 1;
        } else if (i == reviews.length) {
            return 0;
        } else {
            return i;
        }
    };

    return (
        <div className="section">
            <div className="title">
                <h2>
                    <span>/</span>
                    reviews
                </h2>
            </div>
            <div className="section-center">
                <article>
                    <img src={image} alt={name} className="person-img" />
                    <h4>{name}</h4>
                    <p className="title">{title}</p>
                    <p className="text">{quote}</p>
                    <FaQuoteRight className="icon" />
                </article>
                <button className="prev" onClick={handlePrev}>
                    <FiChevronLeft />
                </button>
                <button className="next" onClick={handleNext}>
                    <FiChevronRight />
                </button>
            </div>
        </div>
    );
}

export default App;
