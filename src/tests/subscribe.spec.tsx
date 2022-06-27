import { render, screen } from '@testing-library/react';
import { Subscribe } from '../page/Subscribe';


test('renders subscribe page', () => {
  render(<Subscribe />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
