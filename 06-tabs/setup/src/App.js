import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";
function App() {
    const [jobs, setJobs] = useState([]);
    const [activeJob, setActiveJob] = useState(null);

    const fetchJobs = async () => {
        try {
            const resp = await fetch(url);
            const json = await resp.json();
            setJobs(json);
            setActiveJob(0);
        } catch (err) {
            console.log(err);
        }
    };

    const handleClick = (id) => {
        const newActiveJob = jobs.map((job) => job.id).indexOf(id);
        setActiveJob(newActiveJob);
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    if (jobs.length === 0 || activeJob === null) {
        return (
            <section className="section">
                <div className="loading">
                    <h2>loading...</h2>
                </div>
            </section>
        );
    }

    const { title, dates, duties, company } = jobs[activeJob];
    return (
        <section className="section">
            <div className="title">
                <h2>Experience</h2>
                <div className="underline"></div>
            </div>
            <div className="jobs-center">
                <div className="btn-container">
                    {jobs.map((job, index) => {
                        return (
                            <button
                                className={
                                    index === activeJob
                                        ? "job-btn active-btn"
                                        : "job-btn false"
                                }
                                onClick={() => {
                                    handleClick(job.id);
                                }}
                            >
                                {job.company}
                            </button>
                        );
                    })}
                </div>
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{dates}</p>
                    {duties.map((duty) => {
                        return (
                            <div className="job-desc">
                                <FaAngleDoubleRight className="job-icon" />
                                <p>{duty}</p>
                            </div>
                        );
                    })}
                </article>
            </div>
            <button className="btn">more info</button>
        </section>
    );
}

export default App;
