import React, { useState } from "react";
import { backendUrl } from "../../server";
import { useSelector } from "react-redux";
import {
      AiOutlineArrowRight,
      AiOutlineCamera,
      AiOutlineDelete,
} from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { MdOutlineTrackChanges } from "react-icons/md";

const ProfileContent = ({ active }) => {
      const { user } = useSelector((state) => state.user);
      const [name, setName] = useState(user && user.name);
      const [email, setEmail] = useState(user && user.email);
      const [phone, setPhone] = useState();
      const [zipCode, setZipCode] = useState();
      const [address1, setAddress1] = useState();
      const [address2, setAddress2] = useState();

      const handleSubmit = (e) => {
            e.preventDefault();
      };

      return (
            <div className="w-full">
                  {/* profile page */}
                  {active === 1 && (
                        <div className="p-4 flex flex-col items-center justify-center">
                              <div className="flex justify-center w-full">
                                    <div className="relative">
                                          <img
                                                src={`${backendUrl}${user?.avatar}`}
                                                alt=""
                                                className="rounded-full w-[200px] h-[200px] object-cover border-[3px] border-[#3ad132]"
                                          />
                                          <div className="w-[30px] h-[30px] bg-[#e3e9ee] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[10px] right-[10px]">
                                                <AiOutlineCamera />
                                          </div>
                                    </div>
                              </div>
                              <br />
                              <br />
                              <div className="w-full px-5">
                                    <form
                                          onSubmit={handleSubmit}
                                          aria-required={true}
                                    >
                                          <div className="w-full block 800px:flex pb-3">
                                                <div className="w-full 800px:w-[50%]">
                                                      <label
                                                            className="block pb-2"
                                                            htmlFor="name"
                                                      >
                                                            Full name
                                                      </label>
                                                      <input
                                                            type="text"
                                                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                                            required
                                                            value={name}
                                                            onChange={(e) =>
                                                                  setName(
                                                                        e.target
                                                                              .value
                                                                  )
                                                            }
                                                      />
                                                </div>
                                                <div className="w-full 800px:w-[50%]">
                                                      <label
                                                            className="block pb-2"
                                                            htmlFor="email"
                                                      >
                                                            Email Address
                                                      </label>
                                                      <input
                                                            type="text"
                                                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                                            required
                                                            value={email}
                                                            onChange={(e) =>
                                                                  setEmail(
                                                                        e.target
                                                                              .value
                                                                  )
                                                            }
                                                      />
                                                </div>
                                          </div>

                                          <div className="w-full block 800px:flex pb-3">
                                                <div className="w-full 800px:w-[50%]">
                                                      <label
                                                            className="block pb-2"
                                                            htmlFor="phone"
                                                      >
                                                            Phone number
                                                      </label>
                                                      <input
                                                            type="number"
                                          className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                                            required
                                                            value={phone}
                                                            onChange={(e) =>
                                                                  setPhone(
                                                                        e.target
                                                                              .value
                                                                  )
                                                            }
                                                      />
                                                </div>
                                                <div className="w-full 800px:w-[50%]">
                                                      <label
                                                            className="block pb-2"
                                                            htmlFor="zipCode"
                                                      >
                                                            Zip Code
                                                      </label>
                                                      <input
                                                            type="number"
                                          className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                                            required
                                                            value={zipCode}
                                                            onChange={(e) =>
                                                                  setZipCode(
                                                                        e.target
                                                                              .value
                                                                  )
                                                            }
                                                      />
                                                </div>
                                          </div>

                                          <div className="w-full block 800px:flex pb-3">
                                                <div className="w-full 800px:w-[50%]">
                                                      <label
                                                            className="block pb-2"
                                                            htmlFor="address1"
                                                      >
                                                            Address 1
                                                      </label>
                                                      <input
                                                            type="number"
                                          className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                                            required
                                                            value={address1}
                                                            onChange={(e) =>
                                                                  setAddress1(
                                                                        e.target
                                                                              .value
                                                                  )
                                                            }
                                                      />
                                                </div>
                                                <div className="w-full 800px:w-[50%]">
                                                      <label
                                                            className="block pb-2"
                                                            htmlFor="address2"
                                                      >
                                                            Address 2
                                                      </label>
                                                      <input
                                                            type="number"
                                          className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                                            required
                                                            value={address2}
                                                            onChange={(e) =>
                                                                  setAddress2(
                                                                        e.target
                                                                              .value
                                                                  )
                                                            }
                                                      />
                                                </div>
                                          </div>

                                          <div className="w-full flex items-center justify-center">
                                                <input
                                                      type="submit"
                                                      className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                                                      required
                                                      value="Update"
                                                />
                                          </div>
                                    </form>
                              </div>
                        </div>
                  )}
                  {/* order page */}
                  {active === 2 && (
                        <div>
                              <AllOrders />
                        </div>
                  )}
                  {/* refund page */}
                  {active === 3 && (
                        <div>
                              <AllRefundOrders />
                        </div>
                  )}
                  {/* track order page */}
                  {active === 5 && (
                        <div>
                              <TrackOrder />
                        </div>
                  )}
                  {/* payment methods */}
                  {active === 6 && (
                        <div>
                              <PaymentMethod />
                        </div>
                  )}
                  {/* user address */}
                  {active === 7 && (
                        <div>
                              <Address />
                        </div>
                  )}
            </div>
      );
};

