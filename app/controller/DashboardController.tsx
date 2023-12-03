import { useRouter } from 'next/navigation'

export const useDashboardController = () => {
    const router = useRouter()
    const onSignOut = () => {
        console.log('signout')
        router.push('/login')
    }

    return {
        onSignOut
    }
}