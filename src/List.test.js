import React from 'react';
import renderer from 'react-test-renderer';
import List from './List';

describe('List', () => {

  it('matches snapshot', () => {
    const tree = renderer
      .create(<List/>);
    expect(tree).toMatchSnapshot();
  });

});