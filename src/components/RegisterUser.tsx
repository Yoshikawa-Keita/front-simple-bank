import { LockClosedIcon } from '@heroicons/react/20/solid'
import Link from 'next/dist/client/link'
import Router, { useRouter } from 'next/router'
import React, { FormEvent, useState } from 'react'
import Cookie from 'universal-cookie'

const cookie = new Cookie()

export const RegisterUser = () => {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')

  const register = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('call createUser API')
    try {
      //await fetch('https://api.freesimplebank.com/users/login',
      await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password,
          full_name: fullName,
          email: email,
        })
      })

      router.push('/Login')
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create your new account
            </h2>
            
          </div>
          <form className="mt-8 space-y-6" onSubmit={register}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">
                  username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                  }}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  FullName
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="fullName"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="FullName"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value)
                  }}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign Up
              </button>
            </div>
          </form> 
          <Link href="/Login">
                <a>Login to your Account?</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
