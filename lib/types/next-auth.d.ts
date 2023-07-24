import NextAuth from "next-auth";


declare module "next-auth" {
  interface Session {
    user: User,
  }
  interface JWT {
    _id?: string,
    name?: string,
    email?: string,
    image?: string,
    emailVerified?: Date,
    role?:string,
  }
}