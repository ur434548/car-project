import React from "react";
import group from "../assests/pics/group.png";
import { FaCheckSquare } from "react-icons/fa";
import ButtonWhite from "../Component/ButtonWhite";

export default function BestService() {
  return (
    <div className="w-[1440px] font-poppins flex mt-32 gap-16 mx-auto">
      <div>
        <img src={group} alt="pic" className="w-[954px] h-[955px]" />
      </div>
      <div className="w-[456px]">
        <h4 className="text-custom-color uppercase font-medium text-lg opacity-80	mb-6 mx-auto">
          best services
        </h4>
        <h1 className="text-custom-color leading-[76px] tracking-wide items-center text-[66px] font-bold font-poppins">
          We <span className="text-custom-orange">expert</span> in car rental
        </h1>
        <div className="w-[448px] mt-16 h-[132px] leading-[24px] tracking-wide text-custom-color text-base ">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            quasi omnis blanditiis cum incidunt quos quis commodi impedit
            ratione,rnatur?
          </p>
          <p className="mt-4 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            officiis venia
          </p>
        </div>

        <div className="w-[453px] h-[500px]">
          <div className="h-[123px] flex gap-5 mt-16">
            <div>
              <FaCheckSquare className="text-custom-orange w-[24px] h-[24px]" />
            </div>
            <div>
              <h2 className="text-xl font-[600] leading-[24.2px] tracking-wide mt-[-2px]  text-custom-color ">
                Deals for every budjet
              </h2>
              <p className="font-base leading-[24px] tracking-wide mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                deserunt in ab sequi corrupti aut conse
              </p>
            </div>
          </div>
          {/* 2 */}

          <div className="h-[123px] flex  gap-5">
            <div>
              <FaCheckSquare className="text-custom-orange w-[24px] h-[24px]" />
            </div>
            <div>
              <h2 className="text-xl font-[600] leading-[24.2px] tracking-wide mt-[-2px]  text-custom-color ">
                Best price guranteed
              </h2>
              <p className="font-base leading-[24px] tracking-wide mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                deserunt in ab sequi corrupti aut conse
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="h-[123px] flex  gap-5 ">
            <div>
              <FaCheckSquare className="text-custom-orange w-[24px] h-[24px] " />
            </div>
            <div>
              <h2 className="text-xl font-[600] leading-[24.2px] tracking-wide mt-[-2px]  text-custom-color ">
                Support 24/7
              </h2>
              <p className="font-base leading-[24px] tracking-wide mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                deserunt in ab sequi corrupti aut conse
              </p>
            </div>
          </div>
          <ButtonWhite text=" Let's Try" className="font-base w-[117px] h-[39px] leading-[19.36px] tracking-wide font-[600]" />
        </div>
      </div>
    </div>
  );
}
