import { render } from "@testing-library/react";
import Header from "../../src/components/Header";
import { describe, it } from 'vitest';
import React from "react";


describe("Header components", () => {
  it("renders the Header components", () => {
    render(<Header  />);
  });
});
