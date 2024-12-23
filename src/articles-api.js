import axios from "axios";

const defaultURL = "https://hn.algolia.com/api/v1";

export const fetchArticlesWithTopic = async (topic) => {
  const response = await axios.get(`${defaultURL}/search?query=${topic}`);
  console.log(response.data.hits);

  return response.data.hits;
};
