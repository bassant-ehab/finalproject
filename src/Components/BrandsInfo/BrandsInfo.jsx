import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function BrandsInfo() {
    let params = useParams();
   const [BrandsInfo, setBrandInfo] = useState(null)
   async function getBrandsInfo(id){
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
    setBrandInfo(data);
    console.log(data);
   }
   useEffect(() => {
    getBrandsInfo(params.id)
   
     
   }, [])


  return <>
  
  </>
}
