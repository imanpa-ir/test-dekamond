type SubmitButtonProps = {loading: boolean}

export default function SubmitButton({loading}: SubmitButtonProps) {
    return (
        <button
            type='submit'
            disabled={loading}
            className='w-full bg-custom-yellow hover:bg-custom-yellow-hover text-white font-medium py-2 sm:py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-custom-yellow focus:ring-opacity-30 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center text-sm sm:text-base'
        >
            {loading && <span className='animate-spin mr-2'>⏳</span>}
            {loading ? 'در حال ورود...' : 'ورود'}
        </button>
    )
}
