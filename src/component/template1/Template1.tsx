import React,{useEffect, useState} from 'react';
import { useRef } from "react";
import {data} from "../../data";
import Slider from 'react-slick';
import * as CSS from "csstype";
import "../template1/slideStyles.scss";
import Modal from '../Modal/Modal';
import { Settings,Pricing } from '../../utils/formatter';
import {ReactComponent as TickSvg} from "../../assets/tickfortemplate1.svg";
import {ReactComponent as Ticksvg} from "../../assets/coupontick.svg";
import { ReactComponent as CouponCross } from "../../assets/couponCross.svg";
import { Popup } from "../popup/Popup";
import { Dropdown2 } from "../Dropdown2/Dropdown2";
import "../template1/template.scss";
export const Template1 = () => {
  const cardRef=useRef<any>();
  const[cardid,setCardId]=useState<number | undefined>();
  const[pricingObj,setPricingObj]=useState<Pricing>();
 const[isOpen,setModal]=useState<boolean>(false);
 const[activeIndex,setActiveIndex]=useState<number | undefined>();
 const[show,setShow]=useState<boolean>(false);
 const[coupon,setCoupon]=useState<string>("");
 const[currentSlide,setSlide]=useState(0);
 const slidesCount=data.length;
 const slideToShow=3;
 const slideRef=useRef<any>();
 
 const settings:Settings = {
    dots: false,
    className:"mainWrapperStyle",
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:false,
    speed:300,
    initialSlide:0,
    swipe:false,
  };
  const dropStyle={
    background:'#FFF',
    borderRadius:'55px',
    fontFamily:`Roboto,sans-serif`,
    width: '276px',
    height: '40px',
    padding: '0px 0.8rem 0rem 1rem',
    marginRight: '0rem',
    fontSize:'16px',
    color:'black',
    cursor:'pointer',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
  };
  const optionstyle=
  {
    color:'black',
    backgroundColor:'#FFF'
    
  }
  const wrapperstyle:CSS.Properties=
  {
   width:'276px',
  }
  useEffect(()=>
  {
    if(isOpen || show)
    {
      document.body.style.overflow="hidden";
    }
    else
    {
      document.body.style.overflowY="scroll";
    }
  },[isOpen,show]);
  return (
    <>
    <h1 className="subshead">Choose your Subscription Plan</h1>
    <div className="carousalwrapper">
    <div
    className="arrowwrapper0"  
    style={{backgroundColor:data[0].primaryColor,visibility:currentSlide!==0?'visible':'hidden'}}
    onClick={()=>{slideRef?.current.slickPrev(); setSlide(currentSlide-1)}}>
     <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" className="arrow-left">
  <g id="Group_22924" data-name="Group 22924" transform="translate(153 762) rotate(180)">
    <circle id="Ellipse_87" data-name="Ellipse 87" cx="27" cy="27" r="27" transform="translate(99 708)" fill="#E7DBF9"/>
    <path id="Path_2885" data-name="Path 2885" d="M9.25,4.5l7.5,7.5-7.5,7.5" transform="translate(138.25 747) rotate(180)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  </g>
</svg>
    </div>
    <Slider {...settings} ref={slideRef}>
     {data.map((item,index)=>
     <div className="commcard" key={index}>
      <div className="mainContentWrapperStyler" 
      style={{backgroundColor:item.primaryColor}} 
       ref={cardRef} 
       onMouseOver={(e)=>e.currentTarget.style.border=`1px solid ${item.buttonColor}`}
       onMouseOut={(e)=>e.currentTarget.style.border='1px solid transparent'}
       > 
       <h4 className="subscriptionTitle">{item.subscriptionName}</h4>
       <span className="discountText1"><p className="originalPrice">₹999/year</p><p className="offer">,Save 60%</p></span>
       <div className="pricetag">
       <h2>₹{(item.id===cardid && pricingObj?.price) || item?.tiers[0]?.price}{(item?.id===cardid &&(pricingObj?.time==='1 year' || pricingObj?.time===undefined ? '/ yr': <p className='stylesmallText'>for {pricingObj?.time}</p>) || '/ yr')}
       </h2>
       </div>
       <div className="mid_wrapper">
       {item?.tiers?.length>1 && 
      <Dropdown2 
      setpricing={setPricingObj}
      values={item.tiers}
      styleObj={{...dropStyle,
      backgroundColor:'#FFF',
      color:'#000',
      border:`0.5px solid ${item.secondaryColor}`,
      }} 
      optionStyle={optionstyle} 
      setCardId={setCardId}
      itemId={item.id}
      wrapperStyle={wrapperstyle}
      arrowColor="#212121"
      />
      } 
       <button className={`actionbuttonclick`} style={{backgroundColor:item.buttonColor}}
      >
       Subscribe
       </button>
       {activeIndex!==item.id?
       (<p
       className='notappliedcoupon0'
       style={{
         color:'#000',
         }}
         onClick={()=>{setActiveIndex(item.id); setModal(!isOpen);}}
       >Apply Coupon</p>):
       (coupon!=null &&<span 
       className="appliedcouponstyling0">
         <Ticksvg stroke={`#30B73B`} className='checkIconStyle' />
       <p>{coupon}</p>
       <CouponCross className="crossStyle"
         onClick={()=>{setCoupon(""); setActiveIndex(undefined);}}/>
       </span>
     )}
       <span className="warningText">Cancel anytime,(Non-refundable)</span>
       </div>
      </div>
      <div className="benefitwrapper0">
      <p style={{fontWeight:'500',fontSize:'13px',color:'#000'}}>Benefits & offers:</p>
      {item?.benefits?.map((it)=>(
      <div className="benefititem1">
        <div className="iconwrapper">
         <TickSvg fill="#000" stroke="#000"/>
         </div>
         <span className="itemText">
         {it}
         </span>   
        </div>
      ))}
      {item?.offers &&<p className="revealarea1" onClick={()=>{setShow(!show); setCardId(item.id)}}>More</p>}
      </div>
    </div>
        )}
    </Slider>
    <div
    className="arrowwrapper0" 
    style={{backgroundColor:data[0].primaryColor,visibility:currentSlide!==slidesCount-slideToShow?'visible':'hidden'}}
    onClick={()=>{slideRef.current.slickNext(); setSlide(currentSlide+1) 
    }}  
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" className="arrow-right">
  <g id="Group_22924" data-name="Group 22924" transform="translate(153 762) rotate(180)">
    <circle id="Ellipse_87" data-name="Ellipse 87" cx="27" cy="27" r="27" transform="translate(99 708)" fill="#E7DBF9"/>
    <path id="Path_2885" data-name="Path 2885" d="M9.25,4.5l7.5,7.5-7.5,7.5" transform="translate(138.25 747) rotate(180)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  </g>
</svg>
    </div>
    <Modal show={show} setShow={setShow} data={data} cardId={cardid} />
  </div>
    {isOpen &&<Popup coupontext={coupon} setcoupon={setCoupon} modal={isOpen} setModal={setModal} setId={setActiveIndex}/>}
  </>
  );
}
