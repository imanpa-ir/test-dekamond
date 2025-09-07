import type {Metadata} from 'next'
import {Vazirmatn} from 'next/font/google'
import './globals.css'
import {UserProvider} from '@/app/context/UserContext'

const vazirmatn = Vazirmatn({
    subsets: ['arabic'],
    variable: '--font-vazirmatn',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'ورود',
    description: 'صفحه ورود به حساب کاربری',
}
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='fa' dir='rtl' className={vazirmatn.variable}>
            <body className='antialiased'>
                <UserProvider>{children}</UserProvider>
            </body>
        </html>
    )
}
