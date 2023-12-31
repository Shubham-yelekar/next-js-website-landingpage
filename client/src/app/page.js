import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="">
      <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      </div>
      <h1>Main Page</h1>
    </main>
  )
}
