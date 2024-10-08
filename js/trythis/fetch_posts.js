const BASE_URL = 'https://jsonplaceholder.typicode.com';

const myFetch = async path => {
  const res = await fetch(`${BASE_URL}/${path}`);
  return res.json();
};

const getUserPosts직렬 = async userId => {
  const { id, name } = await myFetch(`users/${userId}`);
  const posts = await myFetch(`posts?userId=${userId}`);
  return { id, name, posts };
};

const getUserPosts = async userId => {
  const [user, posts] = await Promise.all([
    myFetch(`users/${userId}`),
    myFetch(`posts?userId=${userId}`),
  ]);
  const { id, name } = user;
  return { id, name, posts };
};

console.log('🚀  getUserPosts:', await getUserPosts(1));
