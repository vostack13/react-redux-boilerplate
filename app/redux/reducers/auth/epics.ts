import {ofType} from 'redux-observable';

import {
    AUTH_SIGNIN_REQUEST,
    TASKS_ADD_ITEM_CANCELED,
} from 'app/redux/actions';

import {from, of, race} from 'rxjs';
import {catchError, map, mergeMap, take, tap} from 'rxjs/operators';
import api from 'app/api';
import {reducerSignInFailure, reducerSignInSuccess} from 'app/redux/actions/auth';

export const epicAuthToken = (action$: any) => action$.pipe(
    ofType(AUTH_SIGNIN_REQUEST),

    mergeMap((action: any) => race(
        from(api.auth.signin(action.payload)).pipe(
            map((r: any) => {
                console.log('RESULT', r);

                return reducerSignInSuccess(r.data);
            }),

            catchError(error => {
                console.log('ERROR', error);
                return of(reducerSignInFailure(error));
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

export const epicSignIn = (action$: any) => action$.pipe(
    ofType(AUTH_SIGNIN_REQUEST),

    mergeMap((action: any) => race(
        from(api.auth.signin(action.payload)).pipe(
            map((r: any) => {
                console.log('RESULT', r);

                return reducerSignInSuccess(r.data);
            }),

            catchError(error => {
                console.log('ERROR', error);
                return of(reducerSignInFailure(error));
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
