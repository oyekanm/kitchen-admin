import axios from "axios"

export async function getCategory(url:string):Promise<Category[]> {
    const res = await axios.get(url)
    return res.data
}
