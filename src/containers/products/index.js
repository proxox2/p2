import { useEffect, useState } from 'react'

import Layout from '../../hoc/layout'
//import products from '../../services/json/products.json'
import {getProductsList} from '../../services/products'
export default function Products(){
    const[products,setProducts]=useState([])
        useEffect(()=>{
        getProducts()
    },[]
    )
    const getProducts=async()=>{
       let response=await getProductsList() 

       if(response.status===200){
        setProducts(response.data)
       }
    }
     return(
      <Layout 
      headerTitle="Latest Products " 
      headerText="We have number of items available in our stocks" 
      activPage="products">
                     <h1>Latest Products
                     </h1>
                
                    <div className='row'>
                        {products.map((product,key)=>{
                            return(
                                <div className='col-4 mb-3'>
                                <div class="card" >
                                <img src={product.image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                  <h5 class="card-title">{product.productName}</h5>
                                  <p class="card-text"><strong>{product.price}</strong></p>
                                  <p class="card-text">{product.productDesc}</p>
                                  
                                  <a href="/" class="btn btn-primary">Add to cart</a>
                                </div>
                              </div>
                              </div>  
                                 
                            )
                        })}
                   
                        </div>  

        </Layout>
        //or ve can we div instead of empty tag
    )
}
// export default Home; we acn export like this also

//we can add style like this but this is not right way
