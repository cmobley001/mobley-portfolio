import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/data/projects';
import Link from 'next/link';

// CHANGE 1: Define params as a Promise
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// CHANGE 2: Add 'async' to the function component
export default async function ProjectPage({ params }: PageProps) {
  // CHANGE 3: Await the params to get the slug
  const { slug } = await params;

  // Now find the project using the awaited slug
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-base-300">
      {' '}
      {/* Added bg-base-300 for contrast if needed */}
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/#projects"
            className="btn btn-ghost text-gray-300 hover:text-white gap-2 pl-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </Link>
        </div>
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                // OPTIONAL: Switched to a darker blue background with light text for better contrast
                className="px-3 py-1 bg-blue-900 text-blue-100 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-lg border border-gray-700">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none mb-8 prose-invert">
          {/* FIXED: Changed text-gray-700 to text-gray-300 (light gray) */}
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </div>

        <div className="flex gap-4">
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            // FIXED: Added a white border so the button stands out more
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white border border-gray-600 font-medium rounded-lg hover:bg-gray-700 transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
