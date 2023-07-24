import { getCategory } from "@/lib/Fetch/Category";
import Form from "./Form";
import { Bg, Colors } from "../components/Color";
import CategoryList from "./CategoryList";

export default async function Category() {
  const category = await getCategory(`${process.env.NEXT_URL}/api/categories`);

  // console.log(category);

  return (
    <>
      <p className="text-[2rem] font-bold mb-8">Categories</p>
      <p className={`${Colors.primary} text-[1.8rem] font-bold`}>
        Create new category
      </p>
      <Form />
      <section className="mt-12">
        <div className="bg-slate-400 p-4">

        <p className={`text-[2rem] uppercase font-semibold ${Colors.primary}`}>
          category name
        </p>
        </div>

        <div className={`mt-4 ${Bg.white} px-4 py-4 shadow-lg`}>
      
         <CategoryList category={category} />
        </div>
      </section>
    </>
  );
}
