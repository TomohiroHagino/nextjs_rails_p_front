import { useState, useEffect } from "react"
import { memo } from "react"
import MediaQuery from "react-responsive"
import Link from "next/dist/client/link"
import { useRouter } from 'next/router'
import { Title } from "../../atoms/title/Title"

export const Header = memo(() => {
  const router = useRouter()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log("Header: レンダリング")
    console.log(`url: ${router.pathname}`)
      setMounted(true)
  }, [])

  const pickupStyle = "mr-6 font-bold text-yellow-500"
  const normalStyle = "mr-6 font-bold"

  return (
    <div className="z-50 relaive w-full h-12 justify-center items-center bg-black text-lg mb-2">
      { mounted &&
      <>
        <MediaQuery query="(max-width: 1023px)">
          <div className="menu-wrap">
            <div className="flex">
              <label htmlFor="acd-menu">
                <svg className="menu-wrap
                ml-8 mt-3 h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                </svg>
              </label>
              <Title />
            </div>
            <input type="checkbox" id="acd-menu" />
            <ul className="acd-list text-white">
              <li className={router.pathname === "/ruby" ? pickupStyle : normalStyle}>
                <Link href="/ruby"><a>Ruby</a></Link>
              </li>
              <li className={router.pathname === "/ruby-on-rails" ? pickupStyle : normalStyle}>
                <Link href="/ruby-on-rails"><a>Ruby on Rails</a></Link>
              </li>
              <li className={router.pathname === "/next-js-react" ? pickupStyle : normalStyle}>
                <Link href="/next-js-react">
                  <a>Next.js(React)</a>
                </Link>
              </li>
              <li className={router.pathname === "/mysql" ? pickupStyle : normalStyle}>
                <Link href="/mysql">
                  <a>MySQL</a>
                </Link>
              </li>
              <li className={router.pathname === "/ec2" ? pickupStyle : normalStyle}>
                <Link href="/ec2">
                  <a>EC2</a>
                </Link>
              </li>
              <li className={router.pathname === "/ecs" ? pickupStyle : normalStyle}>
                <Link href="/ecs">
                  <a>ECS</a>
                </Link>
              </li>
              <li className={router.pathname === "/s3" ? pickupStyle : normalStyle}>
                <Link href="/s3">
                  <a>S3</a>
                </Link>
              </li>
              <li className={router.pathname === "/rds" ? pickupStyle : normalStyle}>
                <Link href="/rds">
                  <a>RDS</a>
                </Link>
              </li>
            </ul>
          </div>
        </MediaQuery>

        <MediaQuery query="(min-width: 1024px)">
          <div className="menu-wrap
            flex
          ">
            <div className="mt-3 ml-8">
              <span className="text-white mr-6 text-xl font-bold"><Link href="/main-page"><a>PortForio 2022</a></Link></span>
            </div>
            <div className="menu-list
              mt-3
              ml-8
              text-white
            ">
              <span className={router.pathname === "/ruby" ? pickupStyle : normalStyle}>
                <Link href="/ruby"><a>Ruby</a></Link>
              </span>
              <span className={router.pathname == "/ruby-on-rails" ? pickupStyle : normalStyle}>
                <Link href="/ruby-on-rails"><a>Ruby on Rails</a></Link>
              </span>
              <span className={router.pathname === "/next-js-react" ? pickupStyle : normalStyle}>
                <Link href="/next-js-react"><a>Next.js(React)</a></Link>
              </span>
              <span className={router.pathname === "/mysql" ? pickupStyle : normalStyle}>
                <Link href="/mysql"><a>MySQL</a></Link>
              </span>
              <span className={router.pathname === "/ec2" ? pickupStyle : normalStyle}>
                <Link href="/ec2"><a>EC2</a></Link>
              </span>
              <span className={router.pathname === "/ecs" ? pickupStyle : normalStyle}>
                <Link href="/ecs"><a>ECS</a></Link>
              </span>
              <span className={router.pathname === "/rds" ? pickupStyle : normalStyle}>
                <Link href="/rds"><a>RDS</a></Link>
              </span>
              <span className={router.pathname === "/s3" ? pickupStyle : normalStyle}>
                <Link href="/s3"><a>S3</a></Link>
              </span>
            </div>
          </div>
        </MediaQuery>
      </>
      }
    </div>
  )
})