import { createContext, useState } from "react";

export const FortniteInformerContext = createContext();

const FortniteInformerProvider = ({ children }) => {
  const [isOpenRewardDetail, setIsOpenRewardDetail] = useState(false);
  const [rewardToShow, setRewardToShow] = useState([])
  
  const openRewardDetail = () => {
    setIsOpenRewardDetail(true);
  };

  const closeRewardDetail = () => {
    setIsOpenRewardDetail(false);
  };

  return (
    <FortniteInformerContext.Provider
      value={{
        isOpenRewardDetail,
        rewardToShow,
        openRewardDetail,
        closeRewardDetail,
        setRewardToShow
      }}
    >
      {children}
    </FortniteInformerContext.Provider>
  );
};

export default FortniteInformerProvider;
