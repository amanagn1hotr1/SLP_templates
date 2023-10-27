import React from 'react';
import style from "../popup/popup.module.scss";
export const Popup = ({
  coupontext,
  setcoupon,
  modal,
  setModal,
  setId,
  activeIndex
 }:
 {
  coupontext?:string;
  setcoupon: React.Dispatch<React.SetStateAction<string>>;
  modal?:boolean;
  setModal:React.Dispatch<React.SetStateAction<boolean>>;
  setId: React.Dispatch<React.SetStateAction<number | undefined>>;
  activeIndex?:number | undefined;
 }
 ) => {
  const handleClick=()=>
  {
    setModal(!modal);
  }
  return (
  <>
        <div className={style["modalContainer"]}>
          <div className={style["modal-sub-container"]}>
           <div className={style["close"]} onClick={() =>{setModal(!modal); setcoupon(""); setId(undefined)}}><img src='/closeicon3.png'/></div>
            <div className={style["data-wrapper"]}>
            <p className={style["couponStyle"]}>Coupon</p>
            <div className={style["inputwrapper"]}>
            <input type='text' className={style["inputfield"]} onChange={(e)=>setcoupon(e.target.value)} required/>
            <button className={style["buttonstyling"]} onClick={handleClick}>Apply Coupon</button>
            </div>
            </div>
        </div>
        </div>
    </>
  );
}
