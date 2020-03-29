// require('dotenv').config();

const GetNewsFeed = () => {
  let api_url = '';

  if (process.env.NODE_ENV === 'development') {
    api_url = process.env.REACT_APP_API_URL;
  } else {
    // aguardando url da api de produção
  }

  fetch(api_url).then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
};
export default GetNewsFeed;
