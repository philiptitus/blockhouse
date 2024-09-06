// import theme style scss file
import Link from 'next/link';
import 'styles/theme.scss';

export const metadata = {
    title: 'BlockHouse',
    description: '.',
    keywords: ''
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='bg-light'>
                {children}


            </body>
        </html>
    )
}
