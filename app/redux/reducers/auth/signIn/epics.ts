import {ofType} from 'redux-observable';

import {from, of, race} from 'rxjs';
import {catchError, map, mergeMap, take, tap} from 'rxjs/operators';
import api from 'app/api';
import actions from 'app/redux/reducers/actions';

export const epicAuthSignIn = (action$: any) => action$.pipe(
    ofType(actions.auth.signIn.request.type),

    mergeMap((action: any) => race(
        from(api.auth.signin(action.payload)).pipe(
            map((r: any) => {
                return actions.auth.signIn.success.dispatch(r.data);
            }),

            catchError(error => {
                return of(actions.auth.signIn.failure.dispatch(error));
            })
        ),

        action$.pipe(
            ofType(actions.auth.signIn.canceled.type),

            // tap(() => {
            //     action.cancelToken.cancel();
            // }),

            take(1)
        )
    ))
);
