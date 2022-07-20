import { getAuth } from "./authService";
import axios from "axios";

export async function getMoodsPlaylist() {
  const token = await getAuth().then((res) => res);
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const url = `https://api.spotify.com/v1/browse/categories`;
  try {
    const response = await axios.get(url, headers);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getRecentlyPlayed() {
  const token = await getAuth().then((res) => res);
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const url = `https://api.spotify.com/v1/me/player/recently-played`;
  try {
    const response = await axios.get(url, headers);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
