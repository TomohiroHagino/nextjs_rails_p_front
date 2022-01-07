import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';

export const LoginForm = (props) => {
  const { action,modeFlag,handleInputChange,authRequest,toggleMode } = props
  const dispatch: AppDispatch = useDispatch()

  return (
    <div className="
      max-w-md
      w-full
      space-y-8
      px-8
    ">
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          {modeFlag ? "Login" : "Sign up"}
        </h2>
      </div>

      <form className="mt-8 space-y-6" onSubmit={action}>
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none
                         rounded-none
                         relative
                         block
                         w-full
                         px-3
                         py-2
                         border border-gray-300
                         placeholder-gray-500 
                         text-gray-900
                         rounded-t-md
                         focus:outline-none
                         focus:ring-indigo-500
                         focus:border-indigo-500
                         focus:z-10
                         sm:text-sm"
              placeholder="Email address"
              value={authRequest.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none
                         rounded-none
                         relative block
                         w-full
                         px-3
                         py-2
                         border
                         border-gray-300
                         placeholder-gray-500
                         text-gray-900
                         rounded-b-md
                         focus:outline-none
                         focus:ring-indigo-500
                         focus:border-indigo-500
                         focus:z-10
                         sm:text-sm"
              placeholder="Password"
              value={authRequest.password}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">

          <div className="text-md">
            <span
              onClick={() => dispatch(toggleMode())}
              className="cursor-pointer font-medium text-white hover:text-indigo-500"
            >
              change mode ?
            </span>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group
                       relative
                       w-full
                       flex
                       justify-center
                       py-2
                       px-16
                       md:px-8
                       border
                       border-transparent
                       text-sm
                       font-medium
                       rounded-md
                       text-white
                       bg-indigo-600
                       hover:bg-indigo-700
                       transition
                       focus:outline-none
                       focus:ring-2
                       focus:ring-offset-2
                       focus:ring-indigo-500">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">

              <svg
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd" />
              </svg>
            </span>
            {modeFlag ? "Login with Devise Token Auth" : "Sign up with Devise Token Auth"}
          </button>
        </div>
      </form>
    </div>
  )
}