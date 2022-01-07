import Link from "next/link"

export const GotoMainPageButton = () => {
  return (
    <>
      <Link href="/main-page">
        <div className="
        absolute
        left-2
        md:left-8
        bottom-12
        bg-blue-400
        rounded-full
        hover:bg-opacity-80
        transition
        w-24
        h-24
        ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mt-6 coursor-pointer h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </svg>
          <div className="text-white">
            <p className="text-center text-sm font-bold">Main page</p>
          </div>
        </div>
      </Link>
    </>
  )
}