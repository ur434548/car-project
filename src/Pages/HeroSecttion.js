import React from "react";
import hersection from "../assests/pics/hersection.png";
import suggestion1 from "../assests/pics/suggestion1.png";
import suggestion2 from "../assests/pics/suggestion2.png";
import suggestion3 from "../assests/pics/suggestion3.png";
import ButtonOrange from "../Component/ButtonOrange";
import ButtonWhite from "../Component/ButtonWhite";
import { IoMdStar } from "react-icons/io";

export default function HeroSection() {
  return (
    <div className="flex p-4 w-[1440px] gap-16 justify-center mx-auto">
      <div className="flex-shrink-0">
        <img
          src={hersection}
          alt="pic"
          className="w-[539px] h-[913px] rounded-lg"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between items-center mt-10">
          <div className="flex gap-10">
            <button className="text-lg font-[500]">Rent</button>
            <button className="text-lg font-[500]">Share</button>
            <button className="text-lg font-[500]">Ride</button>
            <button className="text-lg font-[500]">Service</button>
          </div>
          <div className="flex gap-6">
            <ButtonWhite text="Sign Up" />
            <ButtonOrange text="Sign In" />
          </div>
        </div>

        <div className="mt-20">
          <div className="text-[86px] font-bold font-poppins leading-[94px] text-custom-color">
            Local best and <br></br>
            <span className="text-custom-orange">personalized service</span>
          </div>
          <div className="mt-6 text-lg font-medium text-custom-color">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
              trices mi amet, interdum euismod placarat urna, enim faucibus.
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>

        <div className="mt-48">
          <h2 className="text-xl font-semibold leading-[24.2px] text-custom-color mb-8">Blogs Recommendations</h2>
       
          <div className="flex gap-14">
            <div className="flex items-center gap-4">
              <img
                src={suggestion1}
                alt="Tesla Model S"
                className="w-[120px] h-[90px] rounded-lg"
              />
              <div>
                <p
                  className="text-base leading-[19.36px]  item  text-gray-400 
                "
                >
                  Tesla
                </p>

                <p className="text-sm mt-2  text-[20px] text-custom-color  leading-[24.2px]">
                  Model S
                </p>

                <p className="text-base text-gray-900 mt-6 flex items-center text-custom-color leading-[16.41px] gap-1 font-bold">
                  <IoMdStar size={15} className="text-yellow-400" />
                  4.9
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={suggestion2}
                alt="Tesla Model X"
                className="w-[120px] h-[90px] rounded-lg"
              />
              <div>
                <p
                  className="text-base leading-[19.36px]  item  text-gray-400 
                "
                >
                  Tesla
                </p>

                <p className="text-sm mt-2 text-[20px] text-custom-color leading-[24.2px]">
                  Model X
                </p>

                <p className="text-base text-gray-900 mt-6 flex items-center text-custom-color leading-[16.41px] gap-1 font-bold">
                  <IoMdStar size={15} className="text-yellow-400" />
                  4.9
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={suggestion3}
                alt="Tesla Solar Roof"
                className="w-[120px] h-[90px] rounded-lg"
              />
               <div>
                <p className="text-base leading-[19.36px]  item  text-gray-400 
                ">Tesla</p>
                
                <p className="text-sm mt-2 text-[20px] text-custom-color leading-[24.2px]">Solar Roof</p>
              


                <p className="text-base text-gray-900 mt-6 flex items-center text-custom-color leading-[16.41px] gap-1 font-bold">
                  <IoMdStar size={15} className="text-yellow-400" />
                  4.9
                </p>
               

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
