import {createContext, ReactNode, useContext, useState} from 'react'
import {UserType} from '@/types/user'

type UserContextType = {
    user: UserType | null
    setUser: (user: UserType | null) => void
    logout: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({children}: {children: ReactNode}) => {
    const [user, setUser] = useState<UserType | null>(null)

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
    }

    return <UserContext.Provider value={{user, setUser, logout}}>{children}</UserContext.Provider>
}

export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) throw new Error('useUser must be used within a UserProvider')
    return context
}
