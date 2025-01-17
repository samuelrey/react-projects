import React from 'react';
import Tour from './Tour';

const Tours = ({tours, removeTour}) => {
    return (
        <section>
            <div className="title">
                <h2>Our tours</h2>
                <div className="underline" />
            </div>
            <div>
                {tours.map((tour) => {
                    return <Tour key={tour.Id} {...tour} removeTour={removeTour} />;
                })}
            </div>
        </section>
    )
};

export default Tours;
