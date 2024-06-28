
'use client';
import Link from 'next/link';

const Register = () => {
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Join Us</p>
          <form className="flex flex-col pt-3 md:pt-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col pt-4">
              <label htmlFor="name" className="text-lg">Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Smith"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="email" className="text-lg">Email</label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="password" className="text-lg">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="confirm-password" className="text-lg">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <input
              type="submit"
              value="Register"
              className="bg-darkGreen text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
            />
          </form>
          <div className="text-center pt-12 pb-12">
            <p>Already have an account? <Link legacyBehavior href="/login"><a className="underline font-semibold">Log in here.</a></Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
