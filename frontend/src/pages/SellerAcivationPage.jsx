import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

const SellerActivationPage = () => {
   const { activationToken } = useParams();
   const [error, setError] = useState(false);

   useEffect(() => {
      if (activationToken) {
         const sendRequest = async () => {
            await axios
               .post(`${server}/shop/activation`, { activationToken })
               .then((res) => console.log(res))
               .catch((err) => {
                  console.log(err);
                  setError(true);
               });
         };
         sendRequest();
      }
   }, []);

   return (
      <div className="w-full h-screen flex justify-center items-center">
         {error ? (
            <p>Your token is expired</p>
         ) : (
            <p>Your Shop has been created successfully!</p>
         )}
      </div>
   );
};

export default SellerActivationPage;
