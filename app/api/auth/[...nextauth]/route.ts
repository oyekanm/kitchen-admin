// import { http } from "@/app/layout";
// import clientPromise from "@/lib/mongodb";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import axios from "axios";
// import NextAuth, { Account, AuthOptions, NextAuthOptions, Profile, Session } from "next-auth";
// import { AdapterUser } from "next-auth/adapters";
// import { JWT } from "next-auth/jwt";
// import GoogleProvider from "next-auth/providers/google";
// import { headers } from "next/headers";

// export const authOptions:NextAuthOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID as any,
//       clientSecret: process.env.GOOGLE_SECRET as any,
//     }),

//     // ...add more providers here
//   ],

//   pages: {
//     //   signIn:'/auth/signin',
//     // newUser: '/settings'
//   },
//   adapter: MongoDBAdapter(clientPromise),

//   callbacks: {
//     async signIn(user: any) {
//       if (!user) {
//         return false;
//       }
//       return true;
//     },

//     jwt : async({ token,    user,
//       account,
//       profile,
//       trigger,
//       isNewUser,
//       session }: { token:JWT,    user: User | AdapterUser;
//         account: Account | null;
//         profile?: Profile | undefined;
//         trigger?: "signIn" | "signUp" | "update" | undefined;
//         isNewUser?: boolean | undefined;
//         session?: any; }) => {
//       const headersList = headers();
//       const domain = headersList.get("host");
//       // console.log(token);
//       if (token) {
//         const users: User = await axios
//           .get(`${http}://${domain}/api/user?email=${token.email}`)
//           .then((response) => {
//             return response.data;
//           });
//         // console.log(token.role);

//         return {
//           id: users?._id,
//           name: users?.name,
//           email: users?.email,
//           image: users?.image,
//           emailVerified: users?.emailVerified,
//           role: users?.role,
//         };
//       }
//     },

//     session: async({
//       session,
//       user,
//       token,
//     }: {
//       session: Session;
//       user: any;
//       token: any;
//     }) => {
//       if (token) {
//         session.user = token;
//       }
//       if (!token) {
//         session.user = user;
//       }
//       // console.log(session);

//       if (session.user.role === "ADMIN") {
//         return session;
//       }

//       return null;
//     },
//   },
//   session: { strategy: "jwt" as const },
//   events: {
//     // signin:({user,account,profile,isNewUser}) =>{
//     //   console.log({newUser: JSON.stringify( isNewUser)});
//     //   // console.log({user,account,profile,isNewUser});
//     // }
//   },
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
