export const HeaderAlert = () => {
  return (
    <div className="alert-banner w-full fixed top-0">
      {/* checked=false にするとトーストが出る */}
      <input type="checkbox" className="hidden" id="banneralert" />

      <label className="close cursor-pointer flex items-center justify-between w-full p-2 bg-red-500 shadow text-white" title="close" htmlFor="banneralert">
        Banner Alert (click anywhere to close)

        <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
      </label>
    </div>
  )
}