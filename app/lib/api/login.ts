import LoginRequest from '@/app/lib/model/LoginRequest'
import LoginResponse from '@/models/response/LoginResponse'

export const callLogin = async (payload: LoginRequest): Promise<LoginResponse> => {
    const result = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(payload),
    })
    return await result.json()
}