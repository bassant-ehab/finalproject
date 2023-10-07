import axios from "axios";
import { createContext } from "react";



export let CartContext = createContext();


export function CartContextProvider(props) {

    let headers = { token: localStorage.getItem('userToken') }

    function addToCart(productId) {
        console.log(headers)
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, { productId: productId }, {
            headers: headers
        }).then((response) => response)
            .catch((error) => error);

    }

    function getLoggedUserCart(){
       return axios.get(`https://ecommerce.routemisr.com/api/v1/cart` , {headers:headers})
       .then((response) => response)
            .catch((error) => error);
    }

    function Remove(productId){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {headers})
        .then((response) => response)
        .catch((error) => error);
    }

    function Update(productId , count){

        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , {count} , {headers})
       .then((response) => response)
            .catch((error) => error);

    }

    return <CartContext.Provider value={{ addToCart , getLoggedUserCart , Remove , Update}}>
        {props.children}
    </CartContext.Provider>
}