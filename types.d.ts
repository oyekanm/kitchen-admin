type Foods = {
  _id?: string;
  name?: string;
  desc?: string;
  price?: number;
  category?: string;
  image?: string[] | null;
  __v?: number;
};

type Category = {
  _id?: string;
  name?: string;
  __v?: number;
};


interface User {
  _id?: String,
  name?: String,
  email?: String,
  image?: String,
  emailVerified?: Date,
  role?:String
}
