import React from 'react';
const CartImage = "https://down-vn.img.susercontent.com/file/sg-11134201-22100-cishggrmcriv0c" // Thay đổi đường dẫn tới hình ảnh thực tế

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 10.0 },
    { id: 2, name: 'Product 2', price: 15.0 },
    // Thêm các sản phẩm khác nếu cần
  ];

  const handleRemoveItem = (itemId) => {
    // Xử lý logic xóa sản phẩm khỏi giỏ hàng ở đây
    console.log(`Remove item with id: ${itemId}`);
  };
  const shippingAddress = {
    street: '123 Main Street',
    city: 'Cityville',
    country: 'USA',
  };

  const paymentMethod = 'Pay On Delivery';
  return (
    <div className="mx-56 bg-white p-9">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold">Your Cart</h2>
        <img src={CartImage} alt="Shopping Cart" className="w-16 h-16" />
      </div>

      {/* List of items in the cart */}
      <ul className="divide-y divide-gray-300">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center py-2">
            <div className="flex items-center space-x-4">
              <img src={CartImage} alt={item.name} className="w-32 h-32 rounded-md" />
              <span className="text-gray-800">{item.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl text-gray-700">${item.price.toFixed(2)}</span>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="py-1 px-3 text-xl text-white bg-red-500 rounded hover:bg-red-200 transition-all duration-300"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
       {/* Address and Payment */}
       <div className="mt-4">
        <h3 className="text-2xl font-bold mb-2">Shipping Address</h3>
        <p className="text-xl text-gray-700">
          {shippingAddress.street}, {shippingAddress.city}, {shippingAddress.country}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-bold mb-2">Payment Method</h3>
        <p className="text-xl text-gray-700">{paymentMethod}</p>
      </div>     
      {/* Total */}
      <div className="flex justify-between items-center mt-4">
        <span className="font-bold text-2xl">Total:</span>
        <span className="text-xl font-bold text-blue-600">
          ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
        </span>
      </div>

      {/* Checkout button */}
      <div className='flex justify-between'>
      <button className="mt-6 font-bold text-xl bg-blue-500 text-white py-4 px-8 rounded hover:bg-blue-200 transition-all duration-300">
        Checkout
      </button>
      <button className='mt-6 font-bold text-xl bg-blue-500 text-white py-4 px-8 rounded hover:bg-blue-200 transition-all duration-300'>
        Back to shopping
      </button>
      </div>
    </div>
  );
};

export default Cart;
