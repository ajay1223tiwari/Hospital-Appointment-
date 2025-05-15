import React, { useState }  from "react";

import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import {BASE_URL} from "../../config.js"
import Error from "../../components/Error/Error.jsx"
import Loader from "../../components/Loader/Loading.jsx"
import useFetchData from '../../hooks/useFetchData.jsx'
import { useParams } from "react-router-dom";




const DoctarDetails = ()=> {
  const [tab, setTab] = useState("about");
  const {id} = useParams();
    const {data: doctor, loading, error} = useFetchData(`${BASE_URL}/doctors/${id}`)

    const {
      name,
      qualification,
      experiences,
      timeSlotes,
      reviews,
      bio,
      about,
      averageRating,
      totalRating,
      specialization,
      ticketPrices,
      photo,
    } = doctor;

  return (
    <section>
       <div className="max-w-[1170px] px-5 mx-auto">

       
        <div className="grid  md:grid-cols-3  gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="lg:max-w-[200px] lg:max-h-[200px]">
                <img src={photo} alt="doctorImg" className="w-full" />
              </figure>
              <div className="flex flex-col w-[98%]">
                <span className="bg-[#CCF0F3] flex items-center w-[55%] sm:w-[30%] md:w-[25%] text-irisBlueColor py-1 px-1 sm:px-4 text-[12px] leading-4 lg:text-[14px] lg:leading-7 font-[600] rounded">
                {specialization}
                </span>
                <h3 className="text-headingColor text-[16px] md:text-[22px] mt-3 font-bold">
                 {name}
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] lg:text-[16px] leading-5 lg:leading-7 font-[600] text-headingColor">
                    <img src={starIcon} alt="starIcon" />{averageRating}
                  </span>
                  <span className="text-[13px] lg:text-[15px] leading-5 lg:leading-7 font-[400] text-textColor">
                    ({totalRating})
                  </span>
                </div>
                <p className=" text__para text-[14px] leading-5 md:text-[15px] md:max-w-[390px]">
                  {bio}
                </p>
                </div>
       </div>
       <div className="mt-[50px] border-b border-solid border-[#0066ff30]">
              <button
               onClick={() => setTab("about")}
                className={`${
                  tab === "about" &&
                  "border-b border-solid border-primaryColor !important"
                }py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-[500]`}
                
              >
                About
              </button>
              <button
              onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" &&
                  "border-b border-solid border-primaryColor !important"
                }py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-[500]`}
                
              >
                Feedback
              </button>
            </div>


            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout />}
              {tab === "feedback" && <Feedback />}
            </div>
       </div>


       <div>
        <SidePanel/>
       </div>
       </div>

       </div>

    </section>
  )
}
export default DoctarDetails;
