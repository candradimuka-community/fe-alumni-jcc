import React from "react"

const Input = ({
    label='form',
    id='id',
    type='text',
    placeholder=null,
    isValid=true,
    message=null,
    setState=()=>{},
    state={},
    ...otherProps
}) => {
    return (
        <div 
            className="flex flex-col my-2">
            <label 
                className="block text-gray-700 text-sm font-bold mb-2" 
                htmlFor={id}
            >
                {label}
            </label>
            <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id={id} 
                type={type} 
                placeholder={placeholder || label} 
                value={state[id]}
                onChange={(e)=> {
                    setState({
                        ...state,
                        [id]:e.target.value
                    })
                }}
                {...otherProps}
            />
            {!isValid && (
                <p className="text-red-500">{label} {message ?? 'must be filled'}</p>
            )}
        </div>
    )
}
export default Input