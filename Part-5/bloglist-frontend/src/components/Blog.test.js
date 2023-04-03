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
  const url = container.querySelector(".url");
  const likes = container.querySelector(".likes");

  expect(titleAndAuthor).toHaveTextContent("test title");
  expect(titleAndAuthor).toHaveTextContent("test author");
  expect(url).not.toBeInTheDocument();
  expect(likes).not.toBeInTheDocument();


  // screen.debug();

  //   const urlAndLikes = screen.queryByText("kjnkkk");
  //   screen.debug();
  // expect(titleAndAuthor).toBeDefined();
  //   expect(urlAndLikes).toBeNull();
  //   expect(urlAndLikes).toBeNull();
  //   expect(urlAndLikes).toBeDefined();
});
