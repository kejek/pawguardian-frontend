import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">About PawGuardian</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                PawGuardian is dedicated to finding loving homes for dogs in need. Our mission is to connect wonderful
                pets with caring families and individuals.
              </p>
              <p className="mb-4">
                Founded in 2024, we&apos;ve successfully placed over 1,000 dogs in forever homes and provided fostering
                opportunities for countless others.
              </p>
              <p className="mb-6">
                We believe that every dog deserves a chance at happiness, and we&apos;re committed to making that happen one
                adoption at a time.
              </p>
              <Button>
                Join Our Mission
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Happy dogs and owners"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
	  <Footer />
    </div>
  )
}