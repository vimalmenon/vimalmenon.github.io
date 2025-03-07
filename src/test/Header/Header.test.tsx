import { render } from '@testing-library/react';
import { Header } from '@common';

describe('Header component', () => {
  it('Snapshot Testing', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
