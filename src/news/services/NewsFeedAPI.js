const getNewsFeed = () => (
  fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=ad9e2a7b83f946faa83304664b67e5e3")
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getNewsFeed;
