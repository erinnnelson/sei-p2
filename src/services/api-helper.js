import axios from 'axios'

const proxy = "https://thingproxy.freeboard.io/fetch/";
const token = "808cb7ccc74833a1c783c51a0e10d84a";
const base = "https://api.getsongbpm.com";

export const searchSong = async (search) => {
  let query = search.split(' ').join('+');
  const response = await axios.get(`${proxy}${base}/search/?api_key=${token}&type=song&lookup=${query}`);
  console.log(response);
  return response
}

export const getSong = async (id) => {
  const response = await axios.get(`${proxy}${base}/song/?api_key=${token}&id=983pB`);
  console.log(response);
  return response
}
