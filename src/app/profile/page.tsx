'use client'

import {useEffect} from 'react'
import {useRouter} from 'next/navigation'
import {useUser} from '../context/UserContext'
import {Card, CardContent} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog'
import Image from 'next/image'

export default function ProfilePage() {
    const {user, logout} = useUser()
    const router = useRouter()

    //  بررسی بعد از رفرش
    useEffect(() => {
        if (!user || !user.name || !user.email || !user.picture) {
            router.replace('/login')
        }
    }, [user, router])

    if (!user || !user.name || !user.email || !user.picture) {
        return null
    }

    const handleLogout = () => {
        logout()
        router.push('/login')
    }

    return (
        <div className='min-h-screen bg-custom-dark flex items-center justify-center p-6'>
            <Card className='max-w-lg w-full shadow-lg bg-blue-200'>
                <CardContent className='space-y-4'>
                    <div className='flex flex-col items-center '>
                        <Image
                            src={user.picture.large}
                            alt='profile'
                            width={96}
                            height={96}
                            className='rounded-full border'
                        />
                        <h2 className='text-xl font-bold mt-3 flex items-center gap-3'>
                            {user.name.first} {user.name.last}
                            {/* دکمه باز کردن مودال */}
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant='outline' size='sm'>
                                        اطلاعات کامل
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className='max-w-2xl max-h-[80vh] overflow-y-auto bg-blue-400 text-white'>
                                    <DialogHeader>
                                        <DialogTitle>اطلاعات کامل کاربر</DialogTitle>
                                    </DialogHeader>

                                    <div className='space-y-3 text-sm'>
                                        <p>
                                            <b>نام:</b> {user.name.title} {user.name.first} {user.name.last}
                                        </p>
                                        <p>
                                            <b>ایمیل:</b> {user.email}
                                        </p>
                                        <p>
                                            <b>موبایل:</b> {user.cell}
                                        </p>
                                        <p>
                                            <b>تلفن ثابت:</b> {user.phone}
                                        </p>
                                        <p>
                                            <b>جنسیت:</b> {user.gender === 'male' ? 'مرد' : 'زن'}
                                        </p>
                                        <p>
                                            <b>سن:</b> {user.dob.age}
                                        </p>
                                        <p>
                                            <b>تاریخ تولد:</b> {new Date(user.dob.date).toLocaleDateString('fa-IR')}
                                        </p>
                                        <p>
                                            <b>شهر:</b> {user.location.city}
                                        </p>
                                        <p>
                                            <b>استان:</b> {user.location.state}
                                        </p>
                                        <p>
                                            <b>کشور:</b> {user.location.country}
                                        </p>
                                        <p>
                                            <b>کدپستی:</b> {user.location.postcode}
                                        </p>
                                        <p>
                                            <b>خیابان:</b> {user.location.street.name} {user.location.street.number}
                                        </p>
                                        <p>
                                            <b>ملیت:</b> {user.nat}
                                        </p>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </h2>
                        <p className='text-gray-500'>{user.email}</p>
                    </div>

                    <Button onClick={handleLogout} className='w-full bg-red-500 hover:bg-red-600 text-white'>
                        خروج از حساب
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
