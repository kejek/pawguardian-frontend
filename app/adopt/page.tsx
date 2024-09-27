/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'

export default function AdoptPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Adopt a Dog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Max', breed: 'Labrador', age: 3, image: '/placeholder.svg?height=200&width=200' },
              { name: 'Bella', breed: 'German Shepherd', age: 2, image: '/placeholder.svg?height=200&width=200' },
              { name: 'Charlie', breed: 'Golden Retriever', age: 4, image: '/placeholder.svg?height=200&width=200' },
              { name: 'Lucy', breed: 'Beagle', age: 1, image: '/placeholder.svg?height=200&width=200' },
              { name: 'Cooper', breed: 'Poodle', age: 5, image: '/placeholder.svg?height=200&width=200' },
              { name: 'Luna', breed: 'Husky', age: 2, image: '/placeholder.svg?height=200&width=200' },
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
                    <Heart className="mr-2 h-4 w-4" /> Adopt Me
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
	  <Footer />
    </div>
  )
}