import React from 'react';
import renderer from 'react-test-renderer';
import SampleText from './SampleText';

describe('SampleText', () => {

  it('matches snapshot', () => {
    const tree = renderer
      .create(<SampleText/>);
    expect(tree).toMatchSnapshot();
  });

});