import axios from "axios";


export async function getProduct (url:string) : Promise<Foods[]> {
  const res = await axios.get(url)
  return res.data
}