import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


export default function SubCategory() {
    let params = useParams();
   const [subCategories, setSubCategories] = useState(null)
   async function getSubCategory(id){
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
    setSubCategories(data);
    console.log(data);
   }
   useEffect(() => {
    getSubCategory(params.id)
   
     
   }, [])


  return (
    <div>SubCategory</div>
  )
}
