export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      
      {/* LEFT SECTION */}
      <div className="flex items-center justify-center bg-red-300 text-white p-10">
        <div className="max-w-md">
          <p className="text-lg mb-4">Welcome to</p>
          <h1 className="text-5xl font-bold leading-tight">
            <span className="text-orange-400">Task</span>{" "}
            <span className="text-white">Dashboard</span>
          </h1>
          <p className="mt-6 text-white/80 text-base">
            Access to task portal to update your tasks 
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center justify-center bg-white p-6 ">
        <div className="w-full max-w-md space-y-5">
          {/* CARD */}
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-5">
            <h2 className="text-2xl font-semibold text-gray-800">
              Sign in to your account
            </h2>
       
            {/* EMAIL */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* PASSWORD */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* BUTTON */}
            <button className="w-full bg-[#005b9f] hover:bg-[#004a82] text-white font-semibold py-3 rounded-lg transition">
              Sign In
            </button>

            {/* INFO BOX */}
            {/* <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
              <strong>Forgot your password?</strong>
              <br />
              Please contact{" "}
              <a
                href="mailto:support.chemspeed@chemspeed.com"
                className="underline"
              >
                support.chemspeed@chemspeed.com
              </a>{" "}
              or{" "}
              <a
                href="mailto:support_us.chemspeed@chemspeed.com"
                className="underline"
              >
                support_us.chemspeed@chemspeed.com
              </a>{" "}
              to reset your password.
            </div> */}
          </div>
        </div>
      </div>

    </div>
  );
}
