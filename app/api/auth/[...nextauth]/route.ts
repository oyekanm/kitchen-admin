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

adapter: MongoDBAdapter(clientPromise),


}

const handler = NextAuth(authOptions)
  export { handler as GET, handler as POST }