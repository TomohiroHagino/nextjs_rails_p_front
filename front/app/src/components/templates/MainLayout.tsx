export const MainLayout = ({ children }) => {
  return (
    <div className="
    absolute
    flex-col
    mx-8
    w-8/12
    ">
      <div className="
      relative
      text-white
      text-sm
      md:text-lg
      mt-4
      ">
        {children}
      </div>
    </div>
  )
}