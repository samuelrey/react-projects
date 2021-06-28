import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

function App() {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex(maybeWrapIndex(index - 1));
    };

    const handleNext = () => {
        setIndex(maybeWrapIndex(index + 1));
    };

    const maybeWrapIndex = (i) => {
        if (i < 0) {
            return people.length - 1;
        } else if (i == people.length) {
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
                {people.map((person, idx) => {
                    const { id, image, name, title, quote } = person;
                    return (
                        <article
                            key={id}
                            className={
                                idx === index ? "activeSlide" : "lastSlide"
                            }
                        >
                            <img
                                src={image}
                                alt={name}
                                className="person-img"
                            />
                            <h4>{name}</h4>
                            <p className="title">{title}</p>
                            <p className="text">{quote}</p>
                            <FaQuoteRight className="icon" />
                        </article>
                    );
                })}
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
