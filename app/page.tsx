"use client";
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [selectedState, setSelectedState] = useState('')
  const router = useRouter()

  const handleGoToState = () => {
    if (selectedState) {
      router.push(`/state/${selectedState.toLowerCase()}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Driver Test Prep - Ace Your DMV Exam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Driver Test Prep</h1>
          <p className="text-xl text-gray-600">Ace your DMV exam on the first try</p>
        </header>

        <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {['Car', 'Motorcycle', 'CDL'].map((type) => (
              <button
                key={type}
                className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50"
              >
                <span className="text-3xl mb-2">{type === 'Car' ? '🚗' : type === 'Motorcycle' ? '🏍️' : '🚚'}</span>
                <span className="font-medium">{type}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="flex-grow p-2 border rounded"
            >
              <option value="">Choose Your State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            <button onClick={handleGoToState} className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Go to State
            </button>
          </div>
        </section>
      </main>

      <footer className="text-center mt-8 text-gray-600">
        <p>&copy; 2023 Driver Test Prep. All rights reserved.</p>
      </footer>
    </div>
  )
}