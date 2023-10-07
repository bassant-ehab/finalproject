import React, { useEffect, useState } from 'react';
import styles from './Categories.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SubCategory from '../SubCategory/SubCategory';






export default function Categories() {

  const [category, setcategory] = useState([])
  

  async function getAllCategories(){
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    setcategory(data.data);

    console.log(data.data);
  }
 
  useEffect(() => {
    getAllCategories()
   
   
    
  }, [])

  
  
  return <>
    <div className="row mt-5">
        {category.map((category) => <div key={category.id} className='col-md-4'>
        
          <div  className='product border mt-5 cursor-pointer py-3 px-2'>
            <img height={300} className='w-100 rounded' src={category.image} alt={category.title} />
            <div className="div mt-3">
            <h4 className='text-main text-center fw-bolder'>{category.name}</h4>
            </div>
            
            
          </div>
          
        </div>)}
        





    </div>

  </>
}
