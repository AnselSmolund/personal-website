import axios from "axios";
const apiBase = "https://www.strava.com/";

export const getAuthToken = async ({ client_id, client_secret, code }) => {
  const url = `https://www.strava.com/oauth/token`;

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: process.env.client_id,
      client_secret: process.env.client_secret,
      code: process.env.code,
      grant_type: "authorization_code",
    }),
  };
  let response = await fetch(url, options);
  let data = await response.json();
  return data;
};

export const getRefreshToken = async () => {
  const url = `https://www.strava.com/oauth/token`;

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: process.env.client_id,
      client_secret: process.env.client_secret,
      code: process.env.refresh,
      grant_type: "refresh_token",
    }),
  };
  let response = await fetch(url, options);
  let data = await response.json();
  return data;
};

export const getActivities = async (num_rides) => {
  const { access_token } = await getRefreshToken();
  const url = `${apiBase}/api/v3/athlete/activities?per_page=${num_rides}&access_token=${access_token}`;

  let { data } = await axios.get(url);

  return data;
};

export const getStravaStats = async () => {
  const { access_token } = await getRefreshToken();

  const url = `${apiBase}api/v3/athletes/43174923/stats?access_token=${access_token}`;

  let { data } = await axios.get(url);

  return data;
};
