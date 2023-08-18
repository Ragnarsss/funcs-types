export enum ROLES {
  ADMIN = 'Admin',
  CUSTOMER = 'Customer',
  SELLER = 'Seller',
}

export type User = {
  username: string;
  role: ROLES;
};

export const myUser: User = {
  username: 'Cris',
  role: ROLES.ADMIN,
};
