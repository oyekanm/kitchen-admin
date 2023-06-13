
export default async function getPosts(userId:string) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

    if(!data.ok) throw new Error ('failed to fetch post data')
    
  return data.json()
}
