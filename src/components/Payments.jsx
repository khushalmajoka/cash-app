import React from "react";
import floor from "../assets/floor.svg";
import paymentsPhone from "../assets/payments-phone.svg";
import paymentsPillarColumn from "../assets/payments-pillar-column.svg";
import paymentsPillarColumn1 from "../assets/payments-pillar-column1.svg";
import paymentsPillarMedium from "../assets/payments-pillar-medium.svg";
import paymentsPillarLarge from "../assets/payments-pillar-large.svg";
import paymentsPillarSmall from "../assets/payments-pillar-small.svg";

const Payments = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col justify-end relative">
      <div className="w-[353px] h-[147px] translate-x-[21.25rem] translate-y-[23.25rem]">
        <span className="text-[40px] font-agrandirGrandHeavy text-[#00D54B] ">
          Payments
        </span>
        <br />
        <span className="text-[16px] leading-[22px] tracking-[0.5px] font-mulish">
          Send and receive money with anyone, donate to an important cause, or
          tip professionals. Just enter a $cashtag, phone number, or scan their
          QR code to pay.
        </span>
      </div>
      <img
        src={paymentsPhone}
        alt="payments phone"
        className="h-[431.54px] translate-y-[7.25rem]"
      />
      <div className="flex absolute">
        <img
          src={paymentsPillarColumn}
          alt="payments pillar column"
          className="translate-x-[49.5rem] -translate-y-[3rem] h-[497.54px]"
        />
        <img
          src={paymentsPillarMedium}
          alt="payments pillar medium"
          className="translate-x-[24rem] translate-y-[5rem] h-[253.73px]"
        />
        <img
          src={paymentsPillarColumn1}
          alt="payments pillar column1"
          className="-translate-x-[38rem] translate-y-[4.9rem] h-[497.54px]"
        />
        <img
          src={paymentsPillarLarge}
          alt="payments pillar large"
          className="-translate-x-[70rem] translate-y-[5.3rem] h-[333.31px]"
        />
        <img
          src={paymentsPillarMedium}
          alt="payments pillar medium"
          className="-translate-x-[82rem] translate-y-[19rem] h-[253.73px]"
        />
        <img
          src={paymentsPillarMedium}
          alt="payments pillar medium"
          className="-translate-x-[104.9rem] translate-y-[13rem] h-[253.73px]"
        />
        <img
          src={paymentsPillarSmall}
          alt="payments pillar small"
          className="-translate-x-[135rem] translate-y-[15rem] h-[253.73px] scale-50"
        />
        <img
          src={paymentsPillarMedium}
          alt="payments pillar medium"
          className="-translate-x-[154rem] translate-y-[14rem] h-[253.73px]"
        />
        <img
          src={paymentsPillarColumn1}
          alt="payments pillar column1"
          className="-translate-x-[227rem] translate-y-[5rem] h-[497.54px]"
        />
      </div>
      <img
        src={floor}
        alt="floor"
        className="-z-10 h-[300.55px] scale-x-[1.2] mb-5"
      />
    </div>
  );
};

export default Payments;
