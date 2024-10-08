import Header from "@/components/Header";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Coming Soon</h1>
        <p className="text-lg mb-4">
          We&apos;re excited to announce our upcoming projects and new apartment
          complexes. Stay tuned for more information on these exciting
          developments:
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>
            Oceanfront Residences - Luxury apartments with stunning ocean views
          </li>
          <li>
            Downtown Lofts - Modern loft-style apartments in the heart of the
            city
          </li>
          <li>
            Green Living Complex - Eco-friendly apartments with state-of-the-art
            sustainability features
          </li>
        </ul>
        <p className="text-lg">
          Sign up for our newsletter to receive updates on these upcoming
          properties and be the first to know when they become available.
        </p>
        {/* You can add a newsletter signup form here */}
      </main>
      {/* Footer component can be added here */}
    </div>
  );
}
