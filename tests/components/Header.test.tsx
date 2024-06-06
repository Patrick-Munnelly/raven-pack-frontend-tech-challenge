import { render } from "@testing-library/react";
import Header from "../../src/components/Header";
import { describe, it } from 'vitest';
import React from "react";
import { MemoryRouter } from "react-router-dom";


describe("Header components", () => {
  it("renders the Header components", () => {
    render(      <MemoryRouter initialEntries={[""]}>
    <Header  /></MemoryRouter>);
  });
});
