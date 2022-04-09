import {useState, useEffect} from 'react'
import{ref, get} from 'firebase/database'
import {db} from 'libs/firebase'


function useGetAllProducts(path='products'){
  const [productData, setProductData]=useState(null);
  
  useEffect(()=>{
    async function getProductData(){
      const productRef = ref(db, 'products');
      const dataSnapshot = await get(productRef);
      setProductData(Object.values(dataSnapshot.val()));
    }
    getProductData()
  }, [])
  
  
  return productData;
}

export {useGetAllProducts}