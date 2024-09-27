import Link from "next/link"
import { SiFacebook, SiX, SiInstagram } from '@icons-pack/react-simple-icons';

export function Footer() {
  return (  
<footer className="w-full py-6 border-t">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 PawGuardian. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Privacy
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="#">
                <SiFacebook className="h-4 w-4" />
              </Link>
              <Link href="#">
                <SiX className="h-4 w-4" />
              </Link>
              <Link href="#">
                <SiInstagram className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
  )
}
