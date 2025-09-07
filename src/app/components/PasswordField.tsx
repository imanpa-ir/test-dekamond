'use client'
import {useState} from 'react'

type PasswordFieldProps = {
    id: string
    name: string
    label: string
    placeholder?: string
}

export default function PasswordField({id, name, label, placeholder}: PasswordFieldProps) {
    const [show, setShow] = useState(false)

    return (
        <div className='transition-transform duration-200 hover:scale-[1.02]'>
            <label htmlFor={id} className='block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2'>
                {label}
            </label>
            <div className='relative'>
                <input
                    type={show ? 'text' : 'password'}
                    id={id}
                    name={name}
                    required
                    placeholder={placeholder}
                    className='w-full px-3 py-2 sm:px-4 sm:py-3 pr-10 sm:pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-yellow focus:ring-4 focus:ring-custom-yellow focus:ring-opacity-20 transition-all duration-200 text-sm sm:text-base'
                />
                <button
                    type='button'
                    onClick={() => setShow(!show)}
                    className='absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200 focus:outline-none'
                >
                    {show ? '🙈' : '👁️'}
                </button>
            </div>
        </div>
    )
}
