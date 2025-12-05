'use client';

import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function ProjectGallery() {
  return (
    <section id="projects" className="py-20 px-4 bg-base-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <figure className="relative h-48 w-full">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title text-xl">{project.title}</h2>

                {/* Truncated description for the card */}
                <p className="line-clamp-3 text-sm text-base-content/70">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="badge badge-primary badge-outline text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="badge badge-ghost text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="card-actions justify-end mt-4">
                  <Link href={`/projects/${project.slug}`} className="btn btn-primary btn-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
