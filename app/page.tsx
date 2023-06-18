import { getServerSession } from "next-auth";
import { Colors } from "./components/Color";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

    // if (status === "loading") {
    //   return <p>Loading....</p>;
    // }
// console.log("session :",session);

  return (
    <>
      <div>
        <p className="text-[1.8rem]">
          Hello{" "}
          <span className="font-bold">{session?.user?.name}</span>
        </p>
      </div>
      <section>
        <div className="mt-8">
            <p className={`text-[2rem] capitalize font-semibold ${Colors.primary}`}>orders</p>
          <div className="grid grid-cols-3 gap-8 mt-4">
            <div className="shadow-xl rounded-[.5rem] bg-white text-center py-4 ">
              <p className={`text-[1.5rem] uppercase font-bold ${Colors.primary}`}>today</p>
              <p className={`text-[3rem] ${Colors.info} font-bold`}>2</p>
              <p className={`text-[1.5rem] uppercase font-medium ${Colors.primary}`}>0 order{"s"} today</p>
            </div>
            <div className="shadow-xl rounded-[.5rem] bg-white text-center py-4 ">
              <p className={`text-[1.5rem] uppercase font-bold ${Colors.primary}`}>today</p>
              <p className="text-[3rem] text-blue-400 font-bold  ">2</p>
              <p className={`text-[1.5rem] uppercase font-medium ${Colors.primary}`}>0 order{"s"} today</p>
            </div>
            <div className="shadow-xl rounded-[.5rem] bg-white text-center py-4 ">
              <p className={`text-[1.5rem] uppercase font-bold ${Colors.primary}`}>today</p>
              <p className="text-[3rem] text-blue-400 font-bold  ">2</p>
              <p className={`text-[1.5rem] uppercase font-medium ${Colors.primary}`}>0 order{"s"} today</p>
            </div>
         </div>
        </div>
        <div className="mt-8">
            <p className={`text-[2rem] capitalize font-semibold ${Colors.primary}`}>orders</p>
          <div className="grid grid-cols-3 gap-8 mt-4">
            <div className="shadow-xl rounded-[.5rem] bg-white text-center py-4 ">
              <p className={`text-[1.5rem] uppercase font-bold ${Colors.primary}`}>today</p>
              <p className="text-[3rem] text-blue-400 font-bold  ">2</p>
              <p className={`text-[1.5rem] uppercase font-medium ${Colors.primary}`}>0 order{"s"} today</p>
            </div>
            <div className="shadow-xl rounded-[.5rem] bg-white text-center py-4 ">
              <p className={`text-[1.5rem] uppercase font-bold ${Colors.primary}`}>today</p>
              <p className="text-[3rem] text-blue-400 font-bold  ">2</p>
              <p className={`text-[1.5rem] uppercase font-medium ${Colors.primary}`}>0 order{"s"} today</p>
            </div>
            <div className="shadow-xl rounded-[.5rem] bg-white text-center py-4 ">
              <p className={`text-[1.5rem] uppercase font-bold ${Colors.primary}`}>today</p>
              <p className="text-[3rem] text-blue-400 font-bold  ">2</p>
              <p className={`text-[1.5rem] uppercase font-medium ${Colors.primary}`}>0 order{"s"} today</p>
            </div>
         </div>
        </div>
        
      </section>
    </>
  );
}
