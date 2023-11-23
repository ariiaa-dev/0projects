import './globals.css'
import { Nunito } from 'next/font/google'
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'

const nunito = Nunito ({ 
  subsets: ['latin'],
  weight: [ '200' , '300','400','500','600','700','800','900'],
  variable: '--font-nunito',
})

export const metadata = {
  title: 'Techwind - Next.js Multipurpose Landing & Admin Dashboard Template',
  description: 'Techwind - Next.js Multipurpose Landing & Admin Dashboard Template',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light"  dir="ltr">
      <body className={`${nunito.variable} font-nunito text-base text-black dark:text-white dark:bg-slate-900`}>{children}</body>
    </html>
  )
}
