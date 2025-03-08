import { render } from '@testing-library/react';
import { Footer } from '@common';

describe('Footer component', () => {
  it('Snapshot Testing', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
