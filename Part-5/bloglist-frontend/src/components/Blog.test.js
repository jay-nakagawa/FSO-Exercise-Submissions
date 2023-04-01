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

  const element = screen.getByText(
    "test title"
  );
  expect(element).toBeDefined();
});
