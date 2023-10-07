import axios from 'axios';
import React, { useEffect, useState } from 'react'; 



import { useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';




export default function ProductDetails() {
   let params = useParams();
   const [productDetails, setproductDetails] = useState(null)
   async function getProductDetails(id){
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    setproductDetails(data);
    console.log(data);
   }
   useEffect(() => {
     getProductDetails(params.id)
   
     
   }, [])
   

  return <>
  {productDetails?.data? <div className="container mt-5">
  <div className="row py-2 d-flex align-content-center justify-content-center">
       <div className="col-md-4 d-flex align-content-center ">
        <img src={productDetails?.data.imageCover} className='w-100' alt={productDetails?.data.title}/>

       </div>
       <div className="col-md-8 mt-5 py-5">
        <h2 className='h5'><span className='fw-bolder'>Title:</span>{productDetails?.data.title}</h2>
        <p> <span className='fw-bolder'>Description:</span> {productDetails?.data.description}</p><br/>
        <h6> <span className='fw-bolder'>Category:</span> {productDetails?.data.category.name}</h6>
        <h6><span className='fw-bolder'>Price:</span> {productDetails?.data.price} </h6>
        <div className="d-flex">
            <span><span className='fw-bolder'>Rating:</span> <i className='fas fa-star rating-color'></i>{productDetails?.data.ratingAverage}</span>
        
        
        </div>
        <button  className='btn bg-main text-white mt-4 w-75'> +  Add </button>
       </div>

       </div>
  </div>
   :''}
 
  </>
    }

