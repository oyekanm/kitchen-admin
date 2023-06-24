import { http } from "@/app/layout";
import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import axios from "axios";
import NextAuth, { Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { headers } from "next/headers";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as any,
      clientSecret: process.env.GOOGLE_SECRET as any,
    }),

    // ...add more providers here
  ],
  session: { strategy: "jwt" },
  pages: {
    //   signIn:'/auth/signin',
    // newUser: '/settings'
  },
  adapter: MongoDBAdapter(clientPromise),

  callbacks: {
    async signIn(user: any) {
      if (!user) {
        return false;
      }
      return true;
    },

    async jwt({ token }: { token: any }) {
      const headersList = headers();
      const domain = headersList.get("host");
      // console.log(token);
      if (token) {
        const users: User = await axios
          .get(`${http}://${domain}/api/user?email=${token.email}`)
          .then((response) => {
            return response.data;
          });
        // console.log(token.role);

        return {
          id: users?._id,
          name: users?.name,
          email: users?.email,
          image: users?.image,
          emailVerified: users?.emailVerified,
          role: users?.role,
        };
      }
    },

    async session({
      session,
      user,
      token,
    }: {
      session: Session;
      user: any;
      token: any;
    }) {
      if (token) {
        session.user = token;
      }
      if (!token) {
        session.user = user;
      }
      // console.log(session);

      if (session.user.role === "ADMIN") {
        return session;
      }

      return null;
    },
  },
  events: {
    // signin:({user,account,profile,isNewUser}) =>{
    //   console.log({newUser: JSON.stringify( isNewUser)});
    //   // console.log({user,account,profile,isNewUser});
    // }
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
