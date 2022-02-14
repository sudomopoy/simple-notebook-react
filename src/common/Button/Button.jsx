import React from 'react'
import LoadderSpinner from '../loadderSpinner'

function Button(props) {
    const {
        onClick = () => { },
        children = <></>,
        loading = false,
        disabled = false,
        width = "w-full",
        etcProps = {}
    } = props;
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type="button"
            className={`group relative ${width} flex 
                                    justify-center py-2 px-4 border border-transparent
                                    text-sm font-medium rounded-md text-white bg-primary  
                                    hover:bg-primary-hover focus:outline-none focus:ring-2
                                    focus:ring-offset-2 focus:ring-primary transition-all`}

            {...etcProps}
        >
            {children}
            {loading && <LoadderSpinner />}
        </button>
    )
}

export default Button