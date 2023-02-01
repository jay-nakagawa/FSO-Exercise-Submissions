const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.length === 0
    ? 0
    : blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const mostLikes = (blogs) => {


  let maxLiked = blogs.map(blogs => blogs.likes)
  let index = maxLiked.indexOf(Math.max(...maxLiked))
  
console.log('this is max',maxLiked)
console.log('this is blogs.index',blogs[index])
return blogs[index]
  // const mostLiked = blogs.reduce((prev, curr) => {
  //   return prev.likes > curr.likes ? prev : curr;
  // });

  // return {
  //   title: mostLiked.title,
  //   author: mostLiked.author,
  //   likes: mostLiked.likes,
  // };
}

module.exports = {
  dummy,
  totalLikes,
  mostLikes,
};
