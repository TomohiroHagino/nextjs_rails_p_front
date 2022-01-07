export const FirstToast = () => {
  return (
    <div className="alert-toast fixed top-4 right-0 m-7 w-5/6 md:w-full max-w-sm">
      <input type="checkbox" className="hidden" id="footertoast" />

      <label className="close cursor-pointer flex items-start justify-between w-full p-4 bg-green-500 h-30 rounded shadow-lg text-white" title="close" htmlFor="footertoast">
        ご覧いただき、ありがとうございます！
        <br />
        change mode ? をクリックしていただくと、新規作成モードになります。
        (メールアドレスは架空のものでOKです)
        <br />
        メールアドレスとパスワードを入力して青いボタンを押してください。
      </label>
    </div>
  )
}