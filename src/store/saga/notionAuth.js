import { all, fork, put, takeEvery, retry } from "redux-saga/effects";
import { httpsCallable } from "firebase/functions";
import { functions } from "../../utils/init-firebase";
import { RETRY_INTERVAL, MAX_RETRY_COUNT } from "./constants";
import {
  getNotionOAuthUlrSuccess,
  getNotionOAuthUlrFailure,
} from "../actions/NotionAuth";
import { NOTION_OAUTH_URL } from "../types";

const getNotionOAuthUrlApi = async () => {
  const notionOAuthUrl = httpsCallable(functions, "oauthUrl");
  const response = await notionOAuthUrl({});
  return response.data;
};
function* getNotionOAuthUrl() {
  try {
    const data = yield retry(
      MAX_RETRY_COUNT,
      RETRY_INTERVAL,
      getNotionOAuthUrlApi
    );

    if (data) yield put(getNotionOAuthUlrSuccess(data));
  } catch (error) {
    yield put(getNotionOAuthUlrFailure(error));
  }
}

export function* callNotionOAuthUrl() {
  yield takeEvery(NOTION_OAUTH_URL, getNotionOAuthUrl);
}

export default function* rootSaga() {
  yield all([fork(callNotionOAuthUrl)]);
}
