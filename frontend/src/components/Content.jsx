import axios from 'axios';
import ProductBadge from "./ProductBadge";
import {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
const Content = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  let params = (new URL(document.location)).searchParams;
  let pageParams = parseInt(params.get("page")) || 1;
  const getProducts = async (page) => {
    try {
      setCurrentPage(pageParams);
      const response = await axios.get('http://localhost:8000/api/products', { params: { per_page: 8, page : page } });
      setProducts(response.data);
      const totalCount = (await axios.get('http://localhost:8000/api/products')).data.length;
      console.log(totalCount);  
      const totalPages = Math.ceil(totalCount / 8); // Giả sử mỗi trang hiển thị 8 sản phẩm
      setTotalPages(totalPages);
      console.log(response);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    getProducts(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    navigate(`?page=${newPage}`); 
    setCurrentPage(newPage);
    console.log(window.location.href);
  };
  const validTotalPages = typeof totalPages === 'number' && totalPages >= 0 ? totalPages : 1;
    return ( 
      <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Some our products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductBadge key={product._id}
            id = {product._id} 
            name = {product.name}
            description={product.description} 
            image={product.images[0]}
            price={product.price}
            category={product.category}>
            </ProductBadge>
          ))}
        </div>
        {/* Phân trang */}
        <div className="flex justify-center mt-6">
          {[...Array(validTotalPages).keys()].map((page) => (
            <button disabled={currentPage === page + 1 ? true : false}
              key={page + 1}
              className={`mx-2 px-4 py-2 border ${currentPage === page + 1 ? 'bg-blue-400 text-white' : 'bg-white'}`}
              onClick={() => handlePageChange(page + 1)} 
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>     
    </div>
    
     );
}
 
export default Content;