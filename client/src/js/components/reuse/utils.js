import { navigate } from 'hookrouter';

export const historyPush = (url) => {
    return () => {
        navigate(url);
        window.scrollTo(0, 0);
    }
}