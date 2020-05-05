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
        <img
          src={video.content.images.boxart.url}
          alt={video.content.originalTitle}
        />
      );
    });
  }

  return <div>{displayContent}</div>;
};

export default App;
