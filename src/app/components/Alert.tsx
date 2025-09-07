type AlertProps = {type: 'error' | 'success'; message: string}

export default function Alert({type, message}: AlertProps) {
    const classes =
        type === 'error'
            ? 'bg-red-100 border border-red-400 text-red-700'
            : 'bg-green-100 border border-green-400 text-green-700'

    return <div className={`mt-3 sm:mt-4 p-3 sm:p-4 rounded-lg text-xs sm:text-sm ${classes}`}>{message}</div>
}
