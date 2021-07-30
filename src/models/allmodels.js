import Album from "./modelAlbum.js";
import Comment from "./modelComment.js";
import Photo from "./modelPhoto.js";
import Post from "./modelPost.js";
import Todo from "./modelTodo.js";
import User from "./modelUser.js";

const models = {
  albums: Album,
  comments: Comment,
  photos: Photo,
  posts: Post,
  todos: Todo,
  users: User,
};
export default models;
