'use client'
import { useState } from "react"
import useMediaQuery from "@/hooks/useMediaQuery"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import logo from "@/assets/hwgotv.png"
import d4logo from "@/assets/d4logo.png"

type Props = {}

const Navbar = (props: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")

  return (
    <header className="fixed w-full bg-dark-300 border-b-2 border-solid border-dark-400">
      <nav className="flex items-center justify-between px-12 pb-1">
        <a onClick={() => window.scrollTo(0,0)} className="hover:cursor-pointer">
        <Image
            className={`w-16 h-16 ${isAboveSmallScreens ? 'p-0' : 'my-2'}`}
            src={logo}
            alt="HwgoTv"
          />
        </a>

        {/* DESKTOP */}
        {isAboveSmallScreens ? (
        <>
          <div className="flex items-center flex-col">
            <Image
                className="w-16 h-16 mt-4"
                src={d4logo}
                alt="HwgoTv"
              />
            <div className="flex gap-16">
              <a href="" className="hover:border-b hover:border-purple-300 hover:text-dark-100">News</a>
              <a href="" className="hover:border-b hover:border-purple-300 hover:text-dark-100">Builds</a>
              <a href="" className="hover:border-b hover:border-purple-300 hover:text-dark-100">Patch Notes</a>
              <a href="https://www.twitch.tv/hwgotv" className="hover:border-b hover:border-purple-300 hover:text-dark-100" target="_blank">Twitch</a>          
            </div>
          </div>
            <a onClick={() => window.scrollTo(0,0)} className="hover:cursor-pointer">
              <Image
                className="w-16 h-16"
                src={logo}
                alt="HwgoTv"
              />
            </a>
          </>
          ) : (
          <>
            <button 
              className={"rounded-full bg-purple-300 p-2"}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              {!isMenuToggled ? (
                <Menu size={24} /> 
              ) : (
                <X size={24} /> 
              )}
            </button>
          </>
        )}

        {/* MOBILE MODAL */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-3 top-16 h-40 bg-purple-300 rounded-md px-4">
            <div className="flex flex-col gap-4">
              <a href="" className="hover:border-b hover:border-purple-300 hover:text-dark-100">News</a>
              <a href="" className="hover:border-b hover:border-purple-300 hover:text-dark-100">Builds</a>
              <a href="" className="hover:border-b hover:border-purple-300 hover:text-dark-100">Patch Notes</a>
              <a href="https://www.twitch.tv/hwgotv" className="hover:border-b hover:border-purple-300 hover:text-dark-100" target="_blank">Twitch</a>          
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar