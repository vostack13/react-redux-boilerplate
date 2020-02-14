import {ofType} from 'redux-observable';

import {from, of, race} from 'rxjs';
import {catchError, map, mergeMap, take, tap} from 'rxjs/operators';
import api from 'app/api';
import actions from 'app/redux/reducers/actions';

export const epicAuthRefreshToken = (action$: any) => action$.pipe(
    ofType(actions.auth.refreshToken.request.type),

    mergeMap(() => race(
        from(api.refreshToken()).pipe(
            map(() => {
                return actions.auth.refreshToken.success.dispatch();
            }),

            catchError(error => {
                return of(actions.auth.refreshToken.failure.dispatch(error));
            })
        ),

        action$.pipe(
            ofType(actions.auth.refreshToken.canceled.dispatch()),

            // tap(() => {
            //     action.cancelToken.cancel();
            // }),

            take(1)
        )
    ))
);
