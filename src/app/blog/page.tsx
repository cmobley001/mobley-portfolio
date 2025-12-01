import Link from 'next/link';

export default function BlogIndex() {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold mb-10">My Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Post 1 Card */}
        <Link
          href="/blog/my-first-post"
          className="card bg-base-100 shadow-xl hover:scale-105 transition-transform"
        >
          <div className="card-body">
            <h2 className="card-title">Chris Mobley, Web Developer</h2>
            <p>Learn about my experience, academics, and personal interests.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
        </Link>

        {/* You can copy/paste this block for future posts */}
      </div>
    </div>
  );
}
