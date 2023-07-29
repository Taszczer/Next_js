'use client'

import { forSpecialButton } from '@/types'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'


const SpecialButton = ({title, containerStyles, btnType, isDisabled, textStyles, handleClick}: forSpecialButton) => {
  const [isOpen, setIsOpen] = useState(false)

  function closeM() {
    setIsOpen(false)
  }

  function openM() {
    setIsOpen(true)
  }
  
  

  return (
    <>
      {isOpen ? (
        <button
          className={`custom-btn hidden `}
          disabled={isDisabled}
          type={btnType || 'button'}
          onClick={openM}
        >
          <span className={`flex-1 ${textStyles}`}>{}</span>
        </button>
      ) : (
        <button
          className={`custom-btn ${containerStyles}`}
          disabled={isDisabled}
          type={btnType || 'button'}
          onClick={openM}
        >
          <span className={`flex-1 ${textStyles}`}>{title}</span>
        </button>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-100' onClose={closeM}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed bg-black bg-opacity-25 inset-0' />
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default SpecialButton;