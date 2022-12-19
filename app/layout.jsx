import './globals.css';
import { Raleway } from '@next/font/google';
import Navbar from './Navbar';

const raleway = Raleway({
	variable: '--font-raleway',
});

export default function RootLayout({ children }) {
	return (
		<html lang='en' className={raleway.variable}>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className='bg-white'>
				<Navbar className='nav' />
				{children}
			</body>
		</html>
	);
}
