import React, { useContext, useEffect, useState } from 'react';

import { CartContext } from '../../Context/CartContext';
import { WishListContext } from '../../Context/WishListContext';
import { Oval } from 'react-loader-spinner';


export default function WishList() {

  let { addToCart, setCartDetails } = useContext(CartContext);
  async function addItemToCart(id) {
    let { data } = await addToCart(id);
    setCartDetails(data);
    removeProductFromWishList(id)
  }

  const [wishList, setWishList] = useState(null);
  let { getLoggedUserWishList, removeFromWishList } = useContext(WishListContext);
  async function removeProductFromWishList(productId) {
    let { data } = await removeFromWishList(productId);
    if (data.status === 'success') {
      getWishList()
    }
  }
  async function getWishList() {
    setWishList('loading')
    let { data } = await getLoggedUserWishList();
    setWishList(data.data);
  }

  useEffect(() => {
    getWishList();
  }, []);




  return <>
    {wishList == 'loading' ? <section id='loading' className='d-flex justify-content-center align-items-center'> 
      
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
    </section> : !wishList || wishList.length == 0 ? <div className="w-75 mx-auto p-2 my-3 bg-main-light">
      <h3 className='fw-bolder'>My Wish List</h3>
      <h4 className='h6 text-main fw-bolder'>Your wishlist is empty</h4>
    </div> : <div className="w-75 mx-auto p-2 my-3 bg-main-light">


      <div className="d-flex justify-content-between">

        <h3 className='fw-bolder'>My WishList</h3>


      </div>

      {wishList.map((product) => <div key={product._id} className='row border-bottom py-2 px-2'>

        <div className="col-md-1">
          <img className='w-100' src={product.imageCover} alt="" />

        </div>

        <div className="col-md-12">

          <div className="d-flex justify-content-between align-items-center">

            <div>

              <h3 className='h6'>{product.title.split(' ').slice(0, 3).join(' ')}</h3>
              <h6 className='text-main'>Price: {product.price} EGP</h6>

            </div>

          </div>
          <button onClick={() => addItemToCart(product._id)} className="trash btn p-0"> <i className='text-danger fas fa-trash fa-can'></i>Add To Cart</button>

          <button onClick={() => removeProductFromWishList(product._id)} className="trash btn p-0"> <i className='text-danger fas fa-trash fa-can'></i>Remove</button>



        </div>




      </div>)}

    </div>}

  </>
}