import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
    const [review, setReview] = useState(data[0]);

    const { id, image, name, title, quote } = review;

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
                <button className="prev">
                    <FiChevronLeft />
                </button>
                <button className="next">
                    <FiChevronRight />
                </button>
            </div>
        </div>
    );
}

export default App;
