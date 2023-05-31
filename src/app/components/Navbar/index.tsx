'use client'

import { useState } from "react"
import useMediaQuery from "../../../hooks/useMediaQuery"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import logo from "../../../assets/hwgotv.png"
import d4logo from "../../../assets/d4logo.png"
import Link from "next/link"


const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")

  return (
    <header className="fixed z-40 top-0 w-full bg-dark-300 border-b-2 border-solid border-dark-400">
      <nav className="flex items-center justify-between h-[100px] px-12 pb-1">
        <a 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
          className="hover:cursor-pointer">
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
            <div className="flex gap-16">
              <Link href="/" className="hover:border-b hover:border-purple-300 hover:text-dark-100">Home</Link>
              <Link href="/pages/builds" className="hover:border-b hover:border-purple-300 hover:text-dark-100">Builds</Link>
              <Link href="/pages/patchnotes" className="hover:border-b hover:border-purple-300 hover:text-dark-100">Patch Notes</Link>
              <Link href="https://www.twitch.tv/hwgotv" className="hover:border-b hover:border-purple-300 hover:text-dark-100" target="_blank">Twitch</Link>          
              <Link href="https://www.youtube.com/channel/UCEcByhnQsL6FMy1vPoqyW8A" className="hover:border-b hover:border-purple-300 hover:text-dark-100" target="_blank">Youtube</Link>          
            </div>
          </div>
            <Link href="https://www.twitch.tv/hwgotv" target="_blank">
              <Image
                className="w-16 h-16"
                src={d4logo}
                alt="Diablo 4"
              />
            </Link>
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
          <div className="fixed right-3 top-[4.4rem] h-80 bg-dark-400 rounded-md px-4">
            <div className="flex flex-col mt-6 gap-4 text-center">
              <Link href="/" className="hover:border-b hover:border-purple-300 hover:text-dark-100">Home</Link>
              <hr />
              <Link href="/pages/builds" className="hover:border-b hover:border-purple-300 hover:text-dark-100">Builds</Link>
              <hr />
              <Link href="/pages/patchnotes" className="hover:border-b hover:border-purple-300 hover:text-dark-100">Patch Notes</Link>
              <hr />
              <Link href="https://www.twitch.tv/hwgotv" className="hover:border-b hover:border-purple-300 hover:text-dark-100" target="_blank">Twitch</Link>
              <hr /> 
              <Link href="https://www.youtube.com/channel/UCEcByhnQsL6FMy1vPoqyW8A" className="hover:border-b hover:border-purple-300 hover:text-dark-100" target="_blank">Youtube</Link>                   
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar