"use client";

import { useEffect, useState, useRef } from "react";
import { sendConsole } from "../_actions";
import { useRouter } from "next/navigation";

type Params = {
  singleName?: Category;
};
export default function Form({ singleName }: Params) {
  const [name, setName] = useState<string | undefined>("");
  const route = useRouter();
  const inputRef = useRef<any>();
  async function action(data: FormData) {
    if (singleName?._id) {
      await sendConsole(data, singleName?._id);
      setName("");
    } else {
      await sendConsole(data);
    }
    inputRef?.current.reset();

    //  console.log(data)
  }
  useEffect(() => {
    setName(singleName?.name);
  }, []);

  return (
    <form action={action} ref={inputRef}>
      <div className="">
        <div className={`flex items-center gap-2`}>
          {name ? (
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              placeholder="Category name"
              className="block w-full mt-2 p-4 text-[1.8rem] font-bold focus-visible:outline-none"
            />
          ) : (
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Category name"
              className="block w-full mt-2 p-4 text-[1.8rem] font-bold focus-visible:outline-none"
            />
          )}
        </div>
      </div>
      {/* <div className="">
      <label htmlFor="props" className={label}>
        Properties
      </label>
      
    </div> */}
      <button
        type="submit"
        className="text-[1.8rem] bg-blue-400 font-bold p-4 px-8 mt-4 uppercase rounded-md"
      >
        save
      </button>
    </form>
  );
}