const AllOrders = () => {
      const orders = [
            {
                  _id: "859840904ipojfljdfvorei",
                  orderItems: [
                        {
                              name: "Iphone 14 pro max",
                        },
                  ],
                  totalPrice: 120,
                  orderStatus: "Processing",
            },
      ];

      const columns = [
            {
                  field: "id",
                  headerName: "Order ID",
                  minWidth: 150,
                  flex: 0.7,
            },
            {
                  field: "status",
                  headerName: " Status",
                  minWidth: 130,
                  flex: 0.7,
                  cellClassName: (params) => {
                        return params.row.status === "Delivered"
                              ? "greenColor"
                              : "redColor";
                  },
            },
            {
                  field: "itemQty",
                  headerName: "Items Qty",
                  minWidth: 130,
                  flex: 0.7,
            },
            {
                  field: "total",
                  headerName: " Total",
                  minWidth: 130,
                  flex: 0.8,
            },
            {
                  field: " ",
                  headerName: " ",
                  minWidth: 150,
                  flex: 1,
                  type: "number",
                  sortable: false,
                  renderCell: (params) => {
                        return (
                              <>
                                    <Link to={`/order/${params.id}`}>
                                          <Button>
                                                <AiOutlineArrowRight
                                                      size={20}
                                                />
                                          </Button>
                                    </Link>
                              </>
                        );
                  },
            },
      ];

      const row = [];

      orders &&
            orders.forEach((item) => {
                  row.push({
                        id: item._id,
                        itemQty: item.orderItems.length,
                        total: "US$" + item.totalPrice,
                        status: item.orderStatus,
                  });
            });

      return (
            <div className="pl-8 pt-1">
                  <DataGrid
                        rows={row}
                        columns={columns}
                        pageSize={10}
                        disableRowSelectionOnClick
                        autoHeight
                  />
            </div>
      );
};

const AllRefundOrders = () => {
      const orders = [
            {
                  _id: "859840904ipojfljdfvorei",
                  orderItems: [
                        {
                              name: "Iphone 14 pro max",
                        },
                  ],
                  totalPrice: 120,
                  orderStatus: "Processing",
            },
      ];

      const columns = [
            {
                  field: "id",
                  headerName: "Order ID",
                  minWidth: 150,
                  flex: 0.7,
            },
            {
                  field: "status",
                  headerName: " Status",
                  minWidth: 130,
                  flex: 0.7,
                  cellClassName: (params) => {
                        return params.row.status === "Delivered"
                              ? "greenColor"
                              : "redColor";
                  },
            },
            {
                  field: "itemQty",
                  headerName: "Items Qty",
                  minWidth: 130,
                  flex: 0.7,
            },
            {
                  field: "total",
                  headerName: " Total",
                  minWidth: 130,
                  flex: 0.8,
            },
            {
                  field: " ",
                  headerName: " ",
                  minWidth: 150,
                  flex: 1,
                  type: "number",
                  sortable: false,
                  renderCell: (params) => {
                        return (
                              <>
                                    <Link to={`/order/${params.id}`}>
                                          <Button>
                                                <AiOutlineArrowRight
                                                      size={20}
                                                />
                                          </Button>
                                    </Link>
                              </>
                        );
                  },
            },
      ];

      const row = [];

      orders &&
            orders.forEach((item) => {
                  row.push({
                        id: item._id,
                        itemQty: item.orderItems.length,
                        total: "US$" + item.totalPrice,
                        status: item.orderStatus,
                  });
            });
      return (
            <div className="pl-8 pt-1">
                  <DataGrid
                        rows={row}
                        columns={columns}
                        pageSize={10}
                        disableRowSelectionOnClick
                        autoHeight
                  />
            </div>
      );
};

