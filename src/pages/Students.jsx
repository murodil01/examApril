import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const mockProducts = [
  {
    _id: "1",
    title: "Nike Air Max 270",
    category: "Shoes",
    price: 180,
    discountPrice: 140,
    images: ["https://static.nike.com/a/images/t_default/f1b2b6c4-ae7e-4f6d-9fbb-1c5a7e30a04c/air-max-270-mens-shoes-KkLcGR.png"]
  },
  {
    _id: "2",
    title: "Adidas Ultraboost",
    category: "Shoes",
    price: 200,
    discountPrice: 160,
    images: ["https://assets.adidas.com/images/w_600,f_auto,q_auto/f975fa14a3dc4f1f92e6adc600e1fdb4_9366/Ultraboost_Light_Shoes_White_GW4075_01_standard.jpg"]
  },
  {
    _id: "3",
    title: "iPhone 13 Pro",
    category: "Electronics",
    price: 999,
    discountPrice: 899,
    images: ["https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=940&hei=1112&fmt=png-alpha&.v=1645552346275"]
  },
  {
    _id: "4",
    title: "Samsung Galaxy Watch 5",
    category: "Accessories",
    price: 350,
    discountPrice: 290,
    images: ["https://images.samsung.com/is/image/samsung/assets/levant/p6_gro1/p6_initial_assets/multidevice/galaxy-watch5-pro.png"]
  },
];

const Students = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = () => {
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1000); 
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) return <p className="text-center p-6">Loading...</p>;

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
