import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/jobcard";
import ApplicationPage from "./components/ApplicationPage";
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import { db } from "./firebase.config.js";

function App() {
    const [jobs, setJobs] = useState([]);
    const [customSearch, setCustomSearch] = useState(false);

    const fetchJobs = async () => {
        setCustomSearch(false);
        const tempJobs = []
        const jobsRef = query(collection(db, "jobs"));
        const q = query(jobsRef, orderBy("postedOn", "desc"));
        const req = await getDocs(q);

        req.forEach((job) => {
            tempJobs.push({
                ...job.data(),
                id: job.id,
                postedOn: job.data().postedOn.toDate()
            })
        });
        setJobs(tempJobs);
    }

    const fetchJobsCustom = async (jobCriteria) => {
        setCustomSearch(true);
        const tempJobs = []
        const jobsRef = query(collection(db, "jobs"));
        const q = query(jobsRef, where("type", "==", jobCriteria.type), where("title", "==", jobCriteria.title), where("experience", "==", jobCriteria.experience), where("location", "==", jobCriteria.location), orderBy("postedOn", "desc"));
        const req = await getDocs(q);

        req.forEach((job) => {
            tempJobs.push({
                ...job.data(),
                id: job.id,
                postedOn: job.data().postedOn.toDate()
            })
        });
        setJobs(tempJobs);
    }

    useEffect(() => {
        fetchJobs()
    }, [])


    return (
        <Router>
            <div>
                <Navbar />
                <Header />
                <SearchBar fetchJobsCustom={fetchJobsCustom} />
                {customSearch &&
                    <button onClick={fetchJobs} className="flex pl-[1250px] mb-2">
                        <p className="bg-blue-500 px-10 py-2 rounded-md text-white">Clear Filters</p>
                    </button>
                }
                <Switch>
                    <Route path="/apply/:id">
                        <ApplicationPage />
                    </Route>
                    <Route path="/">
                        {jobs.map((job) => (
                            <JobCard key={job.id} {...job} />
                        ))}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
