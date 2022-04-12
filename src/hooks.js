
import React, {useState, useEffect} from 'react';

export const UserToggle = (value) => {

    const [newValue, setNewValue] = useState(null);


    const handleToggle = () => {

            if (value === false) {
                setNewValue(true);
            } else {
                setNewValue(false);
            }
        }


        useEffect( () => {
            handleToggle();
        }, [value]);

        return newValue

};


