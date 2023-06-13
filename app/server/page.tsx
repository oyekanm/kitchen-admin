import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import { LoginButton, LogoutButton, ProfileButton, RegisterButton } from "../components/auth/buttons.components";

export default async function Home() {
    const session = await getServerSession(authOptions);
    console.log(session );
    
    if(session) {
        const image =session.user?.image as any
        return <>
          Signed in as {session.user?.name} <br/>
          <Image src={image} alt="image" width={100} height={100}/>
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
        </>
      }
      return <>
        Not signed in <br/>
      <LoginButton />
      </>
}
