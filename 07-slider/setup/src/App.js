import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./data";
import ReviewContainer from "./review-container";

function App() {
    const [people, setPeople] = useState(data);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (activeIndex < 0) {
            setActiveIndex(people.length - 1);
        } else if (activeIndex > people.length - 1) {
            setActiveIndex(0);
        }
    }, [activeIndex, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setActiveIndex(activeIndex + 1);
        }, 3000);

        // This return makes it so that the intervals are replaced every
        // time index changes.
        return () => clearInterval(slider);
    }, [activeIndex]);

    return (
        <div className="section">
            <div className="title">
                <h2>
                    <span>/</span>
                    reviews
                </h2>
            </div>
            <div className="section-center">
                <ReviewContainer people={people} activeIndex={activeIndex} />
                <button
                    className="prev"
                    onClick={() => {
                        setActiveIndex(activeIndex - 1);
                    }}
                >
                    <FiChevronLeft />
                </button>
                <button
                    className="next"
                    onClick={() => {
                        setActiveIndex(activeIndex + 1);
                    }}
                >
                    <FiChevronRight />
                </button>
            </div>
        </div>
    );
}

export default App;
