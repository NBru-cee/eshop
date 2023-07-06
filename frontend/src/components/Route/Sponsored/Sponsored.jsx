import React from "react";
import styles from "../../../styles/styles";

const Sponsored = () => {
      return (
            <div
                  className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
            >
                  <div className="flex justify-between w-full">
                        <div className="flex items-start">
                              <img
                                    src="/images/sponsors/Sony-Logo.png"
                                    alt="sony sponsor"
                                    style={{
                                          width: "150px",
                                          objectFit: "contain",
                                    }}
                              />
                        </div>
                        <div className="flex items-start">
                              <img
                                    src="/images/sponsors/Dell-Logo-1989-2016.png"
                                    alt="dell sponsor"
                                    style={{
                                          width: "150px",
                                          objectFit: "contain",
                                    }}
                              />
                        </div>
                        <div className="flex items-start">
                              <img
                                    src="/images/sponsors/2560px-LG_logo_(2015).svg.png"
                                    alt="lg sponsor"
                                    style={{
                                          width: "150px",
                                          objectFit: "contain",
                                    }}
                              />
                        </div>
                        <div className="flex items-start">
                              <img
                                    src="/images/sponsors/apple-ar21.png"
                                    alt="apple sponsor"
                                    style={{
                                          width: "150px",
                                          objectFit: "contain",
                                    }}
                              />
                        </div>
                        <div className="flex items-start">
                              <img
                                    src="/images/sponsors/microsoft.png"
                                    alt="microsoft sponsor"
                                    style={{
                                          width: "150px",
                                          objectFit: "contain",
                                    }}
                              />
                        </div>
                  </div>
            </div>
      );
};

export default Sponsored;
