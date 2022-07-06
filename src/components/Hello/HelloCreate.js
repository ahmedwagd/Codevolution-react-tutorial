import React, { createElement } from 'react';

function HelloCreate({ nameL }) {
  let te = "hellooo"
  return createElement("h1", { id: 'main' }, [te, createElement('span', { className: 'hell' }, `Hello ${nameL}`)])
}

export default HelloCreate;