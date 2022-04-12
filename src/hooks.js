
import {useState, useEffect} from 'react';

export const UserToggle = () => {

    const [value, setValue] = useState(false);

    const changeValue = () => {
        setValue(!value);
    }

    useEffect( () => {
        changeValue();
    }, []);

    return [value, changeValue];
};


