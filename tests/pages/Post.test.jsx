import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import Post from "../../src/pages/Post";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

describe("Post page: ", () => {
  it("renders the Post Page", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["post/2"]}>
          <Post />
        </MemoryRouter>
      </QueryClientProvider>
    );
  });
});
