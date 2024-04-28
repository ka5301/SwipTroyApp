import swipToryBaseUrl from './swiptoryapibaseurl'

const createStory = swipToryBaseUrl + "story/create";
const getStories = swipToryBaseUrl + "story";
const getStoryById = id => swipToryBaseUrl + "story/" + id;
const likeStory = id => swipToryBaseUrl + "story/like/" + id;
const bookmarkStory = id => swipToryBaseUrl + "story/bookmark/" + id;
const saveStory = id => swipToryBaseUrl + "story/save/" + id;

export {createStory, getStories, getStoryById, likeStory, bookmarkStory, saveStory};