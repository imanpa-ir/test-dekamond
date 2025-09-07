'use client'

import {createContext, useContext, useEffect, useState} from 'react'

type User = any | null //  همه داده‌های API ذخیره میشه

type UserContextType = {
    user: User
    setUser: (user: User) => void
    logout: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({children}: {children: React.ReactNode}) {
    const [user, setUserState] = useState<User>(null)

    //  بعد از رفرش → localStorage رو بررسی کن
    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            try {
                setUserState(JSON.parse(storedUser))
            } catch {
                localStorage.removeItem('user')
            }
        }
    }, [])

    const setUser = (newUser: User) => {
        setUserState(newUser)
        if (newUser) {
            localStorage.setItem('user', JSON.stringify(newUser))
        } else {
            localStorage.removeItem('user')
        }
    }

    const logout = () => setUser(null)

    return <UserContext.Provider value={{user, setUser, logout}}>{children}</UserContext.Provider>
}

export function useUser() {
    const context = useContext(UserContext)
    if (!context) throw new Error('useUser must be used within a UserProvider')
    return context
}
