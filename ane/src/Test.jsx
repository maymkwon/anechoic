import React from 'react';

const Test = ({text}) => {
  return (
    <div>
      {text.toJS()}
    </div>
  );
};

export default Test;