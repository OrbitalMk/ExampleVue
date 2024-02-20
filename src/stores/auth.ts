import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface User {
    username: string,
    email?: string 
}

export const useAuthStore = defineStore('user', () => {
    const user = ref<User | null>(null)

    function isAuthenticated(): boolean {
        return user.value !== null
    }

    function setUser(newUser: User) {
        user.value = newUser
    }

    return { user, isAuthenticated, setUser }
})