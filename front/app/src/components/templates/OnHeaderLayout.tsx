import Head from "next/head"
import { VFC, ReactNode, useState, useEffect } from "react"
import { Header } from "../organisms/header/Header"
import { Footer } from "../organisms/footer/Footer"
import axios from "axios"
import { CRED_HEAD } from "../../features/types"
import { fetchHeaders } from "../../../services/utils/fetchHeaders"
import { LogOutButton } from "../atoms/button/LogOutButton"
import router from "next/router"

interface TProps {
  children: ReactNode
  title: string
}

export const OnHeaderLayout: VFC<TProps> = (props): JSX.Element => {

  const logoutAction = async () => {
    const headers: CRED_HEAD = fetchHeaders()

    try {
      await axios.delete(`${process.env.API_URL}/api/auth/sign_out`,
        {
          data:
          {
            "uid": headers.uid,
            "access-token": headers.accessToken,
            "client": headers.client,
          }
        }
      )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            localStorage.removeItem('access-token')
            localStorage.removeItem('uid')
            localStorage.removeItem('client')
            console.log("ローカルストレージ削除")
          } else {
            throw "authentication failed";
          }
        })
      router.push('/')
      console.log("ログアウトしました。")
    } catch (err) {
      alert(err)
    }
  };

  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-while font-mono">
      <Head>
        <title>{props.title ? props.title : "default title"}</title>
      </Head>
      <Header />

      <main className="flex flex-1 justify-center items-center w-screen">
        {props.children}
      </main>

      <LogOutButton action={logoutAction}/>
      <Footer />
    </div>
  )
}
