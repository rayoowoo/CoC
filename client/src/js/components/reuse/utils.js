import { navigate } from 'hookrouter';

export const historyPush = url => {
    return () => {
        navigate(url);
        window.scrollTo(0, 0);
    }
}

export const convertString = string => string.split(" ").map(el => el.toLowerCase()).join("-");

export const triggerHover = (field, label, dir) => e => {
    e.preventDefault();
    const dropdown = document.getElementById(`${label}-${dir}`);
    if (dropdown) {
        if (field) return dropdown.classList.add(`hover-${dir}-display`);
        dropdown.classList.remove(`hover-${dir}-display`);
    }
}