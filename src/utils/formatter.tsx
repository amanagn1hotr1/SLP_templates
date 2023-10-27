export interface Settings
{
    dots?:boolean;
    className?:string,
    slidesToShow?: number;
    infinite?:boolean;
    slidesToScroll?: number;
    autoplay?:boolean;
    swipeToSlide?:boolean,
    easing?:string;
    arrows?:boolean;
    centerMode?:boolean;
    speed?: number;
    initialSlide?: number;
    swipe?:boolean;
    centerPadding?:string;
    adaptiveWidth?: boolean;
}
export interface Pricing
{
   time?:string;
   price?:string;
   _id?:number;
}
export interface MobileData
{
  id?:number;
  primaryColor?:string;
  secondaryColor?:string;
  isRecommended?:boolean;
  tickColor?:string;
  textColor?:string;
  buttonColor?:string;
  buttonTextColor?:string;
  subscriptionName?:string;
  originalPrice?:string;
  discount?:string;
  cardColor?:string;
  benefitColor?:string;
  buttonPlaceholder?:string;
  finalPrice?:number | string;
  benefits?:Array<string>;
  tiers:{
    time:string;
    price:string;
    _id:number;
  }[];
  offers?:{iconUrl:string,offerText:string}[],
};