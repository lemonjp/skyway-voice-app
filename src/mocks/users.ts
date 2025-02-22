interface User {
  username: string;
  password: string;
}

export const users: User[] = [
  {
    username: "John",
    password: "John"
  },
  {
    username: "Paul",
    password: "Paul"
  }
];

export const findUser = (username: string): User | undefined => {
  return users.find(user => user.username === username);
};

export const validateUser = (username: string, password: string): boolean => {
  const user = findUser(username);
  return user ? user.password === password : false;
};
