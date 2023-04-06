import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BlogForm from "./BlogForm";
import userEvent from "@testing-library/user-event";

// test("<BlogForm /> updates parent state and calls onSubmit", async () => {
//   const createBlog = jest.fn();
//   const user = userEvent.setup();

//   const { container } = render(<BlogForm createBlog={createBlog} />);

//   const titleInput = container.querySelector("input[name='Title']");

//   const sendButton = screen.getByText("save");

//   await user.type(titleInput, "testing a form...");
//   await user.click(sendButton);

//   expect(createBlog.mock.calls).toHaveLength(1);
//   expect(createBlog.mock.calls[0][0].content).toBe("testing a form...");
// });

test("<BlogForm /> updates parent state and calls onSubmit", async () => {
  const createBlog = jest.fn();
  const addBlog = jest.fn();
  const user = userEvent.setup();

  const { container } = render(
    <BlogForm createBlog={createBlog} addBlog={addBlog} />
  );

  const titleInput = container.querySelector("input[name='Title']");
  const authorInput = container.querySelector("input[name='Author']");
  const urlInput = container.querySelector("input[name='Url']");
  const sendButton = screen.getByText("save");

  await user.type(titleInput, "title");
  await user.type(authorInput, "author");
  await user.type(urlInput, "https://www.test.com");
  await user.click(sendButton);

  console.log("createBlog",createBlog.mock.calls[0]);
  console.log("addblog",addBlog.mock.calls[0]);

  expect(addBlog.mock.calls).toHaveLength(1);
  expect(addBlog.mock.calls[0][0]).toEqual({
    title: "title",
    author: "author",
    url: "https://www.test.com",
  });
});
