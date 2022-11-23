import React from 'react'
import Image from 'next/image';
import {FaInstagram} from 'react-icons/fa'
import InstagramImg from './InstagramImg';

const img1 = 'https://instagram.fssz10-1.fna.fbcdn.net/v/t51.2885-15/294788151_1162692547913197_8828684326019891537_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fssz10-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=1HGe1TuXxQAAX9Eb5pa&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg4NjgxNzMyODIyODUzOTYyMg%3D%3D.2-ccb7-5&oh=00_AfBzh43ASDa4-vbbF1PhCQZ7nVJLffO66qcjRAl4IC2cUQ&oe=6382145F&_nc_sid=30a2ef'
const img2 = 'https://instagram.fssz10-1.fna.fbcdn.net/v/t51.2885-15/281545593_168611028870980_5646192899222654617_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fssz10-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=BY43gXhW7_kAX8J6ZTN&tn=SiJpDsZoocZbUeyu&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg0MTE3NDU1OTg5OTU3MDk4Ng%3D%3D.2-ccb7-5&oh=00_AfBzs7GoXsglNvJCI404FbtTB3bf-eOe8w54KIJ_oBfnzQ&oe=638326E5&_nc_sid=30a2ef'
const img3 = 'https://instagram.fssz10-1.fna.fbcdn.net/v/t51.2885-15/298195908_434890431903754_7657289592701785783_n.jpg?stp=dst-jpg_e35_s1080x1080&_nc_ht=instagram.fssz10-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=X9W8Mo5e-bgAX8pucvS&tn=SiJpDsZoocZbUeyu&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkwMTE1NzU2Mzg1NDkyNTY0NQ%3D%3D.2-ccb7-5&oh=00_AfC8kRvRXsapnnunnGXmoeZeRJ_1IVvOm50iEtB5e3-ulw&oe=63821AF7&_nc_sid=30a2ef'
const img4 = 'https://instagram.fssz10-1.fna.fbcdn.net/v/t51.2885-15/272014572_461131898950077_6448812647762449551_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fssz10-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=XxW_E59Y0C4AX88vnOK&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjc1NDI3MDk0MjE2OTc4NTI2Mw%3D%3D.2-ccb7-5&oh=00_AfDTBrmPh9XZx0j6ZmIfqFWuXZrXagBn7sLh_KiRSxdmTg&oe=63839F26&_nc_sid=30a2ef'
const img5 = 'https://instagram.fssz10-1.fna.fbcdn.net/v/t51.2885-15/295790755_422215396611654_2356047372550154920_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fssz10-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=l_eEUW5HXJYAX8E1YNw&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg5MDI0OTIyNzI4MjE2MzczOA%3D%3D.2-ccb7-5&oh=00_AfDAtXck_7YnAh5fPit_Sxxb3nfSTYKj65U0J7QUW4uNgw&oe=63832A76&_nc_sid=30a2ef'
const img6 = 'https://instagram.fssz10-1.fna.fbcdn.net/v/t51.2885-15/256879978_425460222542243_7495883539714096864_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fssz10-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=v0qCVEZqeFwAX9lC-a5&tn=SiJpDsZoocZbUeyu&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjcwODM3NTA1NDc0NjI5NzY0Ng%3D%3D.2-ccb7-5&oh=00_AfCCB8nUYynS8F2KJhx7H43dwuyPEHVatEgV-8VGsfnLzw&oe=63829B04&_nc_sid=30a2ef'

function Instagram() {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'>@Captur</p>
        <div className='grid justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
          <InstagramImg UrlLink={img1} />
          <InstagramImg UrlLink={img2} />
          <InstagramImg UrlLink={img3} />
          <InstagramImg UrlLink={img4} />
          <InstagramImg UrlLink={img5} />
          <InstagramImg UrlLink={img6} />
        </div>
    </div>
  )
}

export default Instagram