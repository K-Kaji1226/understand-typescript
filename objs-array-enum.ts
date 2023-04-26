// 下のように型を明示的に設定することができる
// const person : {
//   name: string;
//   age: number;
// } = {
// 	name: "Max",
// 	age: 40,
// };

// const person = {
// 	name: "Max",
// 	age: 40,
// 	hobbies: ["sports", "gaming"],
// };

// console.log(person);
// let favoriteActivities: string[];
// favoriteActivities = ["sports"];

// for (const hobby of person.hobbies) {
// 	console.log(hobby.toUpperCase());
// }

// tuple型 => 　typescript独自の型 配列の長さが固定されている
// だがpushメソッドは使えてしまうことに注意
// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string]; // <-tuple型の定義の仕方
// } = {
// 	name: "Max",
// 	age: 40,
// 	hobbies: ["sports", "gaming"],
// 	role: [2, "author"],
// };

// enum型
enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}
const person = {
	name: "Max",
	age: 40,
	hobbies: ["sports", "gaming"],
	role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
	console.log("管理者ユーザー");
}

// any型 -> 極力使わない。どんな値も入れることができる。
