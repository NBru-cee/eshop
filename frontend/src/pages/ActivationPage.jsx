import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

const ActivationPage = () => {
   const { activationToken } = useParams();
   const [error, setError] = useState(false);
   useEffect(() => {
      if (activationToken) {
         const activationEmail = async () => {
            try {
               const res = await axios.post(`${server}/user/activation`, {
                  activationToken,
               });
               console.log(res.data.message);
            } catch (error) {
               console.log(error.response.data.message);
               setError(true);
            }
         };
         activationEmail();
      }
   }, []);

   return (
      <div className="w-full h-screen flex justify-center items-center">
         {error ? (
            <p>Your token is expired</p>
         ) : (
            <p>Your account has been successfully created!</p>
         )}
      </div>
   );
};

export default ActivationPage;
