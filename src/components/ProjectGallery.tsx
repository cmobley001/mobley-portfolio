export default function ProjectGallery() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      image: '/placeholder.jpg',
      desc: 'Description here',
      tech: ['React', 'Tailwind'],
    },
    {
      id: 2,
      title: 'Project Two',
      image: '/placeholder.jpg',
      desc: 'Another amazing project description',
      tech: ['Next.js', 'TypeScript'],
    },
    {
      id: 3,
      title: 'Project Three',
      image: '/placeholder.jpg',
      desc: 'Yet another great project',
      tech: ['Node.js', 'Express'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id}>
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img src={project.image} alt={project.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{project.title}</h2>
                  <p>{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="badge badge-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        const modal = document.getElementById(
                          'my_modal_' + project.id,
                        ) as HTMLDialogElement;
                        modal?.showModal();
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              <dialog id={'my_modal_' + project.id} className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg mb-4">{project.title}</h3>
                  <figure className="mb-4">
                    <img src={project.image} alt={project.title} className="rounded-lg" />
                  </figure>
                  <p className="mb-4">{project.desc}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="badge badge-primary badge-lg">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
