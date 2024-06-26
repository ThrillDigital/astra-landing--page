import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowRight } from "react-icons/fi";
import { HashLink as Link } from "react-router-hash-link";
import { FashionDistrictFestival23 } from "../../asset";
import { ASTRANEW } from "../../asset/logo";

import { BringyourFashionIdeastoLife, Reinventing } from "../../asset/textImg";
import { Glitter } from "../../asset";

const Layout = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
  }, []);
  return (
    <div className="bg-bg1 bg-cover flex flex-col items-center justify-center">
      <div className="flex flex-col ">
      <p className="lg:pb-[40px] lg:px-[50px]  mt-[50px] flex lg:justify-start justify-center">
        <img
          src={ASTRANEW}
          alt=""
          className="w-[126.56px] lg:w-[200px] md:w-[180px]"
        />
      </p>
      <div
        className={`flex lg:flex-row flex-col lg:gap-[140px] gap-[18px] lg:px-[50px] overflow-y-hidden text-white pt-[50px] lg:pt-[100px] justify-between w-[100%] items-center   px-[20px] overflow-auto pb-[50px] lg:pb-[300px]`}
      >
        <div
          data-aos="fade-left"
          className=" font-[400] w-[100%] md:flex md:flex-col md:gap-[40px] lg:gap-0 lg:w-[50%]"
        >
          <div className="flex items-end relative left-[25px] lg:left-0 lg:pb-0 md:w-[600px] md:m-auto gap-[8px] lg:m-0 m-auto w-[300px] overflow-y-hidden">
            <img
              src={BringyourFashionIdeastoLife}
              alt=""
              className="hidden lg:flex "
            />
            <img
              src={Reinventing}
              alt=""
              className="lg:hidden justify-center md:w-full flex w-[100%] m-auto"
            />
            <img
              src={Glitter}
              alt="glitter"
              className="flex items-end lg:hidden relative md:w-[60px]  w-[40px] lg:pb-0 md:pb-[13px] pb-[3px] overflow-y-hidden"
            />
          </div>
          <p className="lg:text-[20px] text-[15px] w-[85%] lg:m-0 m-auto text-center lg:pb-0 pb-[10px] lg:text-start md:text-[25px] md:w-[600px] md:leading-none overflow-y-hidden leading-[20.92px] lg:leading-[31.9px] lg:w-[507px] pt-[20px] lg:pt-[20px] font-[100] font-[{'Clash-Grotesk-Variable'}]">
            Using VR and AI to boost in-store traffic and enhance customer
            insights for store managers.
          </p>
          <p className="flex lg:flex-row flex-col lg:gap-[20px] gap-[10px] mt-[20px] lg:mt-[35px] text-[10px]  overflow-hidden  lg:text-[20px] lg:font-[200] font-[300]">
            <Link to="#joinwaitlist" smooth className="overflow-y-hidden">
              <button className="lg:w-[305px] w-[250px] md:w-[350px] m-auto px-[3px] text-[15px] md:text-[18px] lg:text-[18px] overflow-hidden transition-transform duration-300 hover:scale-110 flex items-center gap-[10px] justify-center lg:h-[54px] md:h-[55px] h-[40px] rounded-[5px] mb-[25px] lg:mb-0  bg-white border-[0.5px] text-black">
                Launch Your Virtual Store Today <FiArrowRight />
              </button>
            </Link>
          </p>
        </div>

        <div
          data-aos="fade-right"
          className="justify-center items-center w-[100%] md:px-[30px] lg:px-0 lg:w-[542.9px]"
        >
          <img src={FashionDistrictFestival23} alt="" className="w-full" />
        </div>
    
      </div>
     
    </div>
    <div className="lg:text-[35px] z-[9999] lg:px-[auto] text-white xl:m-auto xl:text-center md:top-[700px] md:text-[30px] lg:absolute lg:flex xl:top-[930px] lg:top-[840px] hidden top-[430px] text-center justify-center items-center text-[15px] xl:justify-center w-[867px] font-[{'Clash-Grotesk-Variable':100}] font-[100]">
          An in-store user experience that combines VR with Web3 and AI with
          grants & incubation from:
        </div>
    </div>
    
  );
};

export default Layout;
