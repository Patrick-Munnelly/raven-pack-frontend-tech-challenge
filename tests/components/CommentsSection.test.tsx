import { render } from "@testing-library/react";
import { describe, it } from 'vitest';
import React from "react";
import CommentSection from "../../src/components/CommentsSection";


describe("Comments components", () => {
  it("renders the Comments components", () => {
    render(<CommentSection comments={[]}  />);
  });
});
