import Header from "@/components/Header";
import Image from "next/image";

export default function Rentals() {
  const rentals = [
    {
      id: 1,
      name: "Luxury Suite",
      description: "Spacious 2-bedroom apartment with modern amenities",
      image: "/path/to/luxury-suite-image.jpg",
    },
    {
      id: 2,
      name: "Deluxe Studio",
      description: "Cozy studio apartment with a stunning view",
      image: "/path/to/deluxe-studio-image.jpg",
    },
    {
      id: 3,
      name: "Executive Penthouse",
      description: "Luxurious 3-bedroom penthouse with panoramic views",
      image: "/path/to/executive-penthouse-image.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Available Rentals</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rentals.map((rental) => (
            <div
              key={rental.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={rental.image}
                  alt={rental.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{rental.name}</h2>
                <p className="text-gray-600">{rental.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      {/* Footer component can be added here */}
    </div>
  );
}
