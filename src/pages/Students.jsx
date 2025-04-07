import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Students = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        "https://ecommerce-udemy-app.vercel.app/api/products"
      );
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex gap-2">
      <Sidebar />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Products List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300"
            >
              <img
                src={product?.images?.[0]}
                alt={product.title}
                className="w-full h-40 object-cover mb-2 rounded-md"
              />
              <h3 className="font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{product.category}</p>
              <div className="flex items-center gap-2">
                <span className="text-green-600 font-bold">
                  ${product.discountPrice}
                </span>
                <span className="line-through text-gray-400 text-sm">
                  ${product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Students;
