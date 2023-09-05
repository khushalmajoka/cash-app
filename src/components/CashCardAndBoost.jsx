import React from "react";
import boostStairs1 from "../assets/boost-stairs1.svg";
import boostStairs2 from "../assets/boost-stairs2.svg";
import boostPhone from "../assets/boost-phone.svg";
import boostBurger from "../assets/boost-burger.svg";
import boostCard from "../assets/boost-card.svg";
import boostHand from "../assets/boost-hand.svg";
import boostCoffee from "../assets/boost-coffee.svg";
import boostShoe from "../assets/boost-shoe.svg";

const CashCardAndBoost = () => {
  return (
    <div className="h-screen bg-black overflow-hidden relative">
      <div className="-z-10 flex justify-between">
        <img src={boostStairs2} alt="boost stairs2" />
        <img src={boostStairs1} alt="boost stairs1" />
      </div>
      <div className="flex absolute">
        <div className="w-[352px] h-[203px] flex flex-col translate-x-[22rem] -translate-y-[33rem]">
          <span className="w-[336px] text-[40px] font-agrandirGrandHeavy text-[#00D54B] leading-[40px]">Cash Card & Boost</span>
          <span className="w-[336px] text-[16px] font-mulish text-white leading-[22px] tracking-[0.3px] mt-2">
            The Cash Card is a free, customizable debit card that lets you pay
            online and in stores. It’s the only way to get Boosts—instant
            discounts that work at places where you want to spend.
          </span>
        </div>
        <img
          src={boostPhone}
          alt="boost phone"
          className="translate-x-[25rem] -translate-y-[38rem]"
        />
        <div>
        <img
          src={boostBurger}
          alt="boost burger"
          className="translate-x-[31rem] -translate-y-[23rem]"
        />
        <img
          src={boostCard}
          alt="boost card"
          className="translate-x-[37rem] -translate-y-[40rem]"
        />
        <img
          src={boostHand}
          alt="boost hand"
          className="translate-x-[44rem] -translate-y-[55rem]"
        />
        <img
          src={boostCoffee}
          alt="boost coffee"
          className="translate-x-[37rem] -translate-y-[34rem]"
        />
        <img
          src={boostShoe}
          alt="boost shoe"
          className="translate-x-[54rem] -translate-y-[48rem]"
        />
        </div>
      </div>
    </div>
  );
};

export default CashCardAndBoost;
