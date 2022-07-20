import { getAuth } from "./authService";
import axios from "axios";

export async function getArtistData(artistId) {
  const token = await getAuth().then((res) => res);
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const url = `https://api.spotify.com/v1/search?q=${artistId}&market=FR&limit=10&type=artist`;
  try {
    const response = await axios.get(url, headers);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getArtistAlbums(artistId) {
  const token = await getAuth().then((res) => res);
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const url = `https://api.spotify.com/v1/artists/${artistId}/albums`;
  try {
    const response = await axios.get(url, headers);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
