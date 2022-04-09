import React from 'react';

import {EditProductPanelStyles} from './styles'

function EditProductPanel ({children, ...props})  {
  return (
        <EditProductPanelStyles  {...props}>
           <h2>EditProductPanel Component</h2>
           {children}

        </EditProductPanelStyles>
  )
}

export default EditProductPanel