import {  UseFormRegister, useForm } from 'react-hook-form'
import LoginRequest from '@/app/lib/model/LoginRequest'
import { callLogin } from '../lib/api/login'
import { useRouter } from 'next/navigation'

export interface ILoginController {
    handleLogin: (loginRequest: LoginRequest) => void
    handleLoginForm: any
    register: UseFormRegister<LoginRequest>
}

export const useLoginController = (): ILoginController => {
    const router = useRouter()
    const {register, handleSubmit} = useForm<LoginRequest>()
    const handleLogin = async (loginRequest: LoginRequest) => {
       const response = await callLogin(loginRequest) 
       if (response.status === 200) {
        router.push('/dashboard')
       } else {
        console.error(response)
       }
    }

    const handleLoginForm = () =>  {
        return handleSubmit(handleLogin)
    }

    return {
        handleLogin,
        register,
        handleLoginForm
    }
}