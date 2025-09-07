export type UserType = {
    name: {
        title: string
        first: string
        last: string
    }
    email: string
    picture: {
        large: string
        medium: string
        thumbnail: string
    }
    cell?: string
    dob?: {
        date: string
        age: number
    }
    location?: {
        street?: {
            number: number
            name: string
        }
        city?: string
        country?: string
    }
    fullData?: any
}
