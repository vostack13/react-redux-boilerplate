import signIn, {IAuthSignInState} from './signIn';
import refreshToken, {IAuthRefreshTokenState} from './refreshToken';
import {combineReducers} from 'redux';

export interface IAuthState {
    signIn: IAuthSignInState;
    refreshToken: IAuthRefreshTokenState;
}

const auth = combineReducers({
    signIn: signIn.reducers,
    refreshToken: refreshToken.reducers,
});

export default auth;
