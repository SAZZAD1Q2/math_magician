import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Home', () => {
  test('should render the component', () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
