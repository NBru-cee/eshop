import React from "react";
import animationData from "../../Assets/animations/24151-ecommerce-animation.json";
import Lottie from "react-lottie";

const Loader = () => {
   const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData,
      renderSettings: {
         preserveAspectRatio: "xMidYMid slice",
      },
   };
   return (
      <div className="w-full h-screen flex items-center justify-center">
         <Lottie options={defaultOptions} width={300} height={300} />
      </div>
   );
};

export default Loader;
