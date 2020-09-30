import { combineEpics } from "redux-observable"
import AllSqrtEpics from './sqrt/epic';

export default combineEpics(...AllSqrtEpics);