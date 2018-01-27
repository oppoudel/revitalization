import React from 'react';

const Neighborhood = props => (
  <div>
    <p>{props.attributes.Name}</p>
    <p>
      Total Number of Properties Sold:{' '}
      {props.attributes.TotalNumSold17 - props.attributes.TotalNumSold16}
    </p>
  </div>
);

export default Neighborhood;
