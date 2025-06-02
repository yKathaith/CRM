export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Welcome to CRM</h1>
        <p className="text-gray-600 text-lg mb-8">
          Your personalized campaign platform powered by intelligence & insights.
        </p>
        <a
          href="/login"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
        >
          Get Started → Login
        </a>
      </div>
    </main>
  )
}