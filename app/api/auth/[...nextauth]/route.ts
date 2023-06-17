import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google";


export const authOptions= {
 // Configure one or more authentication providers
 providers: [
  GoogleProvider({
      clientId: process.env.GOOGLE_ID as any ,
      clientSecret: process.env.GOOGLE_SECRET as any
    }),
  
// ...add more providers here
],
session: { strategy: "jwt" },
pages:{
//   signIn:'/auth/signin',
// newUser: '/settings'
},
adapter: MongoDBAdapter(clientPromise),

callbacks: {
  // async signIn(user, account, profile?) {
  //   console.log({user, account, profile});
    
  //   return true
  // },
  // async redirect(url, baseUrl) {
  //   return baseUrl
  // },
  // async session(session) {
  //   session.
    
  //   return session
  // },
  // async jwt(token, user, account, profile, isNewUser) {
  //   console.log({token, user, account, profile, isNewUser});
    
  //   return token
  // }
  async jwt({ token, user }) {
    // console.log({ ...token, ...user });
    
    return { ...token, ...user };
  },

  async session({ session, token }) {
    session.user = token as any;
    session.house = "mine"
    // console.log(session);
    
    return session;
  },
},
events:{
  // signin:({user,account,profile,isNewUser}) =>{
  //   console.log({newUser: JSON.stringify( isNewUser)});
  //   // console.log({user,account,profile,isNewUser});
    
  // }
}


}

const handler = NextAuth(authOptions)
  export { handler as GET, handler as POST }