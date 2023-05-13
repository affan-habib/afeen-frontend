import { call, put, takeEvery } from "redux-saga/effects";
import { failed, succeed } from "../reducers/apiSlice";
import fetcher from "../../lib/fetcher";

export default function* sagas() {
  yield takeEvery(({ payload: { operationId = null } }) => {
    return typeof operationId === "string" && operationId.length > 0;
  }, performApiAction);
}

function* performApiAction(action) {
  const {
    payload: { output = "output", operationId = "", parameters = {} },
  } = action;
  try {
    let response = yield call(() => fetcher(operationId, parameters));
   

    yield put(
      succeed({
        response,
        output,
      })
    );

  } catch (error) {
    yield put(
      failed({
        error: error.response
          ? error.response.obj.error
          : {
              message: "Api call failed or check your internet connection",
            },
      })
    );
  }
}
