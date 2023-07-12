import React, { useEffect } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { loadUser } from "./redux/actions/user";
import { loadSeller } from "./redux/actions/seller";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
   LoginPage,
   SignupPage,
   ActivationPage,
   HomePage,
   ProductsPage,
   BestSellingPage,
   EventsPage,
   FAQPage,
   OrderSuccessPage,
   ProductDetailsPage,
   ProfilePage,
} from "./router/Routes.js";
import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import SellerProtectedRoute from "./SellerProtectedRoute";
import {
   ShopHomePage,
   ShopCreatePage,
   SellerAcivationPage,
   ShopLoginPage,
} from "./router/ShopRoutes";

const App = () => {
   const { loading, isAuthenticated } = useSelector((state) => state.user);
   const { isLoading } = useSelector((state) => state.seller);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(loadUser());
      dispatch(loadSeller());
   }, []);

   return (
      <>
         {loading || isLoading ? null : (
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />

                  <Route
                     path="/activation/:activationToken"
                     element={<ActivationPage />}
                  />
                  <Route
                     path="/seller/activation/:activationToken"
                     element={<SellerAcivationPage />}
                  />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/best-selling" element={<BestSellingPage />} />
                  <Route path="/events" element={<EventsPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/order/success" element={<OrderSuccessPage />} />
                  <Route
                     path="/product/:name"
                     element={<ProductDetailsPage />}
                  />
                  <Route
                     path="/profile"
                     element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                           <ProfilePage />
                        </ProtectedRoute>
                     }
                  />
                  {/* shop routes */}
                  <Route path="/shop-create" element={<ShopCreatePage />} />
                  <Route path="/shop-login" element={<ShopLoginPage />} />
                  <Route
                     path="/shop/:id"
                     element={
                        <SellerProtectedRoute>
                           <ShopHomePage />
                        </SellerProtectedRoute>
                     }
                  />
               </Routes>
               <ToastContainer
                  position="bottom-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
               />
            </BrowserRouter>
         )}
      </>
   );
};

export default App;
