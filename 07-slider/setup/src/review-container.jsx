import React, { useState, useEffect } from "react";
import ReviewList from "./review-list";
import ReviewNav from "./review-nav";
import data from "./data";

// ReviewContainer fetches the review data and passes state down to
// presentation components.
const ReviewContainer = () => {
    const [people, setPeople] = useState(data);
    const [activeIndex, setActiveIndex] = useState(0);

    // Maybe wrap the activeIndex if it goes out of bounds.
    useEffect(() => {
        if (activeIndex < 0) {
            setActiveIndex(people.length - 1);
        } else if (activeIndex > people.length - 1) {
            setActiveIndex(0);
        }
    }, [activeIndex, people]);

    // Automatically change the active review at a given interval.
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
