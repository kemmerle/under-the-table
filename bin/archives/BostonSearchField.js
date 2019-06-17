import React from 'react';

const BostonSearchField = (props) => {
  return (
    <label>{props.label}
      <textarea
        name={props.name}
        value={props.content}
        onChange={props.onChange}
      />
    </label>
  );
}

export default BostonSearchField;
