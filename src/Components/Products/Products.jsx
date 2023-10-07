import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { useQuery } from 'react-query';
import { Oval } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';

export default function Products() {

  let { addToCart } = useContext(CartContext);

  async function addProduct(productId) {
    let response = await addToCart(productId);
    if(response.data.status === 'success'){
      toast('product added successfully')
    }

    else{
      toast.error('failed to add product')
    }
  }

  function getFeaturedProduct() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }

  let { isLoading, isError, data, isFetching } = useQuery('featuredProduct', getFeaturedProduct );
  console.log(data?.data.data);

  return <>
    {isLoading ? <div className="w-100 d-flex justify-content-center py-5">
    <Oval
  height={80}
  width={80}
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#4fa94d"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>
    </div> : <div className="container py-2">
    <div className="w-75 mx-auto py-5">
      <form >
        
        
        <input type="text" className='form-control' placeholder='Search...'
        id='search' />
        
        </form>
    </div>
      <div className="row">
        {data?.data.data.map((product) => <div key={product._id} className='col-md-3'>

          
            <div className="product cursor-pointer py-3 px-2">
            <Link to={`/productDetails/${product._id}`}>
              <img className='w-100' src={product.imageCover} alt={product.title} />

              <span className='text-main font-sm fw-bolder mt-2'>{product.category.name}</span>
              <h3 className='h6'>{product.title.split(" ").slice(0, 2).join(' ')}</h3>

              <div className="d-flex justify-content-between mt-3">
                <span>{product.price} EGP</span>

                <span><i className='fas fa-star rating-color'></i> {product.ratingAverage}</span>
              </div>
              <div className='wish mt-3 py-3 m-auto'>
              <i className="fa-solid fa-heart fa-2xl"></i>
              </div>
              </Link>

              <button onClick={() => addProduct(product._id)} className='btn bg-main text-white w-100 btn-sm mt-2'> Add to cart</button>

            </div>
          
        </div>)}
      </div>
    </div>}




  </>
}
