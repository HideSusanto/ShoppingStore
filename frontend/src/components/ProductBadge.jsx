
  const ProductBadge = ({id, name, description, image, price, category}) => {
      return ( 
              <div key={id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={image}
                    alt="nvm"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700">
                      <a>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {name}
                      </a>
                    </h3>
                    
                  </div> 
                  <p className="text-lg font-medium text-gray-900">${price}</p>
                  
                </div>
                <sub>{description}</sub>
                <br />
                <sub>{category}</sub>
              </div>
       );
  }
   
  export default ProductBadge;