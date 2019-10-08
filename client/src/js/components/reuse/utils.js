import { navigate } from 'hookrouter';

export const historyPush = url => {
    return () => {
        navigate(url);
        window.scrollTo(0, 0);
    }
}

export const convertString = string => string.split(" ").map(el => el.toLowerCase()).join("-");