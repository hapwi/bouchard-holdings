import Header from "@/components/Header";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-4">
          Bouchard Holdings LLC is a premier property management company
          specializing in luxury apartments in Southern Maine. Our commitment to
          excellence and attention to detail sets us apart in the real estate
          industry.
        </p>
        <p className="text-lg mb-4">
          With years of experience and a deep understanding of the local market,
          we strive to provide our residents with unparalleled living
          experiences in some of the most desirable locations in Southern Maine.
        </p>
        {/* Add more content as needed */}
      </main>
      {/* Footer component can be added here */}
    </div>
  );
}
