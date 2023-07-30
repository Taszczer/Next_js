'use client'

import { forSpecialButton } from '@/types'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
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
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter=' ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo=' opacity-100 scale-100'
                leave=' ease-in duration-200'
                leaveFrom=' opacity-100 scale-100'
                leaveTo=' opacity-0 scale-0'
              >
                <Dialog.Panel className='flex flex-col text-left gap-2 relative w-full max-w-sm transform overflow-auto rounded-2xl bg-white p-6 shadow-xl transition-all'>
                  <div className='flex-between'>
                    <Dialog.Title
                      as='h3'
                      className="text-2xl font-extrabold leading-6 text-[#2B59FF]"
                    >
                      Rent your car right now
                      </Dialog.Title>
                    
                    <button
                      type='button'
                      className='flex justify-end align-middle text-right'
                      onClick={closeM}
                    >
                      <Image
                        src="/close.svg"
                        alt="close"
                        className='object-contain'
                        width={25}
                        height={25}
                      />
                    </button>
                    
                  </div>
                  <div>
                    <h3>But first you need to</h3>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SpecialButton;