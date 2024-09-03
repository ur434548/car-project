import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import ButtonOrange from "../Component/ButtonOrange";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-20  h-[400px] font-poppins ">
      <div className="container mx-auto px-4 ">
        <div className="flex  justify-between items-start">
          {/* Left Section */}
          <div className="mb-8">
            <h3 className="text-[36px] font-bold  w-[236px] h-[90px] text-custom-color leading-[46px] tracking-wide">
              Ready to get started?
            </h3>
            <ButtonOrange
              text=" Get Started"
              className="bg-custom-orange font-[600] mt-10 text-white rounded-[10px] text-base "
            />
          </div>

          {/* Middle Section */}
          <div className="flex-grow flex justify-evenly">
            <div className="text-gray-500 w-[112px]  h-[180px]">
              <h4 className="text-custom-orange font-[600]  leading-[20.57px] tracking-wide text-[17px] mb-4">
                Services
              </h4>
              <ul className="flex gap-5 flex-col">
                <li className="text-[15px] text-custom-color leading-[18.15px] tracking-wide font-[500] opacity-90">
                  Email Marketing
                </li>
                <li className="text-[15px] text-custom-color leading-[18.15px] tracking-wide font-[500] opacity-90">
                  Campaigns
                </li>
                <li className="text-[15px] text-custom-color leading-[18.15px] tracking-wide font-[500] opacity-90">
                  Branding
                </li>
                <li className="text-[15px] text-custom-color leading-[18.15px] tracking-wide font-[500] opacity-90">
                  Offline
                </li>
              </ul>
            </div>
            <div className="text-gray-500 w-[68px]">
              <h4 className="text-custom-orange font-[600] leading-[20.57px] tracking-wide text-[17px] mb-4">
                About
              </h4>
              <ul className="flex gap-5 flex-col">
                <li className="text-[15px] text-custom-color leading-[18.15px] tracking-wide font-[500] opacity-90">
                  Our Story
                </li>
                <li className="text-[15px] text-custom-color leading-[18.15px] tracking-wide font-[500] opacity-90">
                  Benefits
                </li>
                <li className="text-[15px] text-custom-color leading-[18.15px] tracking-wide font-[500] opacity-90">
                  Team
                </li>
                <li className="text-[15px] text-custom-color leading-[18.15px] tracking-wide font-[500] opacity-90">
                  Careers
                </li>
              </ul>
            </div>
            <div className="text-gray-500 w-[79px]">
              <h4 className="text-custom-orange font-[600] leading-[20.57px] tracking-wide text-[17px] mb-4">
                Help
              </h4>
              <ul className="flex gap-5 flex-col">
                <li className="text-[15px] text-custom-color leading-[18.15px] tracking-wide font-[500] opacity-90">
                  FAQs
                </li>
                <li className="text-[15px] text-custom-color leading-[18.15px] tracking-wide font-[500] opacity-90">
                  Contact Us
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-between items-center">
          <div className="text-custom-color">
            <a href="#" className="mr-4 font-[600] text-[15px]">
              Terms & Conditions
            </a>
            <a href="#" className="font-[600] text-[15px]">Privacy Policy</a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-custom-orange">
              <FaFacebookF size={22} />
            </a>
            <a href="#" className="text-custom-orange"> 
              <FaTwitter size={22} />
            </a>
            <a href="#" className="text-custom-orange">
              <FaInstagram size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
