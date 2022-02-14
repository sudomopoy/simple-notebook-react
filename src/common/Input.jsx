import React, { useEffect, useState } from 'react'

function Input(props) {
    const {
        placeholder = "",
        initValue = "",
        type = "text",
        topRounded = false,
        buttonRounded = false,
        onChange = (_) => { },
        etcProps = {}
    } = props;
    const [value, setValue] = useState(initValue);
    useEffect(() => {
        onChange(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return (
        <input
            type={type}
            value={value}
            className={`appearance-none rounded-none relative 
                block w-full px-3 py-2 border border-gray-300 
                placeholder-gray-500 text-gray-900
                ${topRounded && "rounded-t-md"}
                ${buttonRounded && "rounded-b-md "}  
                focus:outline-none focus:ring-primary focus:border-primary 
                focus:z-10 sm:text-sm`}
            placeholder={placeholder}
            onChangeCapture={(v) => { setValue(v.target.value) }}
            {...etcProps}
        ></input>
    )
}

export default Input