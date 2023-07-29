'use client'

import Link from "next/link"
import Image from "next/image"
import CustomButton from "./CustomButton"
import CarDetails from "./CarDetails"
import { useState } from "react"
import { CarProps } from "@/types"
import SpecitalButton from "./SpecialButton"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
      <header className="w-full absolute z-10">
          <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 h-[120px]">
              <Link href='/' className="flex justify-center items-center">
                  <Image
                      src='/logo.svg'
                      alt="Car Hub Logo"
                      width={118}
                      height={18}
                      className="object-contain "
                  />
              </Link>
              
              <SpecitalButton
                  title='Sign In'
                  containerStyles="z-10 text-primary-blue rounded-full bg-white min-w-[130px] hover:bg-primary-blue hover:text-white transition diration-500"
                  btnType='button'
                  handleClick={() => setIsOpen(true)}
              />
              
          </nav>
    </header>
  )
}

export default Navbar