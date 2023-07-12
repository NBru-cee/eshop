import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { backendUrl } from "../../../server";

const DashboardHeader = () => {
   const { seller } = useSelector((state) => state.seller);
   return (
      <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
         <div>
            <Link to="/dashboard">
               <img src="/images/logo.svg" alt="logo" />
            </Link>
         </div>
         <div className="flex items-center">
            <div className="flex items-center mr-4">
               <Link to="/dashboard/coupons" className="800px:block hidden">
                  <AiOutlineGift
                     className="mx-5 cursor-pointer"
                     size={30}
                     color="#555"
                  />
               </Link>
               <Link to="/dashboard-events" className="800px:block hidden">
                  <MdOutlineLocalOffer
                     className="mx-5 cursor-pointer"
                     size={30}
                     color="#555"
                  />
               </Link>
               <Link to="/dashboard-products" className="800px:block hidden">
                  <FiShoppingBag
                     className="mx-5 cursor-pointer"
                     size={30}
                     color="#555"
                  />
               </Link>
               <Link to="/dashboard-orders" className="800px:block hidden">
                  <FiPackage
                     className="mx-5 cursor-pointer"
                     size={30}
                     color="#555"
                  />
               </Link>
               <Link to="/dashboard-messages" className="800px:block hidden">
                  <BiMessageSquareDetail
                     className="mx-5 cursor-pointer"
                     size={30}
                     color="#555"
                  />
               </Link>
               <Link to={`/shop/${seller._id}`}>
                  <img
                     src={`${backendUrl}${seller.avatar}`}
                     alt="seller avatar"
                     className="h-[50px] w-[50px] rounded-full object-cover"
                  />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default DashboardHeader;
