export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  repoLink: string;
}

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js 14, featuring a blog system powered by MDX, smooth animations, and a clean, professional design. The site showcases my projects, skills, and provides an integrated contact form for potential clients and collaborators.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MDX"],
    imageUrl: "/images/projects/portfolio.jpg",
    repoLink: "https://github.com/cmobley001/mobley-portfolio"
  },
  {
    slug: "task-management-app",
    title: "Task Management Application",
    description: "A full-stack task management application with real-time updates, user authentication, and collaborative features. Users can create projects, assign tasks, set deadlines, and track progress through an intuitive dashboard. The application includes drag-and-drop functionality for task organization and supports team collaboration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    imageUrl: "/images/projects/task-app.jpg",
    repoLink: "https://github.com/cmobley001/task-manager"
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution featuring product catalog management, shopping cart functionality, secure payment processing with Stripe integration, and an admin dashboard for inventory management. The platform includes search and filter capabilities, user reviews, order tracking, and responsive design for mobile shopping.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Tailwind CSS"],
    imageUrl: "/images/projects/ecommerce.jpg",
    repoLink: "https://github.com/cmobley001/ecommerce-platform"
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description: "An interactive weather dashboard that provides real-time weather data, forecasts, and climate information for locations worldwide. Features include geolocation support, favorite locations, weather alerts, interactive maps, and historical data visualization with charts and graphs.",
    technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "CSS Modules"],
    imageUrl: "/images/projects/weather-dashboard.jpg",
    repoLink: "https://github.com/cmobley001/weather-dashboard"
  }
];
