'use client'

import { useState, Fragment } from 'react'
import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition} from '@headlessui/react'
import Image from 'next/image'

const SearchManufacturer = ({ manufacturer, setManufacturer}: SearchManufacturerProps ) => {
  const [query, setQuery] = useState('')
  
  return (
    <div className='search-manufacturer'>
      <Combobox> 
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]' >
            <Image
              src='/car-logo.svg'
              alt='Car logo'
              width={ 20 }
              height={ 20 }
              className='ml-4'
            />
          </Combobox.Button>

          <Combobox.Input
            className='search-manufacturer__input'
            placeholder='Volkswagen'
            displayValue={(manufacturer:string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >

          </Transition>
        </div>  
      </Combobox>
    </div>
  )
}

export default SearchManufacturer