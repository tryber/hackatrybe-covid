function getApiUrl() {
  const url = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_URL : process.env.REACT_APP_PROD_API_URL;
  return url;
}

const GetNewsFeed = (page) => (
  fetch(`${getApiUrl()}?page=${page}`).then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  )
);

export default GetNewsFeed;
