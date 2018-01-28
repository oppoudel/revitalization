import React from 'react';

const Box = props => (
  <div className="box">
    <div className="content">
      <p>
        <strong>{props.title}</strong>
      </p>
    </div>
    <table className="table is-bordered">
      <tbody>
        <tr>
          <td>2017</td>
          <td>2016</td>
          <td>Difference</td>
        </tr>
        <tr>
          <td>{props.seventeen}</td>
          <td>{props.sixteen}</td>
          <td>
            {props.difference} {props.icon}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Box;
