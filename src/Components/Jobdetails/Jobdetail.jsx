import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { TfiBag } from "react-icons/tfi";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { PiAddressBookLight } from "react-icons/pi";


const Jobdetail = () => {
    const jobs = useLoaderData();
    const {id} =  useParams();
    const parsid =  parseInt(id);
    const job  =  jobs.find(job => job.id === parsid );
    console.log(job);
    return (
        <div>
            <h2>Job Details of: {id}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className=" md:col-span-3">
                <h3 className="text-base mb-4"><strong className="text-xl font-bold">Job Description:</strong> {job.job_description}</h3>
                
                <h3 className="text-base  mb-4"><strong className="text-xl font-bold">Job Description:</strong> {job.job_responsibility}</h3> 
                <h3 className="text-base  mb-3"><strong className="text-xl font-bold">Educational Requirements:</strong> </h3> 
                <p className="mb-4">{job.educational_requirements}</p>

                <h3 className="text-base font-bold mb-3">Experiences:</h3>
                <p className="mb-10">{job.experiences}</p>
                

                </div>
                 <div className="border bg-blue-300 ">
                <div className="">
                <h2 className="text-bse font-bold my-2 ">Job Details</h2> <br />
                <progress className="progress progress-primary " value="100" max="100"></progress>
                <h2 className="text-bse font-bold  flex "><AiOutlineDollarCircle className="mt-1 mr-1 font-bold"> </AiOutlineDollarCircle> <p><strong className="text-base font-bold">Salary :</strong>{job.salary}</p>  </h2> <br />
                <h2 className="text-bse font-bold  flex "><TfiBag className="mt-1 mr-1 font-bold"> </TfiBag> <p><strong className="text-base font-bold">Job Title :</strong>{job.job_title}</p>  </h2> <br />
                <progress className="progress progress-primary " value="100" max="100"></progress>
                <h2 className="text-base flex"><FaPhoneFlip className="mt-1 mr-1" ></FaPhoneFlip> <p><strong>Phone:</strong>  {job.contact_information.phone} </p> </h2>
                <h2 className="text-base flex"> <MdEmail className="mt-1 mr-1"></MdEmail> <p><strong>Email:</strong> {job.contact_information.email} </p></h2>
                <h2 className="text-base flex mb-4 "> <PiAddressBookLight className="mt-1 mr-1"></PiAddressBookLight> <p><strong>Address:</strong>  {job.contact_information.email}</p></h2>
                </div>
                <div className="">
                <button className="btn btn-primary w-full  ">Apply Now</button>
                </div>
                
                
            </div>
            
            </div>
        </div>
    );
};

export default Jobdetail;