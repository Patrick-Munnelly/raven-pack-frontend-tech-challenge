import { render } from "@testing-library/react";
import { describe, it } from 'vitest';
import React from "react";
import Comments from "../../src/components/Comments";


describe("Comments components", () => {
  it("renders the Comments components", () => {
    render(<Comments comments={[]}  />);
  });
});
