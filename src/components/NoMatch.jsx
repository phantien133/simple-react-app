import React from 'react';

const NoMatch = (props) => {
  throw 'asdasdsd';
  return (
    <div>
      <h2>
        Ops! There is no content at:
        <br />
        <br />
        {props.location.pathname}
      </h2>
    </div>
  );
};

export default NoMatch;
