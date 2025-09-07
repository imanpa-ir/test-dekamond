type CheckboxProps = {id: string; label: string}

export default function Checkbox({id, label}: CheckboxProps) {
    return (
        <label htmlFor={id} className='flex items-center cursor-pointer'>
            <input
                type='checkbox'
                id={id}
                className='rounded border-gray-300 text-custom-yellow focus:ring-custom-yellow focus:ring-2 focus:ring-opacity-50'
            />
            <span className='mr-1 sm:mr-2 text-gray-600'>{label}</span>
        </label>
    )
}
