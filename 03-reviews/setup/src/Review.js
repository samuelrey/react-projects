import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const nextPerson = () => {
        setIndex((index) => {
            return maybeWrapIndex(index + 1);
        });
    };

    const prevPerson = () => {
        setIndex((index) => {
            return maybeWrapIndex(index - 1);
        });
    };

    const randomPerson = () => {
        let newIndex = Math.floor(Math.random() * people.length);
        if (newIndex === index) {
            newIndex = maybeWrapIndex(index + 1);
        }

        setIndex(newIndex);
    };

    const maybeWrapIndex = (index) => {
        if (index < 1) {
            return people.length - 1;
        }

        if (index > people.length - 1) {
            return 0;
        }

        return index;
    };

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="text">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={randomPerson}>
                Surprise me
            </button>
        </article>
    );
};

export default Review;
