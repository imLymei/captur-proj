import React from 'react'
import Image from 'next/image'

function Portfolio() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className=' text-2xl font-bold pb-7'>City Photos</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image
                    src='https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='/'
                    height={600}
                    width={1440}
                />
            </div>
            <div className='w-full h-full'>
                <Image
                    src='https://images.unsplash.com/photo-1669377411863-95ec496db15a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='/'
                    height={300}
                    width={300}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className='w-full h-full'>
                <Image
                    src='https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    alt='/'
                    height={300}
                    width={300}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className='w-full h-full'>
                <Image
                    src='https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80'
                    alt='/'
                    height={300}
                    width={300}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className='w-full h-full'>
                <Image
                    src='https://images.unsplash.com/photo-1508849789987-4e5333c12b78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1593&q=80'
                    alt='/'
                    height={300}
                    width={300}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    </div>
  )
}

export default Portfolio