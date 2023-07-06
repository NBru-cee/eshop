import React from "react";
import {
      AiFillFacebook,
      AiFillInstagram,
      AiFillYoutube,
      AiOutlineTwitter,
} from "react-icons/ai";
import {
      footerProductLinks,
      footerSupportLinks,
      footercompanyLinks,
} from "../../static/data";
import { Link } from "react-router-dom";

const Footer = () => {
      const year = new Date().getFullYear();
      return (
            <div className="bg-black text-white">
                  <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342ac8] py-7">
                        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
                              <span className="text-[#56d879]">Subscribe</span>
                              uss for getting news, <br />
                              events and offers
                        </h1>
                        <div>
                              <input
                                    type="text"
                                    required
                                    placeholder="Enter your email..."
                                    className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
                              />
                              <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full">
                                    Submit
                              </button>
                        </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
                        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
                              <img
                                    src="/images/logo.svg"
                                    alt="logo image"
                                    style={{
                                          filter: "brightness(0) invert(1)",
                                    }}
                              />
                              <br />
                              <p>
                                    The home and elements needed to create
                                    beautiful products
                              </p>
                              <div className="flex items-center mt-[15px]">
                                    <AiFillFacebook
                                          size={25}
                                          style={{
                                                cursor: "pointer",
                                          }}
                                    />
                                    <AiOutlineTwitter
                                          size={25}
                                          style={{
                                                marginLeft: "15px",
                                                cursor: "pointer",
                                          }}
                                    />
                                    <AiFillInstagram
                                          size={25}
                                          style={{
                                                marginLeft: "15px",
                                                cursor: "pointer",
                                          }}
                                    />
                                    <AiFillYoutube
                                          size={25}
                                          style={{
                                                marginLeft: "15px",
                                                cursor: "pointer",
                                          }}
                                    />
                              </div>
                        </ul>
                        <ul className="text-center sm:text-start">
                              <h1 className="mb-1 font-semibold">Company</h1>
                              {footerProductLinks.map((link) => (
                                    <li
                                          key={link.name}
                                          className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                                    >
                                          <Link to={link.link}>
                                                {link.name}
                                          </Link>
                                    </li>
                              ))}
                        </ul>
                        <ul className="text-center sm:text-start">
                              <h1 className="mb-1 font-semibold">Shop</h1>
                              {footercompanyLinks.map((link) => (
                                    <li
                                          key={link.name}
                                          className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                                    >
                                          <Link to={link.link}>
                                                {link.name}
                                          </Link>
                                    </li>
                              ))}
                        </ul>
                        <ul className="text-center sm:text-start">
                              <h1 className="mb-1 font-semibold">Support</h1>
                              {footerSupportLinks.map((link) => (
                                    <li
                                          key={link.name}
                                          className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                                    >
                                          <Link to={link.link}>
                                                {link.name}
                                          </Link>
                                    </li>
                              ))}
                        </ul>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
                        <span>&copy; {year} Becodemy. All right reserved.</span>
                        <span>Terms &middot; Privacy Policy</span>
                        <div className="sm:block flex items-center justify-center w-full">
                              <img
                                    src="/images/footer-payment.webp"
                                    alt="payments"
                              />
                        </div>
                  </div>
            </div>
      );
};

export default Footer;