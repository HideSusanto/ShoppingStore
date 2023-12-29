import axios from 'axios';
import ProductBadge from "./ProductBadge";
import {useState, useEffect} from "react";
const Content = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      let res = await axios.get('http://localhost:8000/api/products')
      setProducts(res.data);
      console.log(res.data); // Log dữ liệu trực tiếp từ response
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []); // Sử dụng mảng rỗng để đảm bảo hàm chỉ chạy một lần sau khi component được mount
    return ( 
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Some population products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductBadge key={product._id}
            id = {product._id} 
            name = {product.name}  
            image={product.images[0]}
            price={product.price}>
            </ProductBadge>
          ))}
        </div>
      </div>
      
    </div>
    
     );
}
 
export default Content;