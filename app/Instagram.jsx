import React from 'react'
import Image from 'next/image';
import {FaInstagram} from 'react-icons/fa'
import InstagramImg from './InstagramImg';

const img1 = 'https://cdn.discordapp.com/attachments/457992163670753301/1049105938415624283/294788151_1162692547913197_8828684326019891537_n.png'
const img2 = 'https://cdn.discordapp.com/attachments/457992163670753301/1049106146834784266/281545593_168611028870980_5646192899222654617_n.png'
const img3 = 'https://cdn.discordapp.com/attachments/457992163670753301/1049105542838231111/298195908_434890431903754_7657289592701785783_n.png'
const img4 = 'https://cdn.discordapp.com/attachments/457992163670753301/1049106512271904860/272014572_461131898950077_6448812647762449551_n.png'
const img5 = 'https://cdn.discordapp.com/attachments/457992163670753301/1049106777536471142/295790755_422215396611654_2356047372550154920_n.png'
const img6 = 'https://cdn.discordapp.com/attachments/457992163670753301/1049106968159195146/298316890_1374699223024579_6612883316293942692_n.png'

function Instagram() {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'>@Jezar.mx</p>
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