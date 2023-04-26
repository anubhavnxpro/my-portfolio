import AppBanner from '@/components/shared/AppBanner'
import PagesMetaHead from '@/components/shared/PagesMetaHead'
import Link from 'next/link'

export default function Home() {
  return (
      <div className='container mx-auto'>
        <PagesMetaHead title="Home" />
        <AppBanner />
      </div>
  )
}
