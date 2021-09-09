import { render, screen, cleanup } from "@testing-library/react";
import ListScreen from '../ListScreen/ListScreen';

test("test", () => {
    expect(true).toBe(true);
})

test("should render ListScreen component", () => {
    render(<ListScreen />);
    const listScreenElement = screen.getByTestId('listScreen-1');
    expect(listScreenElement).toBeInTheDocument();
})