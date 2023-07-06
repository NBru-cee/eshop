import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import styles from "../../../styles/styles";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const WishList = ({ setOpenWishList }) => {
      const wishListData = [
            {
                  name: "Iphone 14pro max 8/256gb ram silver color",
                  desciption:
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Necessitatibus molestiae assumenda voluptas consequuntur laborum quis expedita pariatur! Voluptatem exercitationem, quisquam sit voluptatum, corrupti consectetur illum enim eum sapiente reprehenderit culpa!",
                  price: 945,
            },
            {
                  name: "Iphone 14pro max 8/256gb ram silver color",
                  desciption:
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Necessitatibus molestiae assumenda voluptas consequuntur laborum quis expedita pariatur! Voluptatem exercitationem, quisquam sit voluptatum, corrupti consectetur illum enim eum sapiente reprehenderit culpa!",
                  price: 245,
            },
            {
                  name: "Iphone 14pro max 8/256gb ram silver color",
                  desciption:
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Necessitatibus molestiae assumenda voluptas consequuntur laborum quis expedita pariatur! Voluptatem exercitationem, quisquam sit voluptatum, corrupti consectetur illum enim eum sapiente reprehenderit culpa!",
                  price: 645,
            },
      ];
      return (
            <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
                  <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
                        <div>
                              <div className="flex w-full justify-end pt-5 pr-5">
                                    <RxCross1
                                          size={25}
                                          className="cursor-pointer"
                                          onClick={() => setOpenWishList(false)}
                                    />
                              </div>
                              {/* ITEM LENGTH */}
                              <div className={`${styles.normalFlex} p-4`}>
                                    <AiOutlineHeart size={25} />
                                    <h5 className="pl-2 text-[20px] font-[500]">
                                          3 items
                                    </h5>
                              </div>
                              {/* CART SINGLE ITEM */}
                              <br />
                              <div className="w-full border-t">
                                    {wishListData.map((i, index) => (
                                          <WishListSingle
                                                key={index}
                                                data={i}
                                          />
                                    ))}
                              </div>
                        </div>
                  </div>
            </div>
      );
};

const WishListSingle = ({ data }) => {
      const [value, setValue] = useState(1);
      const totalPrice = data.price * value;

      return (
            <div className="border-b p-4">
                  <div className="w-full flex item-center">
                        <RxCross1 className=" cursor-pointer" />
                        <img
                              src="/images/productsData/1802NL02_1.webp"
                              alt="cart image"
                              className="w-[80px] h-[80[px] ml-2"
                        />

                        <div className="pl-[5px]">
                              <h1>{data.name}</h1>
                              <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
                                    US${totalPrice}
                              </h4>
                        </div>
                        <div>
                              <BsCartPlus
                                    className="cursor-pointer"
                                    title="Add to cart"
                                    size={20}
                              />
                        </div>
                  </div>
            </div>
      );
};

export default WishList;
