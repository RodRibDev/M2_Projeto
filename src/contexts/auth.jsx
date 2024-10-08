import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
    user: null,
    signIn: async () => {},
    signOut: () => {} 
})

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const userLoggedStorage = localStorage.getItem('@nature365:user')

        if(userLoggedStorage) {
            return JSON.parse(userLoggedStorage)
        }

        return null
    })

    async function signIn(data) {
        const response = await fetch(`http://localhost:3333/users?email=${data.email}`);
        const userdata = await response.json()
        
        if(userdata.length > 0 && userdata[0].senha === data.senha){
            setUser(userdata)
            localStorage.setItem('@nature365:user', JSON.stringify(userdata))
            return true
        } else {
            return false

        }

    }

    function signOut() {
        setUser(null)
        localStorage.removeItem('@nature365:user')
    }

    return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const contexto = useContext(AuthContext)

    return contexto
}