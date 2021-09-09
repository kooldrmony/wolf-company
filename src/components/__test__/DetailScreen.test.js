import { render, screen, cleanup } from "@testing-library/react";
import DetailScreen from '../DetailScreen/DetailScreen';

test("test", () => {
    expect(true).toBe(true);
})

test("should render ListScreen component", () => {
    render(<DetailScreen />);
    const listScreenElement = screen.getByTestId('detailScreen-1');
    expect(listScreenElement).toBeInTheDocument();
})