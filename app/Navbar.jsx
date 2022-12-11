'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
	const [nav, setNav] = useState(false);
	const [color, setColor] = useState('transparent');
	const [textColor, setTextColor] = useState('white');

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 90) {
				setColor('#FFFFFF');
				setTextColor('#000000');
			} else {
				setColor('transparent');
				setTextColor('#FFFFFF');
			}
		};
		window.addEventListener('scroll', changeColor);
	}, []);

	return (
		<div
			style={{ backgroundColor: `${color}` }}
			className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
			<div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
				<Link style={{ color: `${textColor}` }} href='/'>
					<h1 className='font-bold text-4xl'>Captur</h1>
				</Link>
				<ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
					<li className='p-4'>
						<Link href='/'>Home</Link>
					</li>
					<li className='p-4'>
						<a href='/#gallery'>Gallery</a>
					</li>
					<li className='p-4'>
						<Link href='/work'>Work</Link>
					</li>
					<li className='p-4'>
						<Link href='/contact'>Contact</Link>
					</li>
				</ul>

				{/* Mobile Button*/}
				<div onClick={handleNav} className='sm:hidden block z-10'>
					{nav ? (
						<AiOutlineClose size={20} />
					) : (
						<AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
					)}
				</div>
				{/* Mobile Menu */}
				<div
					className={
						nav
							? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/95 text-center ease-in duration-300'
							: 'sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
					}>
					<ul>
						<li
							onClick={handleNav}
							className='p-4 text-4xl hover:text-gray-500'>
							<Link href='/'>Home</Link>
						</li>
						<li
							onClick={handleNav}
							className='p-4 text-4xl hover:text-gray-500'>
							<a href='/#gallery'>Gallery</a>
						</li>
						<li
							onClick={handleNav}
							className='p-4 text-4xl hover:text-gray-500'>
							<Link href='/work'>Work</Link>
						</li>
						<li
							onClick={handleNav}
							className='p-4 text-4xl hover:text-gray-500'>
							<Link href='/contact'>Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
