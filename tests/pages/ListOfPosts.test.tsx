import { render } from "@testing-library/react";
import ListOfPosts from "../../src/pages/ListOfPosts";
import { describe, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";


const queryClient = new QueryClient();

describe("Lisr of posts: ", () => {
  it("renders the List of post page", () => {
    render(
      <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={[""]}>
      <ListOfPosts />
      </MemoryRouter>
    </QueryClientProvider>
    
    );
  });
});
