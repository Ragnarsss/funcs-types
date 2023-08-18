import { User, ROLES } from './01-enums';

const currentUser: User = {
  username: 'cris',
  role: ROLES.ADMIN,
};

//Parametros infinitos en el caso que haya que comprobar varios tipos literales o enums
export const checkRole = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};
