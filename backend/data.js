// @ts-nocheck
import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Arief",
      email: "arief.saferman@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
    {
      name: "admin",
      email: "admin@admin.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
  ],
  products: [
    {
      name: "Salman The Wibu Master",
      slug: "salman-wibu-master",
      category: "animer",
      image: "/images/p2.png",
      price: 120,
      countInStock: 0,
      brand: "wibu",
      rating: 4.0,
      numReviews: 10,
      description: "high quality people",
    },
    {
      name: "Farhan the arabian kebab",
      slug: "farhan-arabian-kebab",
      category: "arabic",
      image: "/images/p1.png",
      price: 150,
      countInStock: 10,
      brand: "culture",
      rating: 4.0,
      numReviews: 10,
      description: "high quality culture",
    },
    {
      name: "Kevin The Wotagay Master",
      slug: "kevin-wotagay-master",
      category: "animer",
      image: "/images/p3.png",
      price: 120,
      countInStock: 10,
      brand: "wibu",
      rating: 4.0,
      numReviews: 10,
      description: "high quality wota",
    },
    {
      name: "aldo The animal cheater",
      slug: "aldo-animal-cheater",
      category: "animals",
      image: "/images/p4.png",
      price: 120,
      countInStock: 10,
      brand: "zoo",
      rating: 4.0,
      numReviews: 10,
      description: "high quality pet tacker",
    },
  ],
};
export default data;
