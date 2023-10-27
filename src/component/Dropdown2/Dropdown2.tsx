import React, { useRef, useState } from 'react';
import * as CSS from "csstype";
import {Pricing} from "../../utils/formatter";
import styles from "../Dropdown2/dropdown2.module.scss";
import {ReactComponent as ArrowDown} from "../../assets/dropdown.svg";
export const Dropdown2 =({values,styleObj,optionStyle,setpricing,setCardId,itemId,arrowColor,borderStyle,wrapperStyle}:
{
values:Array<Pricing>;
styleObj?:CSS.Properties;
optionStyle?:CSS.Properties;
setpricing:React.Dispatch<React.SetStateAction<Pricing | undefined>>;
setCardId:React.Dispatch<React.SetStateAction<number | undefined>>;
itemId?:number;
arrowColor?:string;
borderStyle?:string;
wrapperStyle?:CSS.Properties; 
cardId?:number | undefined; 
}) => 
{
const[isOpen,setOpen]=useState(false);
const optionCard=useRef<any>();
const[dffdf,setdffdf]=useState<Pricing>({
  price:values[0]?.price,
  time:values[0]?.time,
  _id:values[0]?._id
  });
const[deg,setDeg]=useState<string>('0deg');  
  return (
    <div className="selectwrapper" onClick={
      ()=>{setOpen(!isOpen); setDeg(!isOpen?'180deg':'0deg'); setCardId(itemId);}}
            style={{...wrapperStyle,backgroundColor:borderStyle}}  
    >
     <button style={{...styleObj}}>{dffdf.time}
     <span 
      style={{
        display:'flex',
        alignItems:'center', 
      }}
     >
      <p>₹{dffdf.price}</p>
     <ArrowDown fill={arrowColor} style={{transform:`rotate(${deg})`,transition:'0.2s ease-in-out'}}/>
     </span>
     </button>
     {isOpen &&
     <div className="option" style={{...optionStyle}} ref={optionCard}
     onClick={()=>{
      optionCard.current.style.display="none";
     setDeg('0deg');
     }}></div>
     }
     { values?.map((item:any)=>(
      <div className='optionmain' onClick={()=>
      { 
        setpricing({price:item.price,time:item.time,_id:item._id});
        setdffdf({price:item.price,time:item.time,_id:item._id});
        }}
        >
      <span className="option-leftside">
      <p>
      {item.time}
      </p>
      <p>Cancel anytime(Non-refundable)</p>
      </span>  
      <span className='option-rightside'>
      <p>₹{item.price}</p>
       <div className='offersmall'>
       <p className='original'>₹999/year,</p>
        <p>Save 60%</p>
       </div>
      </span>
      </div>  
      ))}
     </div>
  );
}
