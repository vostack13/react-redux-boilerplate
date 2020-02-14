import {ofType} from 'redux-observable';
import {concat, from, of, race} from 'rxjs';
import {catchError, map, mergeMap, take} from 'rxjs/operators';
import api from 'app/api';
import {TYPE_AUTH_ERROR} from 'app/api/errors';
import actions from 'app/redux/reducers/actions';

export const epicTasksAddTask = (action$: any) => action$.pipe(
    ofType(actions.tasks.addTask.request.type),

    mergeMap((action: any) => race(
        from(api.tasks.addTaskItem(action.payload)).pipe(
            map((r: any) => {
                return actions.tasks.addTask.success.dispatch(r.data);
            }),

            catchError(error => {
                if (error.typeError === TYPE_AUTH_ERROR)
                    return concat(
                        of(actions.tasks.addTask.failure.dispatch(error)),
                        of(actions.auth.refreshToken.failure.dispatch(error))
                    );

                return of(actions.tasks.addTask.failure.dispatch(error));
            })
        ),

        action$.pipe(
            ofType(actions.tasks.addTask.canceled.type),

            // tap(() => {
            //     action.cancelToken.cancel();
            // }),

            take(1)
        )
    ))
);
