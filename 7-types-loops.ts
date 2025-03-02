//how can we loop over type properties?

type User = {
    name: string;
    email: string;
    isAdmin?: boolean;
  }

type UserProperties = { [Key in keyof User]: User[Key]}

const bob:UserProperties = {
    name: 'Bob',
    email: 'bob@mail.com',
    isAdmin: false
}

bob.isAdmin = true; // ✅ Works fine
