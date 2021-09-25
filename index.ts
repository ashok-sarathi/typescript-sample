interface User {
    name: string;
    age: number;
    gender?: string;
}

let user: User = {
    name: "dsfs",
    age: 1
};

let user2: User = {
    name: "ashok",
    age: 12,
    gender: 'male'
};

class Demo {
    name: string;

    constructor(data: string) {
        console.log(data);
    }
}

let data1 = new Demo("afs00"); 

console.log(user);