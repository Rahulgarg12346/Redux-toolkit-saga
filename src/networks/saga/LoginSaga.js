import { takeLatest, put, call } from "redux-saga/effects";
import { loginSucess, loginFailure } from "../../redux/Reducers/Authslice";
import { loginapi } from "../index";

function* handleLogin(action) {
  try {
    const user  =  yield call(loginapi, action.payload)
    if (!user.error) {
        yield put(loginSucess(user));
      } else {
        yield put(loginFailure(user.error));
      }
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function*watchLogin(){
    yield takeLatest('auth/loginRequest',handleLogin)
}
