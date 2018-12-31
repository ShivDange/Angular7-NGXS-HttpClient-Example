// Section 1
import { State, Action, StateContext, Selector } from "@ngxs/store";
import { User } from "./../models/User";
import {
  AddData,
  RemoveData,
  GetData,
  PostData,
  PatchData,
  DeleteData
} from "./../store/lern.action";
import { HttpClient, HttpHeaders } from "@angular/common/http";

// Section 2
export class LernStateModel {
  users: User[];
  loading: boolean;
}

// Section 3
@State<LernStateModel>({
  name: "users",
  defaults: {
    users: [],
    loading: true
  }
})
export class LernState {
  constructor(private http: HttpClient) {}

  // Section 4
  @Selector()
  static getUsers(state: LernStateModel) {
    return state.users;
  }

  @Selector()
  public static loading(state: LernStateModel) {
    return state.loading;
  }

  // Section 5
  @Action(AddData)
  add(
    { getState, patchState }: StateContext<LernStateModel>,
    { payload }: AddData
  ) {
    const state = getState();
    patchState({
      users: [...state.users, payload]
    });
  }

  @Action(RemoveData)
  remove(
    { getState, patchState }: StateContext<LernStateModel>,
    { payload }: RemoveData
  ) {
    patchState({
      users: getState().users.filter(a => a.name != payload)
    });
  }

  @Action(GetData)
  get({ getState, setState }: StateContext<LernStateModel>) {
    const state = getState();
    let users: User[] = [];
    this.http.get<User[]>("http://localhost:3000/users").subscribe(user => {
      users = user;
      setState({
        ...state.users,
        users: users,
        loading: false
      });
    });
  }

  @Action(PostData)
  post(
    { getState, patchState }: StateContext<LernStateModel>,
    { payload }: PostData
  ) {
    const state = getState();
    this.http.post<User[]>("http://localhost:3000/users", payload).subscribe(
      res => {
        patchState({
          users: [...state.users, payload]
        });
      },
      (error: string) => {
        console.log("error response-->", error);
      }
    );
  }

  @Action(PatchData)
  patch(
    { getState, patchState }: StateContext<LernStateModel>,
    { payload }: PatchData
  ) {
    const state = getState();
    const id = payload.id;
    this.http
      .patch<User[]>("http://localhost:3000/users/" + id, payload)
      .subscribe(
        res => {
          for (var i = 0; i < state.users.length; i++) {
            if (state.users[i].id === payload.id) {
              state.users[i] = payload;
            }
          }
          patchState({
            users: [...state.users]
          });
        },
        (error: string) => {
          console.log("error response-->", error);
        }
      );
  }

  @Action(DeleteData)
  delete(
    { getState, patchState }: StateContext<LernStateModel>,
    { payload }: DeleteData
  ) {
    const id = payload;
    this.http.delete<User[]>("http://localhost:3000/users/" + id).subscribe(
      res => {
        patchState({
          users: getState().users.filter(a => a.id != payload)
        });
      },
      (error: string) => {
        console.log("error response-->", error);
      }
    );
  }
}
