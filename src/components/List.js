import React from 'react';
import { Link } from 'react-router-dom';
const NeighborhoodList = props => (
  <ul>
    {props.neighborhoods.map((neighborhood, i) => (
      <li key={i}>
        <Link to={`/${neighborhood.attributes.Name.toLowerCase()}`}>
          {neighborhood.attributes.Name}
        </Link>
      </li>
    ))}
  </ul>
);

export default NeighborhoodList;
