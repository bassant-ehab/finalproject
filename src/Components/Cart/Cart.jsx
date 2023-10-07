import React, { useContext, useEffect, useState } from 'react';
import styles from './Cart.module.css';
import { CartContext } from '../../Context/CartContext';
import { TailSpin } from 'react-loader-spinner';


export default function Cart() {
  let { getLoggedUserCart, Remove, Update } = useContext(CartContext);
  const [cartDetails, setCartDetails] = useState(null);


  async function UpdateCount(id, count) {
    let { data } = await Update(id, count);
    setCartDetails(data);

  }


  async function removeItem(id) {
    let { data } = await Remove(id);
    setCartDetails(data);
  }

  async function getCart() {
    let { data } = await getLoggedUserCart();
    setCartDetails(data);
  }

  useEffect(() => {
    getCart();
  }, []);




  return <>
    {cartDetails ? <div className="w-75 mx-auto p-2 my-3 bg-main-light">

      <h3>shopping cart</h3>
      <h4 className='h6 text-main'>Cart Items: {cartDetails.numOfCartItems}</h4>
      <h4 className='h6 text-main mb-4'>Total Cart price: {cartDetails.data.totalCartPrice} EGP</h4>
      {cartDetails.data.products.map((product) => <div key={product.product.id} className='row border-bottom py-2 px-2'>

        <div className="col-md-1">
          <img className='w-100' src={product.product.imageCover} alt="" />


        </div>

        <div className="col-md-12">

          <div className="d-flex justify-content-between align-items-center">

            <div>

              <h3 className='h6'>{product.product.title.split(' ').slice(0, 3).join(' ')}</h3>
              <h6 className='text-main'>Price: {product.price} EGP</h6>

            </div>

            <div>
              <button onClick={()=>UpdateCount(product.product.id , product.count + 1)} className='btn brdr-main'> +</button>
              <span className='m-2'>{product.count}</span>
              <button onClick={()=>UpdateCount(product.product.id , product.count - 1)} className='btn brdr-main'> -</button>
            </div>

          </div>
          <button onClick={() => removeItem(product.product.id)} className="trash btn p-0"> <i className='text-danger fas fa-trash fa-can'></i>Remove</button>



        </div>




      </div>)}


    </div> : <section id='loading' className='d-flex justify-content-center align-items-center'> <TailSpin
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    /> </section>}

  </>
}

