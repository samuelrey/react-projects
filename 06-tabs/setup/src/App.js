import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";
function App() {
    const [jobs, setJobs] = useState([]);

    const fetchJobs = async () => {
        try {
            const resp = await fetch(url);
            const json = await resp.json();
            setJobs(json);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    return <h2>tabs project setup</h2>;
}

export default App;
