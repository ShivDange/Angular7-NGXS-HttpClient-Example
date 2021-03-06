import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store, Select } from "@ngxs/store";
import { User } from "../models/User";
import { Observable, Subscription } from "rxjs";
import { RemoveData, GetData, DeleteData } from "../store/lern.action";
import { LernState } from "../store/lern.state";

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.scss"]
})
export class ReadComponent implements OnInit, OnDestroy {
  dataSubscription: Subscription;
 
  @Select(LernState.getUsers) data: Observable<User[]>;
  @Select(LernState.getUsers) httpData: Observable<User[]>;
  @Select(LernState.loading) loading: Observable<boolean>;

  constructor(private store: Store) {}

  delData(name) {
    this.store.dispatch(new RemoveData(name));
  }

  deleteApiData(id) {
     this.store.dispatch(new DeleteData(id));
  }

  ngOnInit() {
    
    this.dataSubscription = this.data.subscribe(
      data => {
        if (data[0] !== undefined) {
          console.log("subscribe fun data length -=-=>", data.length);
        } else {
          console.log("subscribe fun all data -=-=>", data);
        }
      },

      (error: string) => {
        console.log(error);
      }
    );

    this.store.dispatch(new GetData());
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }
}
