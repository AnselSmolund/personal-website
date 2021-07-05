import axios from "axios";
import { auth } from "../auth";
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
      client_id,
      client_secret,
      code,
      grant_type: "authorization_code",
    }),
  };
  let response = await fetch(url, options);
  let data = await response.json();
  return data;
};

export const getRefreshToken = async (
  client_id,
  client_secret,
  refresh_token
) => {
  const url = `https://www.strava.com/oauth/token`;

  const options = {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: client_id,
      client_secret: client_secret,
      refresh_token: refresh_token,
      grant_type: "refresh_token",
    }),
  };
  let response = await fetch(url, options);
  let data = await response.json();
  return data;
};

export const getActivities = async (num_rides) => {
  const { access_token } = await getRefreshToken(
    auth.client_id,
    auth.client_secret,
    auth.refresh
  );
  const url = `${apiBase}/api/v3/athlete/activities?per_page=${num_rides}&access_token=${access_token}`;

  let { data } = await axios.get(url);

  return data;
};

export const getStravaStats = async () => {
  const { access_token } = await getRefreshToken(
    auth.client_id,
    auth.client_secret,
    auth.refresh
  );

  const url = `${apiBase}api/v3/athletes/43174923/stats?access_token=${access_token}`;

  let { data } = await axios.get(url);

  return data;
};
