import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../static/data";
import {
   AiOutlineHeart,
   AiOutlineSearch,
   AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { backendUrl } from "../../server";
import Cart from "./Cart/Cart";
import WishList from "./WishList/WishList";
import { RxCross1 } from "react-icons/rx";

const Header = ({ activeHeading }) => {
   const { isAuthenticated, user } = useSelector((state) => state.user);
   const [searchTerm, setSearchTerm] = useState("");
   const [searchData, setSearchData] = useState([]);
   const [isActive, setIsActive] = useState(false);
   const [dropDown, setDropDown] = useState(false);
   const [openCart, setOpenCart] = useState(false);
   const [openWishList, setOpenWishList] = useState(false);
   const [open, setOpen] = useState(false);

   const handleSearchChange = (e) => {
      const term = e.target.value;
      setSearchTerm(term);
      const filteredProducts =
         productData &&
         productData.filter((product) =>
            product.name.toLowerCase().includes(term.toLowerCase())
         );
      setSearchData(filteredProducts);
   };

   window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
         setIsActive(true);
      } else {
         setIsActive(false);
      }
   });

   return (
      <>
         <div className={`${styles.section}`}>
            <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
               <div>
                  <Link to="/">
                     <img src="/images/logo.svg" alt="logo" />
                  </Link>
               </div>
               {/* SEARCH BOX */}
               <div className="w-[50%] relative">
                  <input
                     type="text"
                     placeholder="Search Product.."
                     value={searchTerm}
                     onChange={handleSearchChange}
                     className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                  />
                  <AiOutlineSearch
                     size={30}
                     className="absolute right-2 top-1.5 cursor-pointer"
                  />
                  {searchData && searchData.length !== 0 ? (
                     <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                        {searchData &&
                           searchData.map((i, index) => {
                              const d = i.name;
                              const productName = d.replace(/\s+/g, "-");
                              return (
                                 <Link
                                    to={`product/${productName}`}
                                    key={index}
                                 >
                                    <div className="w-full flex items-start py-3">
                                       <img
                                          src={i.imageUrl[0].url}
                                          alt="searh image"
                                          className="w-[40px] h-[40px] mr-[10px]"
                                       />
                                       <h1>{i.name}</h1>
                                    </div>
                                 </Link>
                              );
                           })}
                     </div>
                  ) : null}
               </div>
               <div className={`${styles.button}`}>
                  <Link to="/shop-create">
                     <h1 className="text-white flex items-center">
                        Become Seller
                        <IoIosArrowForward className="ml-1" />
                     </h1>
                  </Link>
               </div>
            </div>
         </div>
         {/* lower section */}
         <div
            className={`${
               isActive ? "shadow-sm fixed top-0 left-0 z-10" : null
            } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
         >
            <div
               className={`${styles.section} relative ${styles.normalFlex} justify-between`}
            >
               {/* CATEGORIES */}
               <div onClick={() => setDropDown(!dropDown)}>
                  <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
                     <BiMenuAltLeft
                        size={30}
                        className="absolute top-3 left-2"
                     />
                     <button
                        className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
                     >
                        All Categories
                     </button>
                     <IoIosArrowDown
                        size={20}
                        className="absolute right-2 top-4 cursor-pointer"
                        onClick={() => setDropDown(!dropDown)}
                     />
                     {dropDown ? (
                        <DropDown
                           categoriesData={categoriesData}
                           setDropDown={setDropDown}
                        />
                     ) : null}
                  </div>
               </div>
               {/* NAV ITEMS */}
               <div className={`${styles.normalFlex}`}>
                  <Navbar active={activeHeading} />
               </div>

               {/* RIGHT SIDE */}
               <div className="flex">
                  <div className={`${styles.normalFlex}`}>
                     {/* WISHLIST */}
                     <div
                        className="relative cursor-pointer mr-[15px]"
                        onClick={() => setOpenWishList(true)}
                     >
                        <AiOutlineHeart
                           size={30}
                           color="rgb(255 255 255 / 83%)"
                        />
                        <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top p-0 m-0 text-white text-[12px] leading-tight text-center">
                           0
                        </span>
                     </div>
                     {/* CART */}
                     <div
                        className="relative cursor-pointer mr-[15px]"
                        onClick={() => setOpenCart(true)}
                     >
                        <AiOutlineShoppingCart
                           size={30}
                           color="rgb(255 255 255 / 83%)"
                        />
                        <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top p-0 m-0 text-white text-[12px] leading-tight text-center">
                           1
                        </span>
                     </div>
                     {/* PROFILE */}
                     <div className={`${styles.normalFlex}`}>
                        <div className="relative cursor-pointer mr-[15px]">
                           {isAuthenticated ? (
                              <Link to="/profile">
                                 <img
                                    src={`${backendUrl}${user.avatar}`}
                                    alt="profile picture"
                                    className="w-[40px] h-[40px] rounded-full"
                                 />
                              </Link>
                           ) : (
                              <Link to="/login">
                                 <CgProfile
                                    size={30}
                                    color="rgb(255 255 255 / 83%)"
                                 />
                              </Link>
                           )}
                        </div>
                     </div>
                     {/* CART POPUP */}
                     {openCart ? <Cart setOpenCart={setOpenCart} /> : null}
                     {/* WISHLIST POPUP */}
                     {openWishList ? (
                        <WishList setOpenWishList={setOpenWishList} />
                     ) : null}
                  </div>
               </div>
            </div>
         </div>
         {/* mobile header */}
         <div
            className={`w-full h-[60px] bg-white z-50 top-0 left-0 shadow-sm 800px:hidden ${
               isActive === true ? "shadow-sm fixed top-0 left-0 z-10" : ""
            }`}
         >
            <div className="w-full flex items-center justify-between">
               <div>
                  <BiMenuAltLeft
                     size={40}
                     className="ml-4 cursor-pointer"
                     onClick={() => setOpen(true)}
                  />
               </div>
               <div>
                  <Link to="/">
                     <img
                        src="/images/logo.svg"
                        alt=""
                        className="mt-3 cursor-pointer"
                     />
                  </Link>
               </div>
               <div>
                  <div className="relative mr-[20px]">
                     <AiOutlineShoppingCart size={30} />
                     <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top p-0 m-0 text-white text-[12px] leading-tight text-center">
                        1
                     </span>
                  </div>
               </div>
            </div>
            {/* header sidebar */}
            {open && (
               <div className="fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0">
                  <div className="fixed bg-white h-screen top-0 left-0 z-10 overflow-y-scroll">
                     <div className="w-full justify-between flex pr-3">
                        <div>
                           <div className="relative mt-[15px]">
                              <AiOutlineHeart
                                 className="mt-5 ml-3 cursor-pointer"
                                 size={30}
                              />
                              <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top p-0 m-0 text-white text-[12px] leading-tight text-center">
                                 0
                              </span>
                           </div>
                        </div>
                        <RxCross1
                           className="ml-4 mt-5"
                           size={30}
                           onClick={() => setOpen(false)}
                        />
                     </div>
                     <div className="my-8 w-[92%] m-auto h-[40px] relative">
                        <input
                           type="text"
                           placeholder="Search Product.."
                           value={searchTerm}
                           onChange={handleSearchChange}
                           className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                        />
                        {searchData && (
                           <div className="absolute bg-white z-10 shadow left-0 p-3 w-full">
                              {searchData.map((i, index) => {
                                 const d = i.name;
                                 const productName = d.replace(/\s+/g, "-");

                                 return (
                                    <Link
                                       to={`/product/${productName}`}
                                       key={index}
                                    >
                                       <div className="flex items-center">
                                          <img
                                             src={i.imageUrl[0].url}
                                             alt=""
                                             className="w-[50px] mr-2"
                                          />
                                          <h5>{i.name}</h5>
                                       </div>
                                    </Link>
                                 );
                              })}
                           </div>
                        )}
                     </div>
                     <Navbar active={activeHeading} />
                     <div className={`${styles.button} ml-4 rounded-p[4px]`}>
                        <Link to="/seller">
                           <h1 className="text-white flex items-center">
                              Become Seller
                              <IoIosArrowForward className="ml-1" />
                           </h1>
                        </Link>
                     </div>
                     <br />
                     <div className="flex w-full justify-center">
                        {isAuthenticated ? (
                           <Link to="/profile">
                              <div>
                                 <img
                                    src={`${backendUrl}${user.avatar}`}
                                    alt=""
                                    className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                                 />
                              </div>
                           </Link>
                        ) : (
                           <div className="border-[1px] border-black h-[40px] rounded-md p-2">
                              <Link
                                 to="/login"
                                 className="text-[15px] pr-[10px] text-[#000000b7]"
                              >
                                 Login /
                              </Link>
                              <Link
                                 className="text-[15px] pr-[10px] text-[#000000b7]"
                                 to="/signup"
                              >
                                 Signup
                              </Link>
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            )}
         </div>
      </>
   );
};

export default Header;
