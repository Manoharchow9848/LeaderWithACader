import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side */}
      <div className="flex-1 dark:bg-black flex items-center justify-center p-8 lg:p-16 bg-gray-100">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold mb-4">Find Your MLA</h1>
          <p className="text-lg mb-6">
            Discover and connect with your local Member of the Legislative
            Assembly. Use our search tool to find detailed information about
            your MLA, including their contact details, services, and more.
          </p>
          <a
            href="/locator"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Find Your MLA
          </a>
        </div>
      </div>

      {/* Center - Image Section */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
        <img
          src="data:image/jpeg;base64,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" // Replace with your base64 image data or URL
          alt="Base64 Image"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}