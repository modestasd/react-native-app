import { combineReducers } from 'redux';

import events from './events_reducer';
import services from './services_reducer';
import calendar from './calendar_reducer';
import auth from './auth_reducer';
import statistic from './statistic_reducer';
import user from './user_reducer';

const rootReducer = combineReducers({
  events,
  services,
  calendar,
  auth,
  statistic,
  user
});

export default rootReducer;