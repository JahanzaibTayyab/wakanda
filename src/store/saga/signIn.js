import { all, fork, put, takeEvery, retry } from "redux-saga/effects";
import { db } from "../../utils/init-firebase";
import { doc, getDoc } from "firebase/firestore";
import { RETRY_INTERVAL, MAX_RETRY_COUNT } from "./constants";
import { userDataSuccess, userDataFailure } from "../actions/SignIn";
import { USER_DATA } from "../types";

const getUserDocumentApi = async (payload) => {
  console.log(
    "🚀 ~ file: SignIn.js ~ line 9 ~ getUserDocumentApi ~ payload",
    payload
  );
  const docRef = doc(db, "users", payload);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  // const notionOAuthUrl = httpsCallable(functions, "oauthUrl");
  // const response = await notionOAuthUrl({});
  // return response.data;
};
function* getUserDocument({ payload }) {
  try {
    const data = yield retry(
      MAX_RETRY_COUNT,
      RETRY_INTERVAL,
      getUserDocumentApi,
      payload
    );

    if (data) yield put(userDataSuccess(data));
  } catch (error) {
    yield put(userDataFailure(error));
  }
}

export function* callUserDocument() {
  yield takeEvery(USER_DATA, getUserDocument);
}

export default function* rootSaga() {
  yield all([fork(callUserDocument)]);
}
