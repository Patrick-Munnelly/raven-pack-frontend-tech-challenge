import { render } from "@testing-library/react";
import Footer from "../../src/components/Footer";
import { describe, it } from 'vitest';
import React from "react";


describe("Footer components", () => {
  it("renders the Footer components", () => {
    render(<Footer  />);
  });
});
