import React from 'react'
import{ Link } from 'react-router-dom'
import { Container, Box, Stack } from '@mui/material'
import Show from './Show'
const Main = () => {
  return (
    <Container maxWidth="xl" sx={{bgcolor:"#000"}}>
      <div className="bg-white top-0 bottom-0 left-0 right-0">
        <div className="mx-auto max-w-7xl py-8 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
              <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset="1" stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md  lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-lg text-center font-bold tracking-tight text-white sm:text-4xl">Welcome To<br /> Kejetia Public Witnessing.</h2>
              <p className="mt-6 text-sm leading-8 text-gray-300">This platform serves the specific purpose of documenting and organizing publication resources utilized during our activities at Kejetia Public Witnessing, including books, brochures, and other pertinent materials. </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link to="/service" className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Add Report</Link>
                <Show />
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img className="absolute object-contain left-0 top-0 right-0 bottom-0 w-[35rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="https://assetsnffrgf-a.akamaihd.net/assets/m/202021018/univ/art/202021018_univ_cnt_4_xl.jpg" alt="App screenshot" />
            </div>
          </div>
        </div>
      </div>
    </Container>
    
  )
}

export default Main