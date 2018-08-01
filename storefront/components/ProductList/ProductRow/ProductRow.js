import React from 'react';

import './ProductRow.scss'

const productRow = (props) => (
  <div className="productRow-container">
    {props.children}
  </div>
)

export default productRow