import React, { useEffect, useState } from 'react'

function ReachText(props) {
    const {
        placeholder = "",
        initValue = "",
        topRounded = false,
        buttonRounded = false,
        onChange = (_) => { },
        rows = 4,
        etcProps = {},
    } = props;
    const [value, setValue] = useState(initValue);
    useEffect(() => {
        onChange(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return (
        <textarea
            rows={rows}
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
        ></textarea>
    )
}

export default ReachText;