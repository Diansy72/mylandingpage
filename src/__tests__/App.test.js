import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders a title', () => {
    render(<App />);
    const titleElement = screen.getByText(/welcome/i);
    expect(titleElement).toBeInTheDocument();
});