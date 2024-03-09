import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SignUp } from "../pages/SignUp";

test("SignUp renders the form elements correctly", async () => {
  render(<SignUp />);

  const heading = await screen.findByText("Please fill in this sign up form");
  const nameInput = await screen.findByLabelText("Name");
  const emailInput = screen.getByLabelText("Email");
  const passwordInput = screen.getByLabelText("Password");

  expect(heading).toBeInTheDocument();
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test("SignUp displays validation errors for missing fields", async () => {
  render(<SignUp />);

  userEvent.click(screen.getByText("Submit"));

  const nameError = await screen.findByText("Please enter your name");
  const uniqueIdError = await screen.findByText(
    "Please enter your Unique Identifcation number"
  );
  const emailError = screen.getByText("Please use an email address");
  const passwordError = screen.getByText("Please input a password");
  const phoneError = screen.getByText("Please enter your phone number");

  expect(nameError).toBeInTheDocument();
  expect(uniqueIdError).toBeInTheDocument();
  expect(emailError).toBeInTheDocument();
  expect(passwordError).toBeInTheDocument();
  expect(phoneError).toBeInTheDocument();
});

test("SignUp handles form submission with valid data (mock onSubmit)", async () => {
  const mockSubmit = jest.fn();
  render(<SignUp onSubmit={mockSubmit} />);

  const nameInput = screen.getByLabelText("Name");
  const emailInput = screen.getByLabelText("Email");
  const passwordInput = screen.getByLabelText("Password");

  userEvent.click(screen.getByText("Submit"));

  expect(mockSubmit).toHaveBeenCalledTimes(1);
});

test("SignUp allows selecting a country", async () => {
  render(<SignUp />);

  const countrySelect = screen.getByLabelText("Country");
  const firstOption = await screen.findByText(/Select a country/i); 

  expect(firstOption).toBeInTheDocument(); 

  userEvent.select(countrySelect, "Thailand"); 

  expect(screen.getByText("Thailand")).toBeInTheDocument();
});

\test("SignUp allows simulated file upload", async () => {
  render(<SignUp />);

  const fileInput = screen.getByLabelText("Proof of Identity");
  const mockFile = new File(["test content"], "test.jpg", {
    type: "image/jpeg",
  });

  userEvent.upload(fileInput, mockFile);

  expect(fileInput.files[0]).toEqual(mockFile);
});
