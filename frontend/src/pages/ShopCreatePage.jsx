import React, { useEffect } from "react";
import ShopCreate from "../components/Shop/ShopCreate";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ShopCreatePage = () => {
   const navigate = useNavigate();
   const { isSeller, seller } = useSelector((state) => state.seller);

   useEffect(() => {
      if (isSeller) {
         navigate(`/dashboard`);
      }
   }, []);
   return (
      <div>
         <ShopCreate />
      </div>
   );
};

export default ShopCreatePage;
