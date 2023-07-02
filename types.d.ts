type Foods = {
  _id?: string;
  name?: string;
  desc?: string;
  price?: number;
  category?: string;
  image?: {
    url: string;
    id: string;
}[] ;
  __v?: number;
};

type Category = {
  _id?: string;
  name?: string;
  __v?: number;
};


interface User {
  _id?: string,
  name?: string,
  email?: string,
  image?: string,
  emailVerified?: Date,
  role?:string,
  __v?: number;
}
