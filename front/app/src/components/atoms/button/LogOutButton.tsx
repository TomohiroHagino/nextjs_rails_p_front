export const LogOutButton = (props) => {
  const { action } = props

  return (
    <div className="
      absolute
      right-2
      md:right-8
      bottom-12
      bg-green-500
      rounded-full
      hover:bg-opacity-80
      transition
      w-24
      h-24
    "
      onClick={action}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mt-6 coursor-pointer h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
      <div className="text-white">
        <p className="text-center text-lg font-bold">Logout</p>
      </div>
    </div>
  )
}