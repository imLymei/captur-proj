import React from 'react'
import Image from 'next/image';
import InstagramImg from './InstagramImg';
import {FaInstagram} from 'react-icons/fa'

const IgImg1 = 'https://instagram.fssz10-1.fna.fbcdn.net/v/t51.2885-15/294788151_1162692547913197_8828684326019891537_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fssz10-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=1HGe1TuXxQAAX9Eb5pa&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg4NjgxNzMyODIyODUzOTYyMg%3D%3D.2-ccb7-5&oh=00_AfBzh43ASDa4-vbbF1PhCQZ7nVJLffO66qcjRAl4IC2cUQ&oe=6382145F&_nc_sid=30a2ef'
const IgImg2 = 'https://instagram.fssz10-1.fna.fbcdn.net/v/t51.2885-15/281545593_168611028870980_5646192899222654617_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fssz10-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=BY43gXhW7_kAX8J6ZTN&tn=SiJpDsZoocZbUeyu&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg0MTE3NDU1OTg5OTU3MDk4Ng%3D%3D.2-ccb7-5&oh=00_AfBzs7GoXsglNvJCI404FbtTB3bf-eOe8w54KIJ_oBfnzQ&oe=638326E5&_nc_sid=30a2ef'
const IgImg3 = 'https://instagram.fssz10-1.fna.fbcdn.net/v/t51.2885-15/298195908_434890431903754_7657289592701785783_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fssz10-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=X9W8Mo5e-bgAX8pucvS&tn=SiJpDsZoocZbUeyu&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkwMTE1NzU2Mzg1NDkyNTY0NQ%3D%3D.2-ccb7-5&oh=00_AfC8kRvRXsapnnunnGXmoeZeRJ_1IVvOm50iEtB5e3-ulw&oe=63821AF7&_nc_sid=30a2ef'

function Instagram() {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'>@Captur</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
          <div className='relative'>
            <Image src={IgImg1} fill={true} alt="/" className='object-cover' />
            {/* Overlay */}
            <div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group' />
            <p className='text-gray-300 hidden group-hover:block'><FaInstagram size={30} /></p>
          </div>
          <InstagramImg socialImg={IgImg2} />
        </div>
    </div>
  )
}

export default Instagram