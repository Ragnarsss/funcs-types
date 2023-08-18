import { BaseModel } from '../base.model';

enum ROLES {
  ADMIN = 'ADMIN',
  SELLER = 'SELLER',
  CUSTOMER = 'CUSTOMER',
}

interface User extends BaseModel {
  username: string;
  role: ROLES;
}

export { ROLES, User };
