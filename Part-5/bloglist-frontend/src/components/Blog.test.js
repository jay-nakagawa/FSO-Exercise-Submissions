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
  const title = container.querySelector(".title");
  // const author = container.querySelector(".author");
  const url = container.querySelector(".url");

  expect(title).toHaveTextContent("test title", "test author");
  // expect(author).toHaveTextContent("test author");
  expect(url).not.toBeInTheDocument();
  screen.debug();

  // const titleAndAuthor = screen.getByText("test title", "test author");
  //   const urlAndLikes = screen.queryByText("kjnkkk");
  //   screen.debug();
  // expect(titleAndAuthor).toBeDefined();
  //   expect(urlAndLikes).toBeNull();
  //   expect(urlAndLikes).toBeNull();
  //   expect(urlAndLikes).toBeDefined();
});
