import App from '../App';
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react';

describe('Tests that the app its self renders correctly', () => {

  it(' App renders correctly', () => {
    render(<App />)
    //  .toJSON()
    // expect(tree).toMatchSnapshot()
  })
})