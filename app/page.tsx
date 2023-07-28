'use client'

import { CarCard, Hero, ShowMore } from '@/components'
import CustomFilter from '@/components/CustomFilter'
import SearchBar from '@/components/SearchBar'
import { fuels, yearsOfProduction } from '@/constants'
import { fetchCars } from '@/utils'
import Image from 'next/image' 
import { useEffect, useState } from 'react'


export default function Home() {
  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)

  //search state
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')

  //filter states
  const [fuel, setFuel] = useState('')
  const [year, setYear] = useState(2022)
  
  //pagination state
  const [limit, setLimit] = useState(10)

  const getCars = async () => {
    setLoading(true);
  
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year,
        fuel: fuel || '',
        limit,
        model: model || '',
      });
  
      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(fuel, year, limit, model, manufacturer)
    getCars()
  }, [fuel, year, limit, model, manufacturer])

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars 

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalog</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar
            setManufacturer={setManufacturer}
            setModel={setModel}
          />

          <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels}
              setFilter={setFuel} />
            <CustomFilter title="year" options={yearsOfProduction}
              setFilter={setYear}/>
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            {loading && (
              <div className='mt-16 w-full flex-center'>
                <Image
                  alt='loader'
                  src='/loader.png'
                  className='object-contain'
                  width={ 50 }
                  height={ 50 }
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
            <div className='home__error-container'>
              <h2 className='text-black text-xl font-bold'>Ops no results</h2>
              <p>{allCars?.message}</p>
            </div>
        )}

      </div>
    </main>
  )
}
