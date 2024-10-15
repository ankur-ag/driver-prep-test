import { useState } from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'
import RootLayout from '@/app/layout'
import { CheckCircle, Star, Users, BookOpen, Award } from 'lucide-react'

const StateProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter()
  const { state } = router.query
  const stateNames: { [key: string]: string } = {
    AL: "Alabama",
    AK: "Alaska",
    AZ: "Arizona",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    FL: "Florida",
    GA: "Georgia",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PA: "Pennsylvania",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VA: "Virginia",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming",
  };

  const getFullStateName = (state: string | string[]): string => {
    const stateKey = typeof state === 'string' ? state.toUpperCase() : state[0].toUpperCase();
    console.log(stateKey);
    return stateNames[stateKey] || 'Unknown State';
  }

  const handleButtonClick = () => {
    setIsModalOpen(true);
  }

  if (!state) {
    return null; // or a loading spinner, or a placeholder
  }

  return (
    <RootLayout>
      <div className="min-h-screen bg-gray-100">
        <Head>
          <title>{`${getFullStateName(state)} DMV Test Prep - Ace Your Exam`}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container mx-auto px-4 py-12">
          <h1 className="text-5xl font-bold text-center mb-8 text-gray-800">
            {getFullStateName(state)} DMV Test Prep
          </h1>

          <div className="hero bg-white rounded-box shadow-xl mb-16">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold text-gray-700">Ace Your DMV Test on the First Try!</h2>
                <p className="py-6 text-gray-600">Our curated test prep materials are designed to help you pass your DMV exam with confidence. Start preparing today!</p>
                <button className="btn bg-green-600 text-white hover:bg-green-700" onClick={handleButtonClick}>Get Started</button>
              </div>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Why Choose Our Tests?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">
                    <CheckCircle className="w-6 h-6 text-gray-600" />
                    Curated Questions
                  </h3>
                  <p className="text-gray-600">Frequently asked questions from actual exams</p>
                </div>
              </div>
              <div className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">
                    <CheckCircle className="w-6 h-6 text-gray-600" />
                    Road Sign Coverage
                  </h3>
                  <p className="text-gray-600">Comprehensive review of all important road signs</p>
                </div>
              </div>
              <div className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">
                    <CheckCircle className="w-6 h-6 text-gray-600" />
                    Engaging Experience
                  </h3>
                  <p className="text-gray-600">More fun and interactive than the DMV handbook</p>
                </div>
              </div>
              <div className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">
                    <CheckCircle className="w-6 h-6 text-gray-600" />
                    Increased Pass Rate
                  </h3>
                  <p className="text-gray-600">Boost your chances of passing on the first attempt</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className="italic text-lg mb-4 text-gray-600">This test prep was a lifesaver! I passed on my first try!&quot;</p>
                  <p className="font-semibold text-gray-700">- Sarah D.</p>
                </div>
              </div>
              <div className="card bg-white shadow-xl">
                <div className="card-body">
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className="italic text-lg mb-4 text-gray-600">&quot;Much more engaging than the DMV handbook. Highly recommended!&quot;</p>
                  <p className="font-semibold text-gray-700">- Mike R.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card bg-white shadow-xl">
                <div className="card-body">
                  <h3 className="card-title text-2xl font-semibold mb-4 text-gray-800">Basic Plan</h3>
                  <p className="text-4xl font-bold mb-6 text-gray-700">$9.99</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center">
                      <Users className="w-5 h-5 text-gray-600 mr-2" />
                      <span className="text-gray-600">50 curated questions</span>
                    </li>
                    <li className="flex items-center">
                      <BookOpen className="w-5 h-5 text-gray-600 mr-2" />
                      <span className="text-gray-600">Road sign coverage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gray-600 mr-2" />
                      <span className="text-gray-600">24/7 access</span>
                    </li>
                  </ul>
                  <button className="btn bg-green-600 text-white hover:bg-green-700 btn-block" onClick={handleButtonClick}>Choose Basic</button>
                </div>
              </div>
              <div className="card bg-white shadow-xl border-2 border-gray-300">
                <div className="card-body">
                  <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 rounded-tr-lg font-semibold">
                    Best Value
                  </div>
                  <h3 className="card-title text-2xl font-semibold mb-4 text-gray-800">Premium Plan</h3>
                  <p className="text-4xl font-bold mb-6 text-gray-700">$19.99</p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center">
                      <Users className="w-5 h-5 text-gray-600 mr-2" />
                      <span className="text-gray-600">150 curated questions</span>
                    </li>
                    <li className="flex items-center">
                      <BookOpen className="w-5 h-5 text-gray-600 mr-2" />
                      <span className="text-gray-600">Comprehensive road sign coverage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gray-600 mr-2" />
                      <span className="text-gray-600">24/7 access</span>
                    </li>
                    <li className="flex items-center">
                      <Award className="w-5 h-5 text-gray-600 mr-2" />
                      <span className="text-gray-600">Performance tracking</span>
                    </li>
                  </ul>
                  <button className="btn bg-green-600 text-white hover:bg-green-700 btn-block" onClick={handleButtonClick}>Choose Premium</button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer footer-center p-10 bg-gray-200 text-gray-600 rounded">
          <div>
            <p>&copy; 2023 Driver Test Prep. All rights reserved.</p>
          </div>
        </footer>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h2 className="font-bold text-lg">Coming Soon!</h2>
              <p>This product will be added soon.</p>
              <div className="modal-action">
                <button className="btn" onClick={() => setIsModalOpen(false)}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </RootLayout>
  )
}
export default StateProducts
