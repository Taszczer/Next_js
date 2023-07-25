'use client'

import { useState, Fragment } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Listbox, Transition } from '@headlessui/react'
import { CustomFilterProps } from '@/types'

const CustomFilter = ({ title, options }:CustomFilterProps) => {
  return (
    <div className='w-fit'>
      <Listbox>
        <div className='relative w-fit z-10'>

        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter