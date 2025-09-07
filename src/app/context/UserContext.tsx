'use client'

import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {UserType} from '@/types/user'
import {useRouter} from 'next/navigation'

type UserContextType = {
    user: UserType | null
    setUser: (user: UserType | null) => void
    logout: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<UserType | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const stored = localStorage.getItem('user')
        if (stored) {
            const parsed = JSON.parse(stored)
            setUser(parsed)
        }
        setLoading(false)
    }, [])

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
        router.push('/login')
    }

    return (
        <UserContext.Provider value={{user, setUser, logout}}>
            {loading ? (
                <div className='flex items-center justify-center min-h-screen bg-custom-dark'>
                    <div className='animate-spin rounded-full h-16 w-16 border-4 border-customYellow border-t-transparent'></div>
                </div>
            ) : (
                children
            )}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) throw new Error('useUser must be used within a UserProvider')
    return context
}
