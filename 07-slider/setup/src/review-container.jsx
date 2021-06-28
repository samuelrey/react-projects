import React, { useState, useEffect } from "react";
import ReviewList from "./review-list";
import ReviewNav from "./review-nav";
import data from "./data";

const ReviewContainer = () => {
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

        // This return makes it so that the interval is replaced whenever
        // activeIndex changes.
        return () => clearInterval(slider);
    }, [activeIndex]);

    return (
        <div className="section-center">
            <ReviewList people={people} activeIndex={activeIndex} />
            <ReviewNav
                handlePrev={() => {
                    setActiveIndex(activeIndex - 1);
                }}
                handleNext={() => {
                    setActiveIndex(activeIndex + 1);
                }}
            />
        </div>
    );
};

export default ReviewContainer;
