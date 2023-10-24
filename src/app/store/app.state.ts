import { Action, State, StateContext } from '@ngxs/store';
import { User } from '../users/user';
import { SetUsers } from './app.actions';


export interface AppStateModel {
  users: User[];
}
@State<AppStateModel>({ name: 'userPortal', defaults: { users: [] } })
export class AppState {
  @Action(SetUsers)
  SetUsers({ patchState }: StateContext<AppStateModel>, { payload }: SetUsers) {
    patchState({ users: payload });
  }
}
