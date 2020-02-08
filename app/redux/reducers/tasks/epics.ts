import {ofType} from 'redux-observable';
import {
    TASKS_ADD_ITEM_CANCELED,
    TASKS_ADD_ITEM_REQUEST,
    TASKS_LIST_CANCELED,
    TASKS_LIST_REQUEST
} from 'app/redux/actions';
import {from, of, race} from 'rxjs';
import {catchError, map, mergeMap, take, tap} from 'rxjs/operators';
import api from 'app/api';
import {reducerTaskListFailure, reducerTaskListSuccess} from 'app/redux/actions/tasks';

export const epicTasksList = (action$: any) => action$.pipe(
    ofType(TASKS_LIST_REQUEST),

    mergeMap((action: any) => race(
        from(api.tasks.getAllList()).pipe(
            map((r: any) => {
                console.log('RESULT', r);
                return reducerTaskListSuccess(r.data);
            }),

            catchError(error => {
                console.log('ERROR', error);
                return of(reducerTaskListFailure(error));
            })
        ),

        action$.pipe(
            ofType(TASKS_LIST_CANCELED),

            // tap(() => {
            //     action.cancelToken.cancel();
            // }),

            take(1)
        )
    ))
);

export const epicAddTaskItem = (action$: any) => action$.pipe(
    ofType(TASKS_ADD_ITEM_REQUEST),

    mergeMap((action: any) => race(
        from(api.tasks.addTaskItem(action.payload)).pipe(
            map((r: any) => {
                console.log('RESULT', r);

                return reducerTaskListSuccess(r.data);
            }),

            catchError(error => {
                console.log('ERROR', error);
                return of(reducerTaskListFailure(error));
            })
        ),

        action$.pipe(
            ofType(TASKS_ADD_ITEM_CANCELED),

            // tap(() => {
            //     action.cancelToken.cancel();
            // }),

            take(1)
        )
    ))
);
