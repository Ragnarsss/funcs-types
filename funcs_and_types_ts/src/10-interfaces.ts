//el type clasico tiene sus inconvenientes PORQUE NO SE PUEDEN EXTENDER
interface User {
  userId: string;
  age: number;
}

interface Admin extends User {
  passCode: string;
}

const myUser: Admin = {
  userId: 'cris',
  age: 25,
  passCode: '11',
};
