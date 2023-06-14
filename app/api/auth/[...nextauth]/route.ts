import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
 // Configure one or more authentication providers
 providers: [
  GoogleProvider({
      clientId: process.env.GOOGLE_ID as any ,
      clientSecret: process.env.GOOGLE_SECRET as any
    }),
  
// ...add more providers here
],
pages:{
  signIn:'/auth/signin',
},
adapter: MongoDBAdapter(clientPromise),
callbacks: {
  // async signIn(user, account, profile) {
  //   console.log({user, account, profile});
    
  //   return true
  // },
  // async redirect(url, baseUrl) {
  //   return baseUrl
  // },
  // async session(session, user) {
  //   return session
  // },
  // async jwt(token, user, account, profile, isNewUser) {
  //   return token
  // }
}


}

const handler = NextAuth(authOptions)
  export { handler as GET, handler as POST }