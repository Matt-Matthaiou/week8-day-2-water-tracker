
import React, {useState, useEffect} from 'react';

export const UserToggle = () => {

    const [value, setValue] = useState(false);


    const handleToggle = () => {

            if (value === false) {
                setValue(true);
            } else {
                setValue(false);
            }
        }


        useEffect( () => {
            handleToggle();
        });

        return value

};


