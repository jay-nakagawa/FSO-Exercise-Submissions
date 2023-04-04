import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import Blog from "./Blog";
describe("Blog entry", () => {
  const blog = {
    title: "test title",
    author: "test author",
    url: "test url",
    likes: "0",
    user: {
      username: "test username",
    },
  };
  const user = {
    username: "test username",
  };
  test("renders content", () => {
    const { container } = render(<Blog blog={blog} user={user} />);
    const titleAndAuthor = container.querySelector(".titleAndAuthor");
    const url = container.querySelector(".url");
    const likes = container.querySelector(".likes");

    expect(titleAndAuthor).toHaveTextContent("test title");
    expect(titleAndAuthor).toHaveTextContent("test author");
    expect(url).not.toBeInTheDocument();
    expect(likes).not.toBeInTheDocument();
  });

  test("URL and number of likes are shown when the button is clicked", () => {
    render(<Blog blog={blog} user={user} />);
    expect(screen.queryByText("test url")).not.toBeInTheDocument();
    // screen.debug();

    //   // Click the "Show details" button
    fireEvent.click(screen.getByText("show"));

    //   // Check that the URL and likes are now visible
    expect(screen.getByText("test url")).toBeInTheDocument();
    expect(screen.getByText(`likes = ${blog.likes}`)).toBeInTheDocument();
  });
});
