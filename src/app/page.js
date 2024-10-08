import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh]">
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Luxury apartment building"
            fill
            priority
            style={{ objectFit: "cover" }}
            className="brightness-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Welcome to Luxury Living in Southern Maine
              </h2>
              <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
                Experience comfort and style in our modern apartment complex
              </p>
              <Button
                size="lg"
                className="bg-white text-gray-800 hover:bg-gray-200 transition duration-300"
              >
                Schedule a Tour
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">
              About Bouchard Holdings LLC
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 relative h-[300px] sm:h-[400px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Apartment interior"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Bouchard Holdings LLC is a premier apartment complex located
                  in the heart of Southern Maine. We offer modern living spaces
                  with top-notch amenities and a commitment to resident
                  satisfaction. Our goal is to provide a luxurious and
                  comfortable living experience for all our residents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Apartments Section */}
        <section id="apartments" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">
              Our Apartments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Apartment cards */}
              <ApartmentCard
                imageSrc="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                title="Luxury Suite"
                description="Spacious 2-bedroom apartment with modern amenities"
              />
              <ApartmentCard
                imageSrc="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                title="Deluxe Studio"
                description="Cozy studio apartment with a stunning view"
              />
              <ApartmentCard
                imageSrc="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                title="Executive Penthouse"
                description="Luxurious 3-bedroom penthouse with panoramic views"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Contact Us</h2>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Interested in learning more? Get in touch with us today!
            </p>
            <Button
              size="lg"
              className="bg-white text-gray-800 hover:bg-gray-200 transition duration-300"
            >
              Contact Us
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Bouchard Holdings LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ApartmentCard({ imageSrc, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
      <div className="relative h-48 sm:h-64">
        <Image src={imageSrc} alt={title} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}