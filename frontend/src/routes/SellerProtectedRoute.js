import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SellerProtectedRoute = ({ children }) => {
   const { isLoading, isSeller } = useSelector((state) => state.seller);

   if (!isLoading) {
      if (!isSeller) {
         return <Navigate to={`/`} replace />;
      }
      return children;
   }
};

export default SellerProtectedRoute;