const TrackOrder = () => {
      const orders = [
            {
                  _id: "859840904ipojfljdfvorei",
                  orderItems: [
                        {
                              name: "Iphone 14 pro max",
                        },
                  ],
                  totalPrice: 120,
                  orderStatus: "Processing",
            },
      ];

      const columns = [
            {
                  field: "id",
                  headerName: "Order ID",
                  minWidth: 150,
                  flex: 0.7,
            },
            {
                  field: "status",
                  headerName: " Status",
                  minWidth: 130,
                  flex: 0.7,
                  cellClassName: (params) => {
                        return params.row.status === "Delivered"
                              ? "greenColor"
                              : "redColor";
                  },
            },
            {
                  field: "itemQty",
                  headerName: "Items Qty",
                  minWidth: 130,
                  flex: 0.7,
            },
            {
                  field: "total",
                  headerName: " Total",
                  minWidth: 130,
                  flex: 0.8,
            },
            {
                  field: " ",
                  headerName: " ",
                  minWidth: 150,
                  flex: 1,
                  type: "number",
                  sortable: false,
                  renderCell: (params) => {
                        return (
                              <>
                                    <Link to={`/order/${params.id}`}>
                                          <Button>
                                                <MdOutlineTrackChanges
                                                      size={20}
                                                />
                                          </Button>
                                    </Link>
                              </>
                        );
                  },
            },
      ];

      const row = [];

      orders &&
            orders.forEach((item) => {
                  row.push({
                        id: item._id,
                        itemQty: item.orderItems.length,
                        total: "US$" + item.totalPrice,
                        status: item.orderStatus,
                  });
            });
      return (
            <div className="pl-8 pt-1">
                  <DataGrid
                        rows={row}
                        columns={columns}
                        pageSize={10}
                        disableRowSelectionOnClick
                        autoHeight
                  />
            </div>
      );
};

const PaymentMethod = () => {
      return (
            <div className="w-full px-5">
                  <div className="w-full flex items-center justify-between">
                        <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
                              Payment Methods
                        </h1>
                        <div className={`${styles.button} rounded-md`}>
                              <span className="text-white">Add New</span>
                        </div>
                  </div>
                  <br />
                  <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
                        <div className="flex items-center">
                              <img src="/images/Visa.svg" alt="" />
                              <h5 className="pl-5 font-[600]">
                                    Bruce NKundabagenzi
                              </h5>
                        </div>
                        <div className="pl-8 flex items-center">
                              <h6>123 **** **** ****</h6>
                              <h5 className="pl-6">08/2023</h5>
                        </div>
                        <div className="min-w-[10%] flex items-center justify-between pl-8">
                              <AiOutlineDelete
                                    size={25}
                                    className="cursor-pointer"
                              />
                        </div>
                  </div>
            </div>
      );
};

const Address = () => {
      return (
            <div className="w-full px-5">
                  <div className="w-full flex items-center justify-between">
                        <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">
                              My addresses
                        </h1>
                        <div className={`${styles.button} rounded-md`}>
                              <span className="text-white">Add New</span>
                        </div>
                  </div>
                  <br />
                  <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
                        <div className="flex items-center">
                              <h5 className="pl-5 font-[600]">Default</h5>
                        </div>
                        <div className="pl-8 flex items-center">
                              <h6>494 Erdman Passage, Kigali, Rwanda</h6>
                        </div>
                        <div className="pl-8 flex items-center">
                              <h6>(250) 77777-6666-555</h6>
                        </div>
                        <div className="min-w-[10%] flex items-center justify-between pl-8">
                              <AiOutlineDelete
                                    size={25}
                                    className="cursor-pointer"
                              />
                        </div>
                  </div>
            </div>
      );
};

export default ProfileContent;
