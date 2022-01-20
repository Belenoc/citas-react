import { useState } from "react"

useState
const Error = ({ children }) => {
    return (
        <div className='bg-red-400 text-white text-center rounded-md p-3 mb-5 uppercase font-bold'>
            <p>
                {children}
            </p>
        </div>
    )
}

export default Error
