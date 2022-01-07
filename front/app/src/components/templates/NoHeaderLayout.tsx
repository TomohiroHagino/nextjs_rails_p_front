import Head from "next/head"
import { VFC, ReactNode } from "react"
import { Footer } from "../organisms/footer/Footer"

interface TProps {
  children: ReactNode
  title: string
}

export const NoHeaderLayout: VFC<TProps> = (props): JSX.Element => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-while font-mono">
      <Head>
        <title>{props.title ? props.title : "default title"}</title>
      </Head>
      <main className="flex flex-1 justify-center items-center w-screen flex-col">
        {props.children}
      </main>
      <Footer />
    </div>
  )
}