import React, { useEffect } from "react";
import { getData } from "./modules/dataAction";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content);
  useEffect(() => {
    getData(dispatch);
  }, []);

  let displayContent;
  if (content) {
    displayContent = content.map((video) => {
      return (
        <div className="display-show">
          {" "}
          <img
            src={video.content.images.landscape.url}
            alt={video.content.originalTitle}
          />
        </div>
      );
    });
  }

  return (
    <>
    <div className="header">
      <img
        src="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg"
        alt="logo"
      />
    </div>
    <div >{displayContent}</div>
    <div className='footer'/>
  </>
  )
};

export default App;
