import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Blog from "./Blog";

test("renders content", () => {
  const blog = {
    title: "test title",
    author: "test author",
    url: "test url",
    likes: 0,
  };

  render(<Blog blog={blog} />);

  const titleAndAuthor = screen.getByText("test title", "test author");
  //   const urlAndLikes = screen.queryByText("kjnkkk");
  //   screen.debug();
  expect(titleAndAuthor).toBeDefined();
  //   expect(urlAndLikes).toBeNull();
  //   expect(urlAndLikes).toBeNull();
  //   expect(urlAndLikes).toBeDefined();
});
