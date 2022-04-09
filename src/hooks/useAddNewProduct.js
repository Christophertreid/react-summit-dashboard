import {useState} from 'react'

import {ref, push, set} from 'firebase/database'
import {ref as storageRef, uploadBytes, getDownloadURL} from 'firebase/storage'
import { db, storage } from 'libs/firebase';

function useAddNewProduct(){

  const [loading, setLoading]=useState(false)

  

  const loader = async function(productData, imageFile){

    setLoading(true);
    
    const dataRef = await push(ref(db, 'products'));
    
    const imgRef = await storageRef(storage, `images/products/${productData.productName}`);
    const uploadRef = await uploadBytes(imgRef, imageFile);
    const imgURL = await getDownloadURL(imgRef);

    set(dataRef, {...productData});

    let results = Promise.all([dataRef,imgRef, uploadRef, imgURL]);
    results.then(()=>{
      set(dataRef, {
        ...productData,
        imgURL,
        imageStoragePath:uploadRef.metadata.fullPath,
        uid:dataRef.key})
      })
      .then(()=>{setLoading(false)});
    }

    return[loading, loader]
  }

export{useAddNewProduct}