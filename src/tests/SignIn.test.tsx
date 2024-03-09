import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SignIn } from "../pages/SignIn";

test("should render the component with title and sign up link", () => {
  render(<SignIn />);

  expect(
    screen.getByText("Welcome back to QuantumSafe Bank!")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Not yet a part of our family? Please sign up here!")
  ).toBeInTheDocument();
});

test("should show email validation error on empty email", async () => {
  render(<SignIn />);

  const submitButton = screen.getByRole("button", { name: /submit/i });
  fireEvent.click(submitButton);

  await new Promise((resolve) => setTimeout(resolve, 100)); // Wait for error message rendering

  expect(screen.getByText("Please use an email address")).toBeInTheDocument();
});

test("should show email validation error on invalid email format", async () => {
  render(<SignIn />);

  const emailInput = screen.getByPlaceholderText("name@quantumsafebank.com");
  userEvent.type(emailInput, "invalidEmail");

  const submitButton = screen.getByRole("button", { name: /submit/i });
  fireEvent.click(submitButton);

  await new Promise((resolve) => setTimeout(resolve, 100)); // Wait for error message rendering

  expect(screen.getByText("Invalid email format")).toBeInTheDocument();
});

test("should show password validation error on empty password", async () => {
  render(<SignIn />);

  const emailInput = screen.getByPlaceholderText("name@quantumsafebank.com");
  userEvent.type(emailInput, "test@example.com");

  const submitButton = screen.getByRole("button", { name: /submit/i });
  fireEvent.click(submitButton);

  await new Promise((resolve) => setTimeout(resolve, 100)); // Wait for error message rendering

  expect(screen.getByText("Please enter your password")).toBeInTheDocument();
});

test("should not show validation errors on valid input and submit form data", async () => {
  render(<SignIn />);

  const emailInput = screen.getByPlaceholderText("name@quantumsafebank.com");
  const passwordInput = screen.getByPlaceholderText("Password");
  userEvent.type(emailInput, "test@example.com");
  userEvent.type(passwordInput, "password123");

  const submitButton = screen.getByRole("button", { name: /submit/i });
  fireEvent.submit(submitButton);

  expect(
    screen.queryByText("Please use an email address")
  ).not.toBeInTheDocument();
  expect(screen.queryByText("Invalid email format")).not.toBeInTheDocument();
  expect(
    screen.queryByText("Please enter your password")
  ).not.toBeInTheDocument();
});
