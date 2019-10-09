import { navigate } from 'hookrouter';

export const historyPush = url => {
    return () => {
        navigate(url);
        window.scrollTo(0, 0);
    }
}

export const convertString = string => string.split(" ").map(el => el.toLowerCase()).join("-");

export const triggerHover = (field, label) => e => {
    e.preventDefault();
    const dropdown = document.getElementById(`${label}-dropdown`);
    if (dropdown) {
        if (field) return dropdown.classList.add("hover-dropdown-display");
        dropdown.classList.remove("hover-dropdown-display");
    }
}