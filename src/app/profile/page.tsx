'use client'

import {useEffect, useState} from 'react'
import {useUser} from '../context/UserContext'
import {useRouter} from 'next/navigation'
import Image from 'next/image'
import {Button} from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'

export default function ProfilePage() {
    const {user, logout, setUser} = useUser()
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const fullUser = user?.fullData || user

    useEffect(() => {
        const stored = localStorage.getItem('user')
        if (stored && !user) {
            const parsed = JSON.parse(stored)
            setUser(parsed.fullData || parsed)
        } else if (!stored) {
            router.replace('/login')
        }
        setLoading(false)
    }, [router, setUser, user])

    if (loading || !user) {
        return (
            <div className='flex items-center justify-center min-h-screen bg-custom-dark'>
                <div className='animate-spin rounded-full h-16 w-16 border-4 border-customYellow border-t-transparent'></div>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-custom-dark flex flex-col items-center p-4'>
            <div className='bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full animate-fade-in'>
                <div className='flex flex-col items-center'>
                    <Image
                        src={user.picture.large}
                        alt='profile'
                        width={120}
                        height={120}
                        className='rounded-full border border-customDark'
                    />
                    <h2 className='text-xl font-bold mt-4'>
                        {user.name.first} {user.name.last}
                    </h2>
                    <p className='text-gray-600'>{user.email}</p>
                </div>

                <div className='flex justify-between mt-6'>
                    {/* Dialog برای اطلاعات کامل */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant='outline'>اطلاعات کامل</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>اطلاعات کامل کاربر</DialogTitle>
                            </DialogHeader>
                            <DialogDescription className='space-y-2 mt-2'>
                                <>
                                    <p>
                                        نام کامل: {fullUser.name.title} {fullUser.name.first} {fullUser.name.last}
                                    </p>
                                    <p>ایمیل: {fullUser.email}</p>
                                    <p>شماره موبایل: {fullUser.cell}</p>
                                    <p>
                                        تاریخ تولد:{' '}
                                        {fullUser.dob?.date
                                            ? new Date(fullUser.dob.date).toLocaleDateString()
                                            : 'نامشخص'}
                                    </p>
                                    <p>کشور: {fullUser.location?.country || 'نامشخص'}</p>
                                    <p>شهر: {fullUser.location?.city || 'نامشخص'}</p>
                                    <p>
                                        نشانی: {fullUser.location?.street?.number}{' '}
                                        {fullUser.location?.street?.name || ''}
                                    </p>
                                </>
                            </DialogDescription>
                        </DialogContent>
                    </Dialog>

                    <Button variant='destructive' onClick={logout}>
                        خروج
                    </Button>
                </div>
            </div>
        </div>
    )
}
