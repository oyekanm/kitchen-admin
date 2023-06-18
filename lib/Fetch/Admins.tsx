import axios from "axios"

export async function getAdmins(url:string):Promise<User[]> {
    const res = await axios.get(url)
    return res.data
}