import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../../static/data";
import { AiOutlinePlusCircle } from "react-icons/ai";

const CreateProduct = () => {
   const { seller } = useSelector((state) => state.seller);
   const navigate = useNavigate();
   const dispath = useDispatch();
   const [images, setImages] = useState([]);
   const [name, setName] = useState("");
   const [description, setDescription] = useState("");
   const [category, setCategory] = useState("");
   const [tags, setTags] = useState("");
   const [originalPrice, setOriginalPrice] = useState();
   const [discountPrice, setDiscountPrice] = useState();
   const [stock, setStock] = useState();

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   const handleImageChange = (e) => {
      e.preventDefault();
      let files = Array.from(e.target.files);
      setImages((prevImages) => [...prevImages, ...files]);
   };
   return (
      <div className="800px:w-[50%] w-[90%] bg-white shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
         <h5 className="text-[30px] font-Poppins text-center">
            Create Product
         </h5>
         {/* create product form */}
         <form onSubmit={handleSubmit}>
            <br />
            <div>
               <label className="pb-2">
                  Name <span className="text-red-500">*</span>
               </label>
               <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter your product name..."
               />
            </div>

            <br />
            <div>
               <label className="pb-2">
                  Description <span className="text-red-500">*</span>
               </label>
               <input
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter your product description..."
               />
            </div>
            <br />
            <div>
               <label className="pb-2">
                  Category <span className="text-red-500">*</span>
               </label>
               <select
                  className="w-full border h-[35px] rounded-[5px]"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
               >
                  <option value="Choose a category">
                     Choose a Category...
                  </option>
                  {categoriesData &&
                     categoriesData.map((i) => (
                        <option value={i.title} key={i.title}>
                           {i.title}
                        </option>
                     ))}
               </select>
            </div>
            <br />
            <div>
               <label className="pb-2">Tags</label>
               <input
                  type="text"
                  name="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter your product tags..."
               />
            </div>
            <br />
            <div>
               <label className="pb-2">Original Price</label>
               <input
                  type="number"
                  name="price"
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(e.target.value)}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter your product price..."
               />
            </div>
            <br />
            <div>
               <label className="pb-2">
                  Price (With Discount) <span className="text-red-500">*</span>
               </label>
               <input
                  type="number"
                  name="discount"
                  value={discountPrice}
                  onChange={(e) => setDiscountPrice(e.target.value)}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm cursor-pointer"
                  placeholder="Enter your product price with discount..."
               />
            </div>
            <br />
            <div>
               <label className="pb-2">
                  Product Stock<span className="text-red-500">*</span>
               </label>
               <input
                  type="number"
                  name="stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter your product stock..."
               />
            </div>
            <br />
            <div>
               <label className="pb-2">
                  Upload Images<span className="text-red-500">*</span>
               </label>
               <input
                  type="file"
                  id="upload"
                  className="hidden "
                  multiple
                  onChange={handleImageChange}
               />
               <div className="w-full flex items-center flex-wrap">
                  <label htmlFor="upload">
                     <AiOutlinePlusCircle
                        size={30}
                        className="mt-3 cursor-pointer"
                        color="#555"
                     />
                  </label>
                  {images &&
                     images.map((i) => (
                        <img
                           src={URL.createObjectURL(i)}
                           alt="images"
                           key={i}
                           className="h-[120px] w-[120px] object-cover m-2"
                        />
                     ))}
               </div>
               <br />
               <div>
                  <input
                     type="submit"
                     value="Create"
                     className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm cursor-pointer"
                  />
               </div>
            </div>
         </form>
      </div>
   );
};

export default CreateProduct;
