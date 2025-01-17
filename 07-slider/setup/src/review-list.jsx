import React from "react";
import Review from "./review";

// ReviewList renders all of the reviews and applies styling to make the one
// active review visible and hide the others.
const ReviewList = ({ people, activeIndex }) => {
    return (
        <div className="section-center">
            {people.map((person, index) => {
                const { id } = person;

                let slideState = "nextSlide";
                if (index === activeIndex) {
                    slideState = "activeSlide";
                } else if (
                    index === activeIndex - 1 ||
                    (index === people.length - 1 && activeIndex === 0)
                ) {
                    slideState = "lastSlide";
                }

                return <Review key={id} slideState={slideState} {...person} />;
            })}
        </div>
    );
};

export default ReviewList;
