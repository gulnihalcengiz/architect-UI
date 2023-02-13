import styles from "../styles";
const NewFeatures = ({ imgUrl, title, subtitle}) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <img src={imgUrl} alt="icon" 
      className="w-1/2 h-1/w object-contain"/>
      <h1 className="mt-[26px] font-bold text-[22px] leading-[30px] text-white">Title {title} </h1>
      <p className="flex-1 mt-[16px] font-normal text-[18px] text-stone-500 leading-[32px]"> {subtitle} </p>
    </div>
  </div>
);

export default NewFeatures;
