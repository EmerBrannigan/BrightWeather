import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import SearchBar from "./SearchBar";

describe("SearchBar Component", () => {
  it("calls onSearch when form is submitted with valid city", () => {
    // Arrange
    const mockSearch = vi.fn();
    render(<SearchBar onSearch={mockSearch} />);

    // Act
    const input = screen.getByPlaceholderText(/enter city/i);
    fireEvent.change(input, { target: { value: "London" } });
    fireEvent.click(screen.getByText(/search/i));

    // Assert
    expect(mockSearch).toHaveBeenCalledWith("London", "GB");
  });

  it("does not call onSearch when city input is empty", () => {
    // Arrange
    const mockSearch = vi.fn();
    render(<SearchBar onSearch={mockSearch} />);

    // Act
    fireEvent.click(screen.getByText(/search/i));

    // Assert
    expect(mockSearch).not.toHaveBeenCalled();
  });

  it("calls onSearch with selected country", () => {
    // Arrange
    const mockSearch = vi.fn();
    render(<SearchBar onSearch={mockSearch} />);

    // Act
    const input = screen.getByPlaceholderText(/enter city/i);
    const countrySelect = screen.getByDisplayValue(/uk/i);
    
    fireEvent.change(input, { target: { value: "Paris" } });
    fireEvent.change(countrySelect, { target: { value: "FR" } });
    fireEvent.click(screen.getByText(/search/i));

    // Assert
    expect(mockSearch).toHaveBeenCalledWith("Paris", "FR");
  });

  it("submits when Enter key is pressed", () => {
    const mockSearch = vi.fn();
    const { container } = render(<SearchBar onSearch={mockSearch} />);

    const input = screen.getByPlaceholderText(/enter city/i);
    fireEvent.change(input, { target: { value: "Berlin" } });

    const form = container.querySelector("form");
    fireEvent.submit(form);

    expect(mockSearch).toHaveBeenCalledWith("Berlin", "GB");
 });


 it("renders search button with type submit", () => {
    render(<SearchBar onSearch={() => {}} />);
    const btn = screen.getByRole("button", { name: /search/i });
    expect(btn).toHaveAttribute("type", "submit");
 });
});
