import App from './app';

import {
    Home,
    Message,
    About,
} from './screens';

export default {
    path: '/',
    component: App,
    indexRoute: Home,
    childRoutes: [
        About,
        Message,
    ],
};
