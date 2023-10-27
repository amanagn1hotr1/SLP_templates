import React, { useRef, useState,useEffect } from "react";
import mobiledata2 from "../../mobiledata2";
import Slider from "react-slick";
import * as CSS from "csstype";
import { Popup } from "../popup/Popup";
import {Pricing} from "../../utils/formatter";
import Modal from "../Modal/Modal";
import data2 from "../../mobiledata2";
import { Settings } from "../../utils/formatter";
import { ReactComponent as Ticksvg } from "../../assets/coupontick.svg";
import { ReactComponent as CouponCross } from "../../assets/couponCross.svg";
import style from "../template6/template6.module.scss";
import { ReactComponent as Tickicon } from "../../assets/squarecheck.svg";
import { Dropdown2 } from "../Dropdown2/Dropdown2";
export const Template6 = () => {
  const slidesscroll = 1;
  const noOfSlides = mobiledata2.length;
  const [cardid, setCardId] = useState<number | undefined>();
  const [pricingObj, setPricingObj] = useState<Pricing>();
  const [show, setShow] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | undefined>();
  const [currentSlide, setSlide] = useState<number>(0);
  const [isOpen, setModal] = useState<boolean>(false);
  const [coupon, setCoupon] = useState<string>("");
  const [itemid, setId] = useState<number | undefined>(); 
  const slideRef = useRef<any>();
  const settings:Settings = {
    dots: false,
    className: "mainWrapper2",
    speed: 400,
    centerMode: true,
    arrows: false,
    swipe: false,
    centerPadding: "0px",
    adaptiveWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
  };
  const dropStyle:CSS.Properties = {
    background: "#E6E6E6 0% 0% no-repeat padding-box",
    borderRadius: "5px",
    fontFamily: `Roboto,sans-serif`,
    width: "276px",
    border: "0.5px solid #5D5D5D",
    display: "flex",
    padding: "0rem 1rem 0rem 1rem",
    color: "#223F80",
    cursor:'pointer',
    height: "40px",
    fontSize: "16px",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "0px",
    fontWeight: "Regular",
  };
  const wrapperstyle:CSS.Properties = {
    marginTop: "10px",
  };
  const optionstyle = {
    color: "#223F80",
    width:'276px',
    background: "#E6E6E6 0% 0% no-repeat padding-box",
  };
  const arrowcolor="#223F80"; 
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
      <div className="mainCoverwrapper">
        <img
          src="https://bestmediainfo.com/uploads/2018/12/Aajtak-HD_1.jpg"
          alt="Put any url man"
        />
      </div>
      <h1 className="subshead">Choose your Subscription Plan</h1>
      <div className="carousalwrapper2">
        <div
          className="arrowwrapper2"
          style={{ backgroundColor:'#0A083E',visibility: currentSlide !== 0 ? "visible" : "hidden" }}
          onClick={() => {
            slideRef?.current?.slickPrev();
            setSlide(currentSlide - 1);
          }}
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" className="arrow-right">
  <g id="Group_22924" data-name="Group 22924" transform="translate(153 762) rotate(180)">
    <circle id="Ellipse_87" data-name="Ellipse 87" cx="27" cy="27" r="0" transform="translate(99 708)" fill="#0A083E"/>
    <path id="Path_2885" data-name="Path 2885" d="M9.25,4.5l7.5,7.5-7.5,7.5" transform="translate(138.25 747) rotate(180)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  </g>
</svg>
        </div>
        <Slider {...settings} ref={slideRef}>
          {mobiledata2.map((item) => (
            <>
              <div
                className="card1 slide"
                style={{
                  backgroundColor: item.primaryColor,
                  border:item.primaryColor==='#FFF'?'2px solid #E5E5E5':'1px solid transparent'
                }}
              >
                <div className="mainContentWrapper2">
                  <div className="titlewrapper1">
                    <span
                      className="subscriptionTitle"
                      style={{ color: item.textColor }}
                    >
                      {item.subscriptionName}
                    </span>
                  </div>
                  <span className="pricetagStyle">
                    <p style={{ color: item.textColor }}>₹{(item.id===cardid && pricingObj?.price) || item.tiers[0].price}</p>
                    <p
                      className="secText"
                      style={{
                        color:
                          item.cardColor === "#0A083E" ? "#9896AA" : "#9896AA",
                      }}
                    >
                      {(item.id===cardid &&(pricingObj?.time==='1 year' || pricingObj?.time===undefined ? '/ year': `for ${pricingObj.time}`) || '/ year')}
                    </p>
                  </span>
                  <div className="discountText">
                    <p
                      className="originalPrice"
                      style={{
                        color:
                          item.cardColor === "#0A083E" ? "#FEFEFE" : "#9896AA",
                      }}
                    >
                      ₹{item.originalPrice}/year
                    </p>
                    ,
                    <p
                      className="offer"
                      style={{
                        color:
                          item.cardColor === "#0A083E" ? "#FEFEFE" : "#9896AA",
                      }}
                    >
                      Save {item.discount}%
                    </p>
                  </div>
                  <span className="warning2" style={{ color: "#9896AA" }}>
                    Cancel anytime,(Non-refundable)
                  </span>
                  <div className="mid-wrapper">
                    {item?.tiers?.length > 1 && (
                      <Dropdown2
                        setpricing={setPricingObj}
                        values={item.tiers}
                        styleObj={dropStyle}
                        optionStyle={optionstyle}
                        wrapperStyle={wrapperstyle}
                        cardId={cardid}
                        setCardId={setCardId}
                        itemId={item.id}
                        arrowColor={arrowcolor}
                      />
                    )}
                    <div
                      className="cta-wrapper"
                      style={{ display: item.isRecommended? "flex" : "none"}}
                    >
                        <button
                          className="actionbutton2"
                          style={{
                            backgroundColor: item.buttonColor,
                            color: item.buttonTextColor,
                          }}
                        >
                        {item?.id===cardid && (coupon!==undefined && coupon!=undefined)?`Proceed ₹ ${pricingObj?.price}`: `Subscribe`}
                        </button>
                      {activeIndex!== item.id ? (
                        <p
                          className="notappliedcoupon1"
                          style={{
                            display:'flex',
                            color: "#E73E88",
                          }}
                          onClick={() => {
                            setModal(!isOpen);
                            setActiveIndex(item.id);
                          }}
                        >
                          Apply Coupon
                        </p>
                      ) : (
                        <span className="appliedcouponstyling1">
                          <Ticksvg
                            stroke={`#30B73B`}
                            className="checkIconStyle"
                            width={14}
                            height={14}
                          />
                          <p>{coupon}</p>
                          <CouponCross
                            className="crossStyle"
                            onClick={() => {
                              setCoupon("");
                              setActiveIndex(undefined);
                            }}
                          />
                        </span>
                      )}
                    </div>
                    <hr className="linestyle" />
                  </div>
                  <div className="benefitwrapper2">
                    <p
                      className="benefit_heading"
                      style={{ color: item.textColor }}
                    >
                      Benefits & offers:
                    </p>
                    {item?.benefits?.map((it) => (
                      <div className="benefititem2">
                        <Tickicon
                          className="tick"
                          fill={item.textColor}
                          stroke-width={"8px"}
                        />
                        <div className="itemText">
                          <span style={{ color: item.textColor }}>{it}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="cta-wrapper1"
                    style={{ display: item.isRecommended ? "none" : "flex" }}
                  >
                    {(
                      <button
                        className="actionbutton2"
                        style={{
                          backgroundColor: item.buttonColor,
                          color: item.buttonTextColor,
                        }}
                      >
                        Subscribe
                      </button>
                    )}
                    {activeIndex!==item.id?(
                      <p
                        onClick={() => {
                          setActiveIndex(item.id);
                          setModal(!isOpen);
                        }}
                        className="notappliedcoupon1"
                        style={{ color: "#E73E88" }}
                      >
                        Apply Coupon
                      </p>
                    ) : (
                      <span className="appliedcouponstyling1">
                          <Ticksvg
                            stroke={`#30B73B`}
                            className="checkIconStyle"
                            width={14}
                            height={14}
                          />
                          <p>{coupon}</p>
                          <CouponCross
                            className="crossStyle"
                            onClick={() => {
                              setCoupon("");
                              setActiveIndex(undefined);
                            }}
                          />
                        </span>

          )}
                  </div>
                  {item?.offers &&<p className="revealarea1" style={{color:item.textColor}} onClick={()=>{setShow(!show); setCardId(item.id)}}>More Offer</p>}
                </div>
              </div>
            </>
          ))}
        </Slider>
        <div
          className="arrowwrapper2"
          style={{
            backgroundColor:'#0A083E',
            visibility:
              currentSlide !== noOfSlides - slidesscroll ? "visible" : "hidden",
          }}
          onClick={() => {
            slideRef.current.slickNext();
            setSlide(currentSlide + 1);
          }}
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" className="arrow-left">
  <g id="Group_22924" data-name="Group 22924" transform="translate(153 762) rotate(180)">
    <circle id="Ellipse_87" data-name="Ellipse 87" cx="27" cy="27" r="27" transform="translate(99 708)" fill="#0A083E"/>
    <path id="Path_2885" data-name="Path 2885" d="M9.25,4.5l7.5,7.5-7.5,7.5" transform="translate(138.25 747) rotate(180)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  </g>
</svg>
        </div>
      </div>
      <Modal show={show} setShow={setShow} data={data2} cardId={cardid} />
      {isOpen && (
        <Popup
          coupontext={coupon}
          setId={setActiveIndex}
          modal={isOpen}
          setModal={setModal}
          setcoupon={setCoupon}
          activeIndex={activeIndex}
        />
      )}
    </>
  );
};