'use client'

import { CarProps } from "@/types"
import Image from "next/image"
import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
//Dialog is model with opens

interface CarDetailsProps {
    isOpen: boolean
    closeModal: () => void
    car: CarProps
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
      <>
        <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className='relative z-50' onClose={closeModal}>
                  <Transition.Child
                      as={Fragment}
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      enter="ease-out duration-300"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25"/>
                  </Transition.Child>  
              </Dialog>
        </Transition>
      </>
  )
}

export default CarDetails