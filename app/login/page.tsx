'use client'

import { FC } from 'react'
import { useLoginController } from '@/app/controller/LoginController'

import RootLayoutProps from '../lib/props/TypeProps'

const LoninPage: FC<RootLayoutProps> = (props) => {
  const loginctx = useLoginController()
  return (
    <div>
      <section className='bg-gray-50 dark:bg-gray-900'>
        <div className='mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0'>
          <div className='w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0'>
            <div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl'>
                Sign in as Admin
              </h1>
              <form
                // className='space-y-4 md:space-y-6'
                // action='/api/ui/login'
                // method='post'
                id='login-form'
                onSubmit={loginctx.handleLoginForm()}
              >
                <div>
                  <label
                    htmlFor='email'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Admin User Name
                  </label>
                  <input
                    {...loginctx.register('username')}
                    type='text'
                    name='username'
                    id='username'
                    className='focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
                    placeholder='ssw user'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Password
                  </label>
                  <input
                    {...loginctx.register('password')}
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    className='focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm'
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='mt-5 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-blue-300 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4'
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoninPage;
