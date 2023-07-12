import React from "react";
import { useSelector } from "react-redux";
import { backendUrl } from "../../server";

const ShopInfo = ({ isOwner }) => {
   const { seller } = useSelector((state) => state.seller);
   return (
      <div>
         <div className="w-full py-5">
            <div className="w-full flex items-center justify-center">
               <img
                  src={`${backendUrl}${seller?.avatar}`}
                  alt="shop image"
                  className="w-[150px] h-[150px] object-cover rounded-full"
               />
            </div>
            <h3 className="text-center py-2 text-[20px]">{seller.name}</h3>
            <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
               {seller.description}
            </p>
         </div>
         <div className="p-3">
            <h5 className="font-[600]">Address</h5>
            <h4 className="text-[#000000a6]">{seller.address}</h4>
         </div>
         <div className="p-3">
            <h5 className="font-[600]">Phone Number</h5>
            <h4 className="text-[#000000a6]">{seller.phoneNumber}</h4>
         </div>
         <div className="p-3">
            <h5 className="font-[600]">Total Products</h5>
            <h4 className="text-[#000000a6]">10</h4>
         </div>
         <div className="p-3">
            <h5 className="font-[600]">Shop Ratings</h5>
            <h4 className="text-[#000000a6]">4/5</h4>
         </div>
         <div className="p-3">
            <h5 className="font-[600]">Joined On</h5>
            <h4 className="text-[#000000a6]">
               {seller.createdAt.slice(0, 10)}
            </h4>
         </div>
      </div>
   );
};

export default ShopInfo;
