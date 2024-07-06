import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJob = () => {
    const [jobs,setjobs] =  useState([]);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setjobs(data))
    },[])
    return (
        <div>
            <div>
                <h2 className="text-5xl text-center">Featured Job</h2>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, facere!</p>
                <div className="grid grid-cols-2 gap-6">
                    {
                        jobs.map(job => <Job
                        key={job.id}
                        job={job}
                        
                        ></Job> )
                    }
                </div>
               
            </div>
            
        </div>
    );
};

export default FeaturedJob;