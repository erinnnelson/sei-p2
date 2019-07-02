import axios from 'axios'

const proxy = "https://thingproxy.freeboard.io/fetch/";
const token = "808cb7ccc74833a1c783c51a0e10d84a";
const base = "https://api.getsongbpm.com";

export const searchSongByTitle = async (search) => {
  try {
    let query = search.split(' ').join('+');
    const response = await axios.get(`${proxy}${base}/search/?api_key=${token}&type=song&lookup=${query}`);
    return response
  } catch (e) {
    return e.response.data
  }
}

export const getSongById = async (id) => {
  const response = await axios.get(`${proxy}${base}/song/?api_key=${token}&id=${id}`);
  return response.data.song
}
