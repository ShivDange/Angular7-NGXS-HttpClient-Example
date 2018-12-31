import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { AddData, PostData, PatchData } from "../store/lern.action";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {
  constructor(private store: Store) {}

  addData(id, name, email) {
    this.store.dispatch(new AddData({ id: id, name: name, email: email }));
  }

  postData(id, name, email) {
    this.store.dispatch(new PostData({ id: id, name: name, email: email }));
  }

  patchData(id, name, email) {
    this.store.dispatch(new PatchData({ id: id, name: name, email: email }));
  }

  ngOnInit() {}
}
