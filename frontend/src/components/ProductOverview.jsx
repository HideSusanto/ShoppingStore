
import { useState, useEffect } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import ImageOverview from './ImageOverview'
import Comment from './Comment'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from 'react-router-dom';

const review = { href: '#', average: 3, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const sizes = [
  { name: 'XXS', inStock: false },
  { name: 'XS', inStock: true },
  { name: 'S', inStock: true },
  { name: 'M', inStock: true },
  { name: 'L', inStock: true },
  { name: 'XL', inStock: true },
  { name: '2XL', inStock: true },
  { name: '3XL', inStock: true },
]

export default function ProductOverview() {
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const {id} = useParams();
  const getProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/products/${id}`)
      setProduct(response.data);
    }
    catch (err) {
      console.error('Error fetching products:', err);
    }
  }
  const getReviews = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/reviews/${id}`)
      setReviews(response.data);
      
    }
    catch (err) {
      console.error('Error fetching products:', err);
    }
  }

  useEffect(() => {
    getReviews();
    // Gọi hàm getProduct để cập nhật giá trị mới của product
    getProduct();
  }, []);

  useEffect(() => {
    // Console log khi product thay đổi
    console.log(id)
    console.log(product);
  }, [product]);
  return (
    <div className="bg-white p-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li >
                <div className="flex items-center">
                  <a href="" className="mr-2 text-sm font-medium text-gray-900">
                    {product.category}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li>
              <div className="flex items-center">
                <a href="" className="mr-2 text-sm font-medium text-gray-500">
                  {product.name}
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  
                </svg>
              </div>
            </li>
            
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-5 lg:gap-x-8 lg:px-8">
          <div className='lg:col-span-2 grid-cols-2'>
          {product.images && product.images.slice(0, 1).map((image, index) => (
        <ImageOverview
          key={index} // Thêm key để tránh warning, có thể sử dụng image làm key nếu không trùng lặp
          imageSrc={image}
        />
      ))}
          </div>
          <div className="mt-4 lg:row-span-3 col-span-3 col-start-3 lg:mt-0">
            <h2 className="font-bold text-blue-500 text-5xl">
              {product.name}</h2>
            <sub className='text-3xl text-gray-500'>{product.description}</sub>
            <p className="text-3xl mt-4 tracking-tight text-gray-900">{product.price}$</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        review.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{review.average} out of 5 stars</p>
                <a href={review.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {review.totalCount} reviews
                </a>
              </div>
            </div>
            <form className="mt-10"> 
              <button
                type="submit"
                className="mt-10 flex w-60 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>
        </div>

        {/* Product info */}
        <div className=" mx-auto max-w-2xl px-4 pb-12 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-blue-900 sm:text-3xl">
              {product.name}
              </h1>
          </div>

          {/* Options */}
          

          <div className="divide-y divide-solid py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    <li className="text-gray-400">
                      <span className="text-gray-600">Listen boosted music</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">Micro can catch any sound smallest</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600">Good battery, can using in long time</span>
                    </li>
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
            <div className="mt-10 pt-5 grid grid-cols-3 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            {product.images && product.images.map((image, index) => (
        <ImageOverview
          key={index} // Thêm key để tránh warning, có thể sử dụng image làm key nếu không trùng lặp
          imageSrc={image}
        />
      ))}
        </div>
          
          </div>
          <div className='divide-y'>
            <h1 className='text-3xl font-bold text-blue-900'>Reviews from customer</h1>
            <div className=''>
              {reviews.map((review,index) => (
                <Comment
                key= {index}
                userimage={review.user.usercoverimg}
                username={review.user.username}
                usercomment={review.comment}
                >
                </Comment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
