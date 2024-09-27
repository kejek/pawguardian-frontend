import Link from "next/link"
import { PawPrint } from "lucide-react"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
      <Link className="flex items-center justify-center" href="/">
        <PawPrint className="h-6 w-6 mr-2" />
        <span className="font-bold">PawGuardian.io</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/adopt">
          Adopt
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/foster">
          Foster
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
          Contact
        </Link>
      </nav>
    </header>
  )
}