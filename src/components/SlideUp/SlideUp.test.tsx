import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SlideUp from './index';

const slideUpRoot = document.createElement('div');
slideUpRoot.setAttribute('id', 'slide-up-root');
document.body.appendChild(slideUpRoot);

describe('SlideUp component', () => {
  test('renders with text passed in', () => {
    render(<SlideUp close={() => {}}>Hello World</SlideUp>);
    expect(screen.getByText('Hello World')).toBeTruthy();
  });

  test('calls close prop when component is clicked', () => {
    const close = jest.fn();
    const {getByRole} = render(<SlideUp close={close}>Hello World</SlideUp>);
    fireEvent.click(getByRole(/button/));
    expect(close).toHaveBeenCalledTimes(1);
  });
});
