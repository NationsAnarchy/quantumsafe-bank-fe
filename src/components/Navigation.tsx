import { Navbar, Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
    <Navbar fluid rounded className="mx-auto max-w-screen-2xl">
      <Navbar.Brand href="#">
        <img
          src="/flowbite.svg"
          className="mr-3 h-6 sm:h-9"
          alt="QuantumSafe Bank"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          QuantumSafe Bank
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to="/signin">
          <Button color="blue">
            Get started{" "}
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">Home</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
