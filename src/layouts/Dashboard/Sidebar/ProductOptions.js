 import { useState } from 'react';
 import * as s from './styles'
const ProductOptions = (props) => {
  
  const [seeProducts, setSeeProducts] = useState(false);
  function onSeeProducts(e) {
    seeProducts ? setSeeProducts(false) : setSeeProducts(true)
  };

  return (  
    <>
        <s.PageLink to="/dashboard" onClick={onSeeProducts}><span><svg strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M460 160h-88v-12A116.13 116.13 0 00258.89 32h-5.78A116.13 116.13 0 00140 148v12H52a4 4 0 00-4 4v300a16 16 0 0016 16h384a16 16 0 0016-16V164a4 4 0 00-4-4zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 01332 148v12H180zm188 91a112 112 0 01-224 0v-32h32v32a80 80 0 00160 0v-32h32z"></path></svg></span><span>Products</span></s.PageLink>
        <s.LinkSection view={seeProducts}>
          <div>
            <s.PageLink to="/dashboard" >
              <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1.41 292.9l44.82 76.97 98.14-56.38-44.73-77.37L1.41 292.9z"></path><path d="M287.87 252.34l23.67-13.81-63.42-110-132.92 77C133.75 237.51 176 310 176 310l15.53-8.32c.24-.13.55 0 .83 0L102.65 496h35.16l99.05-214.25 23.24-13.4L358 464h36zM262.08 96c24.81 42.23 60.25 104.25 86.4 148.76L510.79 151 424.07 1.41z"></path></svg></span><span>View</span>
            </s.PageLink>
            <s.PageLink to="add">
              <span><svg stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm96 224h-80v80h-32v-80h-80v-32h80v-80h32v80h80z"></path></svg></span><span>Add</span>
            </s.PageLink>
            <s.PageLink to="edit">
              <span><svg  stroke-width="0" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="M294.28 256.9l-54.42-54.41a12 12 0 00-17 0L12.45 401a12 12 0 00-.27 17.2l66.05 66.28a12 12 0 0017.22-.23l198.81-210.36a12 12 0 00.02-16.99zm205.05-57.57l-43.89-43.58a21.46 21.46 0 00-15.28-6.26 21.89 21.89 0 00-12.79 4.14c0-.43.06-.85.09-1.22.45-6.5 1.15-16.32-5.2-25.22a258 258 0 00-24.8-28.74.6.6 0 00-.08-.08c-13.32-13.12-42.31-37.83-86.72-55.94A139.55 139.55 0 00257.56 32C226 32 202 46.24 192.81 54.68A53.4 53.4 0 00176 86.17L192 96s8.06-2 13.86-3.39a62.73 62.73 0 0118.45-1.15c13.19 1.09 28.79 7.64 35.69 13.09 11.7 9.41 17.33 22.09 18.26 41.09.2 4.23-9.52 21.35-24.16 39.84a8 8 0 00.61 10.62l45.37 45.37a8 8 0 0011 .25c12.07-11 30.49-28 34.67-30.59 7.69-4.73 13.19-5.64 14.7-5.8a19.18 19.18 0 0111.29 2.38 1.24 1.24 0 01-.31.95l-1.82 1.73-.3.28a21.52 21.52 0 00.05 30.54l43.95 43.68a8 8 0 0011.28 0l74.68-74.2a8 8 0 00.06-11.36z"></path></svg></span><span>Edit</span>
            </s.PageLink>
          </div>
        </s.LinkSection>
    </>

  );
}
 
export default ProductOptions;