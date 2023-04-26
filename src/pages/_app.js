import DefaultLayout from '@/components/layout/DefaultLayout'
import UseScrollToTop from '@/hooks/UseScrollToTop'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <div className='bg-secondary-light dark:bg-primary-dark transition duration-300'>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  )
}
