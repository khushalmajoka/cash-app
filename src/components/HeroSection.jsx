import React from "react";
import cashappLogo from "../assets/cashapp-logo.svg";
import eyeImage from "../assets/eye.svg";
import stairs from "../assets/stairs.svg";
import cube from "../assets/cube.svg";
import cubes from "../assets/cubes.svg";
import pillars from "../assets/pillars.svg";
import phone from "../assets/phone.svg";
import twitch from "../assets/twitch.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import apple from "../assets/apple.svg";
import googlePlay from "../assets/google-play.svg";
import downArrow from "../assets/down-arrow.svg";

const HeroSection = () => {
  return (
    <div className="bg-black h-screen w-full overflow-hidden">
      <div className="bg-rays bg-no-repeat bg-center h-full scale-[1.16] pl-[110px] pr-[110px] pt-[50px] pb-[50px]">
        <div className="flex justify-center items-center mt-5">
          <div className="w-[20%] flex justify-start">
            <img src={cashappLogo} alt="cashapp logo" className="cursor-pointer w-8 h-11" />
          </div>
          <nav className="w-1/2">
            <ul className="w-full text-white font-agrandirRegular flex justify-evenly tracking-[0.5px] text-xs font-extrabold">
              <li className="cursor-pointer">SIGN IN</li>
              <li className="cursor-pointer">LEGAL</li>
              <li className="cursor-pointer">LICENCES</li>
              <li className="cursor-pointer">SECURITY</li>
              <li className="cursor-pointer">CAREERS</li>
              <li className="cursor-pointer">PRESS</li>
              <li className="cursor-pointer">SUPPORT</li>
              <li className="cursor-pointer">STATUS</li>
              <li className="cursor-pointer">CODEBLOG</li>
            </ul>
          </nav>
          <div className="w-[20%] flex justify-end">
            <img src={eyeImage} alt="eye" className="w-16 h-9" />
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={cube}
            alt="cube"
            className="-translate-x-[2rem] -translate-y-[7rem]"
          />
          <img src={stairs} alt="stairs" className="translate-x-[37rem]" />
          <img
            src={cubes}
            alt="cubes"
            className="-translate-x-[23rem] translate-y-[19rem]"
          />
          <img
            src={pillars}
            alt="pillars"
            className="translate-x-[4rem] translate-y-[21rem]"
          />
          <div className="absolute flex flex-col justify-center items-center font-agrandirGrandHeavy leading-[166px] text-[170px] -space-y-6 -translate-x-[1rem] translate-y-[7.5rem]">
            <span className="text-white">CASH</span>
            <span className="text-white z-10">APP</span>
            <img
              src={phone}
              alt="phone"
              className="translate-x-[2rem] -translate-y-[23rem]"
            />
          </div>
        </div>
        <div className="flex ml-16 mr-16 translate-y-48">
          <div className="w-[50%] flex">
            <button className="flex bg-black text-white w-[176px] tracking-[0.5px] font-agrandirRegular text-sm font-extrabold h-[50px] border rounded-md p-4 items-center justify-evenly mr-5">
              <img src={apple} alt="apple" />
              APP STORE
            </button>
            <button className="flex bg-black text-white w-[176px] tracking-[0.5px] font-agrandirRegular text-sm font-extrabold h-[50px] border rounded-md p-4 items-center justify-between">
              <img src={googlePlay} alt="google play" />
              GOOGLE PLAY
            </button>
          </div>
          <img src={downArrow} alt="down arrow" className="cursor-pointer mr-16 ml-16"/>
          <div className="flex w-1/2 justify-evenly">
            <span className="text-white text-[10px] leading-3 w-[400px] font-mulish">
              Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
              See our BrokerCheck. Investing involves risk; you may lose money.
              Bitcoin trading offered by Cash App. Cash App Investing does not
              trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
              App facilitates banking services through Sutton Bank and Lincoln
              Savings Bank, Members FDIC.
            </span>
            <img src={twitch} alt="twitch" className="cursor-pointer ml-10 mr-2"/>
            <img src={twitter} alt="twitter" className="cursor-pointer ml-2 mr-2"/>
            <img src={instagram} alt="instagram" className="cursor-pointer ml-2 mr-5"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
