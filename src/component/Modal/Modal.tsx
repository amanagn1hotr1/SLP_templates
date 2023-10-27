import {useState} from "react";
import { MobileData } from "../../utils/formatter";
import * as CSS from "csstype";
import style from "../Modal/Modal.module.scss";
import {ReactComponent as ArrowIcon} from "../../assets/arrowIcon.svg";
import {ReactComponent as CheckIcon} from "../../assets/checkiconformodal.svg"
type IndexArray<T> = { [index: number]: T };
const Modal = ({
  show,
  setShow,
  data,
  cardId,
  popupStyle
 }:
  {
    show?:boolean;
    setShow:(show:boolean)=>void;
    data:IndexArray<MobileData>;
    cardId:number;
    popupStyle?:CSS.Properties;
  }) => 
  {
  const [toggle, setToggle] = useState<String>("benefits");
  const[border,setBorder]=useState<String>('none');
  const[deg,setDeg]=useState<String>('0deg');
  return (
    <>
      {show ? (
        <div className={style["modalContainer"]}>
          <div className={style["modal-sub-container"]}>
            <div className={style["close"]} onClick={() =>setShow(!show)}>
              <img src='/closeicon3.png' alt="crossIcon"/>
            </div>
            <div
              className={style["modal"]} style={{backgroundColor:data[cardId]?.primaryColor,color:data[cardId]?.benefitColor}}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={style["header"]}>
                <div 
                  className={
                    toggle === "benefits"
                      ? style["header-Active"]
                      : style["header-Inactive"]
                  }
                  style={{color:data[cardId]?.benefitColor}}
                  onClick={() =>{ setToggle("benefits"); setBorder(`2px solid ${data[cardId]?.benefitColor}`)}}
                >
                  Benefits
                </div>
                <div
                  className={
                    toggle === "offers"
                      ? style["header-Active"]
                      : style["header-Inactive"]
                  }
                  onClick={() => setToggle("offers")}
                >
                  Offers
                </div>
              </div>
              <div className={style["benefit"]} style={{boxShadow:`inset 0px -12px 10px 12px ${data[cardId].primaryColor}AA,0px -12px 30px 50px ${data[cardId].primaryColor}FF inset`}}>
                    {toggle === "benefits" ? 
                    (<div className={style["benefit-list"]}>
                    {data[cardId]?.benefits?.map((ele)=>(
                      <div className={style["benefit-listwrapper"]}>
                       <div className={style["benefiticonwrapper"]}>
                        <CheckIcon fill={data[cardId].benefitColor} width={14} height={14}
                        />
                        </div>
                        <div style={{ marginTop: "-2px" ,color:data[cardId].benefitColor}} >
                         {ele}
                        </div>
                        </div>
                    ))}
                       </div>
                    ) : (
                      <>
                      {data[cardId].offers?.map((it:any)=>(
                      <div className={style["offer-list"]}>
                        <div className={style["offer-img"]}>
                          <img
                            className={style["offer-img"]}
                            src={it.iconUrl}
                            alt="img"
                          />
                        </div>
                        <div className={style["offer-title"]}>
                         {it.offerText}
                        </div>
                      </div>
                      ))}
                      </>
                    )
                  }
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;