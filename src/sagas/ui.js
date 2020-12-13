import { call, put, takeEvery } from 'redux-saga/effects';
import * as reminderActions from '../actions/ui/reminder';
import { DEFAULT_COLOR } from '../helpers/colors';

export function* openReminder(reminder) {
  yield put(reminderActions.openReminder(reminder));
}

export function* newReminder() {
  const initialDateTime = yield call(Date.now);
  const initialColor = DEFAULT_COLOR;

  const reminder = {
    id: null,
    description: '',
    color: initialColor,
    dateTime: initialDateTime,
    cityName: '',
  };

  yield call(openReminder, reminder);
}

export function* watchNewReminder() {
  yield takeEvery(reminderActions.NEW_REMINDER, newReminder);
}
