import { render } from "@testing-library/react";
import { describe, it } from 'vitest';
import React from "react";
import PosterFilter from "../../src/components/PosterFilter";


describe("PosterFilter components", () => {
  it("renders the PosterFilter components", () => {
    render(<PosterFilter posters={[]} selectedPosters={[]} setPosters={() => { } } filterName={""}  />);
  });
});
