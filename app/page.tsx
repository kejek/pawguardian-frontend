import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Heart } from "lucide-react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function DogAdoptionPlatform() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Find Your Perfect Furry Friend
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Adopt or foster a dog today and change a life forever.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Search for a dog..." type="text" />
                  <Button type="submit" variant="secondary">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Featured Dogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Max", breed: "Labrador", age: 3, image: "/placeholder.svg?height=200&width=200" },
                { name: "Bella", breed: "German Shepherd", age: 2, image: "/placeholder.svg?height=200&width=200" },
                { name: "Charlie", breed: "Golden Retriever", age: 4, image: "/placeholder.svg?height=200&width=200" },
              ].map((dog) => (
                <Card key={dog.name}>
                  <CardHeader>
                    <CardTitle>{dog.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt={`${dog.name} the ${dog.breed}`}
                      className="w-full h-48 object-cover mb-4 rounded-md"
                      height="200"
                      src={dog.image}
                      style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
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
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Become a Foster Parent</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Open your heart and home to a dog in need. Fostering saves lives and helps dogs find their forever homes.
                </p>
              </div>
              <Button className="bg-primary text-primary-foreground" size="lg">
                Start Fostering
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
