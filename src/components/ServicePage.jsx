import React from 'react'
import AddBook from './AddBook'
import AddBrochure from './AddBrochure'
import Others from './Others'
import Magazine from './Magazine'



const ServicePage = () => {
  return (
    <div className='container mx-auto px-4 py-3 sm:m-5 lg:h-[400px]'>
        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-row-1 gap-8 h-full">
            <div className="w-full p-2 rounded-lg shadow-2xl lg:flex lg:max-w-lg">
                <div className="pl-2">
                    <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                        Add Books
                    </h4>
                    <p className="mb-2 leading-normal">
                        All Books in addition of Watchtower and Awake are to be enter here.
                        please look through to know what to enter in here. Thank you.
                    </p>
                    <AddBook />
                </div>
            </div>
            <div className="w-full p-2 rounded-lg shadow-2xl lg:flex lg:max-w-lg">
                <div className="pl-2">
                    <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                        Add Brochures
                    </h4>
                    <p className="mb-2 leading-normal">
                        Brochures like Enjoy Life Forever, Road to Everlasting Life, Good news etc.
                        are to be enter here. please look through to know what to enter in here. Thank you.
                    </p>
                    <AddBrochure />
                    
                </div>
            </div>

            <div className="w-full p-4 rounded-lg shadow-2xl lg:flex lg:max-w-lg">
                <div className="pl-2">
                    <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                        Add Magazine
                    </h4>
                    <p className="mb-2 leading-normal">
                        All magazines like watchtower, Awake  etc are to be enter here.
                        please look through to know what to enter in here. Thank you.
                    </p>
                    <Magazine />
                    
                </div>
            </div>
            
            <div className="w-full p-2 rounded-lg shadow-2xl lg:flex lg:max-w-lg">
                <div className="pl-2">
                    <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                        Add Others
                    </h4>
                    <p className="mb-2 leading-normal">
                       Other Activities like bible study, videos etc shown are to be enter here.
                       please look through to know what to enter in here. Thank you.
                    </p>
                    <Others />
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ServicePage