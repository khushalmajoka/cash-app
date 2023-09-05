import React from "react";
import investingFloor from "../assets/investing-floor.svg";
import investingGraph1 from "../assets/investing-graph1.svg";
import investingGraph2 from "../assets/investing-graph2.svg";
import investingGraph3 from "../assets/investing-graph3.svg";
import rays from "../assets/rays.svg";
import investingStocks from "../assets/investing-stocks.svg";
import investingBitoin from "../assets/investing-bitcoin.svg";
import apple from "../assets/apple.svg";
import googlePlay from "../assets/google-play.svg";
import twitter from "../assets/investing-twitter.svg";
import twitch from "../assets/investing-twitch.svg";
import instagram from "../assets/investing-instagram.svg";

const Investing = () => {
  return (
    <div className="overflow-hidden h-screen bg-[#00D54B] flex justify-center items-end relative">
      <div className="bg-white h-[300px] w-full">
        <img src={investingFloor} alt="investing floor" className="w-full" />
      </div>
      <div className="flex absolute">
        <img
          src={investingGraph1}
          alt="investing Graph1"
          className="translate-x-[75rem] translate-y-[10rem]"
        />
        <img
          src={investingGraph2}
          alt="investing Graph2"
          className="translate-x-[59rem] -translate-y-[7rem]"
        />
        <img
          src={investingGraph3}
          alt="investing Graph3"
          className="-translate-x-[43rem] translate-y-[10rem]"
        />
        <img
          src={rays}
          alt="rays"
          className="-translate-x-[72rem] -translate-y-[4rem]"
        />
      </div>
      <div className="flex absolute">
        <div className="w-[352px] h-[136px] translate-x-[5rem] -translate-y-[7rem]">
          <span className="w-[336px] h-[40px] text-[22px] leading-[40px] font-agrandirGrandHeavy text-black">
            Stocks
          </span>
          <br />
          <span className="w-[352px] h-[88px] text-[16px] leading-[22px] font-mulish text-black tracking-[0.3px]">
            Whether you’re an expert or just getting started, Cash App is the
            fastest and most accessible way to invest in stocks. Start now with
            as little as $1.
          </span>
        </div>
        <span className="text-[40px] font-agrandirGrandHeavy leading-[40px] text-white translate-x-[11rem] -translate-y-[17rem]">
          Investing
        </span>
        <img
          src={investingStocks}
          alt="investing stocks"
          className="-translate-x-[9rem] -translate-y-[10rem]"
        />
        <img
          src={investingBitoin}
          alt="investing bitcoin"
          className="-translate-x-[5rem] -translate-y-[10rem]"
        />
        <div className="w-[352px] h-[136px] -translate-x-[2rem] -translate-y-[7rem]">
          <span className="w-[336px] h-[40px] text-[22px] leading-[40px] font-agrandirGrandHeavy text-black">
            Bitcoin
          </span>
          <br />
          <span className="w-[352px] h-[88px] text-[16px] leading-[22px] font-mulish text-black tracking-[0.3px]">
            Cash App is the fastest way to convert dollars to bitcoin. From your
            home screen, six taps are all it takes to stack sats, buy an entire
            bitcoin, or just see what it’s all about.
          </span>
        </div>
      </div>
      <div className="w-full flex justify-between absolute ml-16 mr-16 -translate-y-[2rem]">
        <div className="ml-28 w-[50%] flex">
          <button className="flex bg-white text-black w-[170px] tracking-[0.5px] font-agrandirRegular text-sm font-extrabold h-[50px] border rounded-md border-black p-4 items-center justify-evenly mr-5">
            <img src={apple} alt="apple" />
            APP STORE
          </button>
          <button className="flex bg-white text-black border-black w-[176px] tracking-[0.5px] font-agrandirRegular text-sm font-extrabold h-[50px] border rounded-md p-4 items-center justify-between">
            <img src={googlePlay} alt="google play" />
            GOOGLE PLAY
          </button>
        </div>
        <div className="mr-12 flex justify-evenly">
          <span className="text-black text-[10px] leading-3 w-[363px] h-[65px] font-mulish">
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money.
            Bitcoin trading offered by Cash App. Cash App Investing does not
            trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
            App facilitates banking services through Sutton Bank and Lincoln
            Savings Bank, Members FDIC.
          </span>
          <img src={twitch} alt="twitch" className="cursor-pointer ml-10 mr-2" />
          <img src={twitter} alt="twitter" className="cursor-pointer ml-2 mr-2" />
          <img src={instagram} alt="instagram" className="cursor-pointer ml-2 mr-5" />
        </div>
      </div>
    </div>
  );
};

export default Investing;
