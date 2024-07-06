import PropTypes from "prop-types";
import { CiLocationOn,CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary } = job;
  return (
    <div className="card card-compact bg-base-100  shadow-xl  flex space-y-3">
      <figure>
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <h2 className="text-xl">{company_name}</h2>
        <div>
            <button className="mr-5 border-2  border-sky-500 py-2 rounded px-5 text-blue-500">{remote_or_onsite}</button>
            <button className="mr-5 border-2  border-sky-500 py-2 rounded px-5 text-blue-500">{job_type}</button>
            
        </div>
        <div className="flex-grow flex ">
            <h3 className="text-xl flex mr-8"><CiLocationOn className="mt-1 mr-3"></CiLocationOn> {location}</h3>
            <h3 className="text-xl flex"><CiDollar className="mt-1 mr-3"></CiDollar>{salary}</h3>
            

        </div>
        <div className="card-actions ">
         <Link to={`/job/${id}`}>
         <button className="btn bg-sky-400 text-white  font-extrabold  "> View Details</button>
         </Link>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Job;
