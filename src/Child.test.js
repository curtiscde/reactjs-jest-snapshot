import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Child from './Child';

describe('Child', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Child />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches snapshot', () => {
    const tree = renderer
      .create(<Child/>);
    expect(tree).toMatchSnapshot();
  });

});