const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.length === 0
    ? 0
    : blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const mostLikes = (blogs) => {
  let arrOfLikes = blogs.map((blogs) => blogs.likes);
  let index = arrOfLikes.indexOf(Math.max(...arrOfLikes));

  return blogs[index];
};

module.exports = {
  dummy,
  totalLikes,
  mostLikes,
};
