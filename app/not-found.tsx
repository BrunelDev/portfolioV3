import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#151718] text-white">
      <h2 className="text-4xl font-bold mb-4">404 - Not Found</h2>
      <p className="text-gray-400 mb-8">Could not find requested resource</p>
      <Link 
        href="/"
        className="px-6 py-2 bg-[#26292B] border border-[#2F3335] rounded-full hover:border-[#999FA4] transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}
