import React from "react";
import bankingPhone from "../assets/banking-phone.svg";
import bankingHole from "../assets/banking-hole.svg";
import bankingColumn from "../assets/banking-column.svg";
import bankingStairs2 from "../assets/banking-stairs2.svg";
import bankingRamp2 from "../assets/banking-ramp2.svg";
import bankingTrack1 from "../assets/banking-track1.svg";
import bankingTube from "../assets/banking-tube.svg";
import bankingHole1 from "../assets/banking-hole1.svg";
import bankingCubes from "../assets/banking-cubes.svg";
import bankingMonster from "../assets/banking-monster.svg";
import bankingStairs1 from "../assets/banking-stairs1.svg";
import bankingRamp1 from "../assets/banking-ramp1.svg";
import bankingTrack2 from "../assets/banking-track2.svg";

const Banking = () => {
  return (
    <div className="h-screen bg-[#00D54B] flex items-center justify-center relative overflow-hidden">
      <div className="w-[340px] h-[147px] -translate-x-[19rem]">
        <span className="text-[40px] leading-[40px] text-white font-agrandirGrandHeavy">
          Banking
        </span>
        <br />
        <span className="text-[16px] leading-[22px] tracking-[0.3px] font-mulish">
          Receive your paycheck, tax returns, and other direct deposits up to
          two days early using your Cash App routing and account number.
        </span>
      </div>
      <div className="z-10 absolute">
        <img src={bankingPhone} alt="banking phone" />
      </div>
      <div className="flex absolute">
        <img src={bankingHole} alt="banking hole" className="-translate-x-[0rem] -translate-y-[17rem]"/>
        <img src={bankingColumn} alt="banking column" className="-translate-x-[15.5rem] -translate-y-[9rem]"/>
        <img src={bankingStairs2} alt="banking stairs2" className="-translate-x-[25rem] translate-y-[9rem]"/>
        <img src={bankingRamp2} alt="banking ramp2" className="-translate-x-[17rem] translate-y-[14rem]"/>
        <img src={bankingTrack1} alt="banking Track1" className="-translate-x-[25rem] -translate-y-[9rem]"/>
        <img src={bankingTube} alt="banking Tube" className="-translate-x-[31.5rem] translate-y-[18rem]"/>
        <img src={bankingHole1} alt="banking Hole1" className="-translate-x-[23.5rem] translate-y-[20.5rem]"/>
        <img src={bankingCubes} alt="banking Cubes" className="-translate-x-[38.5rem] translate-y-[13rem]"/>
        <img src={bankingMonster} alt="banking Monster" className="-translate-x-[31rem] translate-y-[16rem]"/>
        <img src={bankingStairs1} alt="banking Stairs1" className="-translate-x-[40rem] translate-y-[0rem]"/>
        <img src={bankingRamp1} alt="banking Ramp1" className="-translate-x-[73rem] -translate-y-[3rem]"/>
        <img src={bankingTrack2} alt="banking Track2" className="-translate-x-[81rem] -translate-y-[16rem]"/>
      </div>
    </div>
  );
};

export default Banking;
