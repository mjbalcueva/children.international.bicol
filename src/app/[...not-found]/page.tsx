import Image from 'next/image'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Image src={'/http/404.page_not_found.svg'} alt="404 Page Not Found" width={500} height={500} />
    </div>
  )
}
