import { all } from "redux-saga/effects";
import notionAuth from "./notionAuth";
import signIn from "./signIn";

export default function* rootSaga() {
  yield all([notionAuth(), signIn()]);
}
