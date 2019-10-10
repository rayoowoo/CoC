import { navigate } from 'hookrouter';
import {useState, useEffect} from 'react';

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

export const useFetch = url => {
    const [data, setData] = useState(null);
    async function fetchData() {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
    }
    useEffect(() => { fetchData() }, []);
    return data;
};