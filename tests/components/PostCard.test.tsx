import { render } from "@testing-library/react";
import PostCard from "../../src/components/PostCard";
import { describe, it } from 'vitest';
import React from "react";
import { MemoryRouter } from "react-router-dom";


describe("Post Card page", () => {
  it("renders the PostCard components", () => {
    render(<MemoryRouter initialEntries={['post/2']}><PostCard userId={0} id={0} title={""} body={""} /></MemoryRouter>);
  });
});
