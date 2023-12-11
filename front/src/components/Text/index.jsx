import React from "react";

const sizeClasses = {
  txtInterSemiBold13Bluegray700: "font-inter font-semibold",
  txtInterBlack56: "font-black font-inter",
  txtInterBold18: "font-bold font-inter",
  txtInterRegular16Bluegray400: "font-inter font-normal",
  txtInterRegular16Black900: "font-inter font-normal",
  txtInterRegular13: "font-inter font-normal",
  txtInterSemiBold13: "font-inter font-semibold",
  txtInterRegular16: "font-inter font-normal",
  txtInterBlack100: "font-black font-inter",
  txtInterBold24: "font-bold font-inter",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
