"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { universities } from "../page";

const UniversityDetailPage = () => {
  const params = useParams();
  const slug = params.slug.replace(/-/g, ' ');
  const university = universities.find(uni => uni.name.toLowerCase() === slug.toLowerCase());

  if (!university) {
    return (
      <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">University Not Found</h1>
          <p className="text-gray-600 mb-8">The university you're looking for doesn't exist.</p>
          <Link
            href="/university"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Universities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{university.name}</h1>
        <img
          src={university.image}
          alt={`Image of ${university.name}`}
          className="w-full h-64 object-cover mb-8 rounded-lg"
        />
        <p className="text-gray-600 text-lg mb-4">{university.description}</p>
        <p className="text-sm text-gray-500 mb-4">
          Located in {university.country} - {university.type} University
        </p>
      </div>
    </div>
  );
};

export default UniversityDetailPage;

