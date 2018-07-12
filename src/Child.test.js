import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Child from './Child';

describe('Child', () => {

  it('matches snapshot', () => {
    const tree = renderer
      .create(<Child/>);
    expect(tree).toMatchSnapshot();
  });

});