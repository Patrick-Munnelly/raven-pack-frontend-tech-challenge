import { render } from "@testing-library/react";
import ErrorPage from "../../src/pages/ErrorPage";
import { describe, it } from 'vitest';
import React from "react";


describe("Error page", () => {
  it("renders the Error page", () => {
    render(<ErrorPage />);
  });
});
