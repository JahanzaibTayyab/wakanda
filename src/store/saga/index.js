import { all } from "redux-saga/effects";
import notionAuth from "./notionAuth";

export default function* rootSaga() {
  yield all([notionAuth()]);
}
