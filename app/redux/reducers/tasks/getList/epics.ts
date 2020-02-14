import {ofType} from 'redux-observable';
import {concat, from, of, race} from 'rxjs';
import {catchError, map, mergeMap, take} from 'rxjs/operators';
import api from 'app/api';
import {TYPE_AUTH_ERROR} from 'app/api/errors';
import actions from 'app/redux/reducers/actions';

export const epicTasksGetList = (action$: any) => action$.pipe(
    ofType(actions.tasks.getList.request.type),

    mergeMap(() => race(
        from(api.tasks.getAllList()).pipe(
            map((r: any) => {
                return actions.tasks.getList.success.dispatch(r.data);
            }),

            catchError((error: any) => {
                if (error.typeError === TYPE_AUTH_ERROR)
                    return concat(
                        of(actions.tasks.getList.failure.dispatch(error)),
                        of(actions.auth.refreshToken.failure.dispatch(error))
                    );

                return of(actions.tasks.getList.failure.dispatch(error));
            })
        ),

        action$.pipe(
            ofType(actions.tasks.getList.canceled.type),

            // tap(() => {
            //     action.cancelToken.cancel();
            // }),

            take(1)
        )
    ))
);
