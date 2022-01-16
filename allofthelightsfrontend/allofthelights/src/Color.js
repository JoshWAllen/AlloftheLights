import React from 'react';

function Color(props) {
  return (
    <input
      type='color'
      className='form-control form-control-color col'
      readOnly={props.colorCode}
      onChange={props.changeColor}
      title='Choose your color'
      name='color'
    ></input>
  );
}

export default Color;
