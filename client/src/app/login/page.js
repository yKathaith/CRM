'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

export default function Login() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreed: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.agreed) {
      alert('Please agree to the terms & conditions.')
      return
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        alert('Account created!')
      } else {
        alert(data.message || 'Something went wrong.')
      }
    } catch (err) {
      console.error(err)
      alert('An error occurred.')
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#1f1b2e] text-white">
      <div className="md:flex-1 hidden md:flex flex-col justify-between items-center bg-[#1f1b2e] p-8 relative">
        <Image
          src="/login.avif"
          alt="Login Illustration"
          className="w-full h-full object-cover opacity-70 rounded-xl"
          loading="lazy"
          fill
        />
      </div>

      <div className="flex-1 flex justify-center items-center bg-[#2a273f] px-6 py-12">
        <div className="w-full max-w-md space-y-8 bg-[#1f1b2e] p-10 rounded-2xl shadow-xl border border-white/10">
          <h1 className="text-3xl font-bold text-white text-center">Create an account</h1>
          <p className="text-sm text-white/60 text-center">
            Already have an account? <a href="#" className="text-indigo-400 hover:underline">Log in</a>
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input
                name="firstName"
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 px-4 py-3 rounded-lg bg-[#2a273f] border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 px-4 py-3 rounded-lg bg-[#2a273f] border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#2a273f] border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#2a273f] border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="flex items-center gap-2 text-sm text-white/70">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="accent-indigo-500"
              />
              <span>
                I agree to the{' '}
                <a href="#" className="text-indigo-400 hover:underline">Terms & Conditions</a>
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-xl font-semibold transition"
            >
              Create account
            </button>
          </form>

          <div className="flex items-center justify-center gap-2 text-white/50 text-sm pt-4">
            <div className="h-px flex-1 bg-white/20" />
            <span>Or register with</span>
            <div className="h-px flex-1 bg-white/20" />
          </div>

          <div className="flex gap-4 pt-2">
            <button
              onClick={() => signIn('google')}
              className="flex-1 flex items-center justify-center gap-2 border border-white/10 px-4 py-3 rounded-lg bg-[#2a273f] hover:bg-white/5 transition text-white"
            >
              <Image src="/google.svg" alt="Google" width={15} height={15} />
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
