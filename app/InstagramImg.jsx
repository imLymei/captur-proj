'use client';

import React from 'react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

function Teste({ UrlLink }) {
	const instagram = () => {
		window.open('https://www.instagram.com/Jezar.mx/', '_blank').focus();
	};

	return (
		<div>
			<div className='relative w-[175px] h-[175px]' onClick={instagram}>
				<Image src={UrlLink} fill={true} alt='/' className='object-cover' />
				{/* Overlay */}
				<div className='flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
					<p className='text-gray-300 hidden group-hover:block'>
						<FaInstagram size={30} className='z-10' />
					</p>
				</div>
			</div>
		</div>
	);
}

export default Teste;
