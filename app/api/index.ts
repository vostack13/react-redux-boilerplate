import * as tasks from './routes/tasks';
import * as auth from './routes/auth';
import {refreshToken} from 'app/api/config';

export default {
    refreshToken,
    tasks,
    auth,
};
