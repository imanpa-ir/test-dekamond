export default function Logo() {
    return (
        <div className='text-center mb-6 sm:mb-8'>
            <div className='bg-custom-yellow w-14 h-14 sm:w-16 sm:h-16 rounded-full mx-auto flex items-center justify-center mb-3 sm:mb-4 shadow-lg'>
                <span>
                    <svg
                        height='300px'
                        width='300px'
                        version='1.1'
                        id='Capa_1'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 60.671 60.671'
                    >
                        <g>
                            <g>
                                <ellipse style={{fill: '#010002'}} cx='30.336' cy='12.097' rx='11.997' ry='12.097' />
                                <path
                                    style={{fill: '#010002'}}
                                    d='M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9
			C48.354,35.818,42.661,30.079,35.64,30.079z'
                                />
                            </g>
                        </g>
                    </svg>
                </span>
            </div>
            <h1 className='text-xl sm:text-2xl font-semibold text-gray-800 mb-1 sm:mb-2'>خوش آمدید</h1>
            <p className='text-gray-600 text-xs sm:text-sm'>لطفاً وارد حساب کاربری خود شوید</p>
        </div>
    )
}
