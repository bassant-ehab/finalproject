import React, { useEffect, useState } from 'react';
import styles from './Brands.module.css';
import axios from 'axios';



export default function Brands() {

  const [brands, setbrands] = useState([])

  async function getBrands(){
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    setbrands(data.data);
    console.log(data.data)
  }
  useEffect(() => {
    getBrands()
  
   
  }, [])
  
  return <>
    <h1 className='fw-bolder text-center text-main mt-5'>All Brands</h1>

    <div className="row mt-5">
        {brands.map((brands) => <div key={brands.id} className='col-md-3'>
        
          <div  className='product border mt-5 cursor-pointer py-3 px-2'>
            <img height={200} className='w-100 rounded' src={brands.image} alt={brands.title} />
            <h6 className='fw-sm mt-3 text-center fw-bolder'>{brands.name}</h6>
            
          </div>
          
        </div>)}
        





    </div>
  </>
}
