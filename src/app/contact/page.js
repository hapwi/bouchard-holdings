import Header from "@/components/Header";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Contact Information</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg mb-4">
            <strong>Address:</strong> 123 Main Street, Portland, ME 04101
          </p>
          <p className="text-lg mb-4">
            <strong>Phone:</strong> (207) 555-1234
          </p>
          <p className="text-lg mb-4">
            <strong>Email:</strong> info@bouchardholdings.com
          </p>
          <p className="text-lg mb-4">
            <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
          </p>
        </div>
        {/* You can add a contact form here if desired */}
      </main>
      {/* Footer component can be added here */}
    </div>
  );
}
