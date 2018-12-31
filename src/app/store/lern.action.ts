import { User } from "./../models/User";

export class AddData {
  static readonly type = "[DATA] Add";
  constructor(public payload: User) {}
}

export class RemoveData {
  static readonly type = "[DATA] Remove";
  constructor(public payload: string) {}
}

export class GetData {
  static readonly type = "[DATA] Get";
}

export class PostData {
  static readonly type = "[DATA] Post";
  constructor(public payload: User) {}
}

export class PatchData {
  static readonly type = "[DATA] Patch";
  constructor(public payload: User) {}
}

export class DeleteData {
  static readonly type = "[DATA] Delete";
  constructor(public payload: number) {}
}
