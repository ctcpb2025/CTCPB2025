import React from "react";

const Style = {
  background: "none",
  color: "inherit",
  border: "none",
  padding: 0,
  font: "inherit",
  cursor: "pointer",
  outline: "inherit",
  textAlign: "right",
};

const Notification = () => {

  return (
    <>
        <div class="alert alert-success d-flex" role="alert">
        <div class="alignleft"></div>
        <div class="aligncenter"> The 46<sup>th</sup> Annual Meeting of Plant Tissue Culture Association, India is scheduled to be held from <strong>24<sup>th</sup> - 26<sup>th</sup> Feb 2025</strong> </div>
        <div class="alignright"> <button style={Style} type="button" class="close" data-dismiss="alert">{""}{""}</button> </div>
        </div>
    </>
  );
};

export default Notification;
