import React from "react";

export default function ImageGuaranteed(props) {
  let classes = props.className;
  return (
    <img
      className={classes}
      src={props.preferredImg}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = props.placeholderImg;
        e.target.alt = props.alt;
      }}
    />
  );
}

// recimo...
// <ImageGuaranteed
//   preferredImg={"nekimrtvilink.jpg"}
//   placeholderImg="/Profile_avatar_placeholder_large.png"
// />
