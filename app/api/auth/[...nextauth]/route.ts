import { http } from "@/app/layout";
import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import axios from "axios";
import NextAuth, {
  Account,
  NextAuthOptions,
  Profile,
  Session,
} from "next-auth";
import { JWT } from "next-auth/jwt";
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
      // console.log(user.user.id);
      const headersList = headers();
      const domain = headersList.get("host");
      const users: User = await axios
        .get(`${http}://${domain}/api/user?id=${user.user.id}`)
        .then((response) => {
          return response.data;
        });
      if (!users.role) {
        console.log("none");
        await axios
          .put(`${http}://${domain}/api/user/${user.user.id}`)
          .then((response) => {
            //
            console.log(response.data);
            return response.data;
          });
      }
      if (!user) {
        return false;
      }
      return true;
    },

    async jwt({ token }: { token: JWT }) {
      const headersList = headers();
      const domain = headersList.get("host");
      const users: User = await axios
        .get(`${http}://${domain}/api/user?email=${token.email}`)
        .then((response) => {
          return response.data;
        });

      return {
        id: users._id,
        name: users.name,
        email: users.email,
        image: users.image,
        emailVerified: users.emailVerified,
        role: users.role,
      };
    },

    async session({ session, token }: { session: Session; token: any }) {
      if (token) {
        session.user = token;
      }

      console.log(session);

      return session;
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
