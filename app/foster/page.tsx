import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { PawPrint } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'

export default function FosterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Foster a Dog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Buddy', breed: 'Mixed', age: 1, image: '/placeholder.svg?height=200&width=200' },
              { name: 'Daisy', breed: 'Dachshund', age: 3, image: '/placeholder.svg?height=200&width=200' },
              { name: 'Rocky', breed: 'Boxer', age: 2, image: '/placeholder.svg?height=200&width=200' },
            ].map((dog) => (
              <Card key={dog.name}>
                <CardHeader>
                  <CardTitle>{dog.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    alt={`${dog.name} the ${dog.breed}`}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                    height="200"
                    src={dog.image}
                    style={{
                      aspectRatio: '200/200',
                      objectFit: 'cover',
                    }}
                    width="200"
                  />
                  <p>{dog.breed}</p>
                  <p>{dog.age} years old</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <PawPrint className="mr-2 h-4 w-4" /> Foster Me
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Why Foster?</h2>
            <p className="mb-6">Fostering saves lives and helps dogs find their forever homes. It&apos;s a rewarding experience that makes a real difference.</p>
            <Button size="lg">
              Apply to Foster
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}