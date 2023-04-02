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

  const { container } = render(<Blog blog={blog} />);
  const titleAndAuthor = container.querySelector(".titleAndAuthor");
  // const author = container.querySelector(".author");
  const url = container.querySelector(".url");

  expect(titleAndAuthor).toHaveTextContent("test title", "test author");
  // expect(author).toHaveTextContent("test author");
  expect(url).not.toBeInTheDocument();
  screen.debug();

  //   const urlAndLikes = screen.queryByText("kjnkkk");
  //   screen.debug();
  // expect(titleAndAuthor).toBeDefined();
  //   expect(urlAndLikes).toBeNull();
  //   expect(urlAndLikes).toBeNull();
  //   expect(urlAndLikes).toBeDefined();
});
