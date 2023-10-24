import { User } from '../users/user';

export class SetUsers {
  static readonly type = '[USER PORTAL] Set Users';

  constructor(public payload: User[]) {}
}
