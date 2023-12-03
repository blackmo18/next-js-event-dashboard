import LoginResponse from '@/models/response/LoginResponse'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) {
  const url = process.env.SSW_HOST + '/api/v1/login'
  console.log('url', url)
  console.log('body', req.body)
  const response = await fetch(url, {
    method: 'POST',
    body: req.body,
    headers: {
      'Content-Type': 'application/json',
    }
  })
  
  console.log('status', response.status)
  
  res.status(response.status)
  res.send({ message: 'ok', status: response.status })
}