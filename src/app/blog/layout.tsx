export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto p-10">
      {/* "prose" -> Turns on Tailwind Typography 
         "lg:prose-xl" -> Makes font size larger on desktop
         "dark:prose-invert" -> Auto-fixes colors for Dark Mode
      */}
      <article className="prose lg:prose-xl dark:prose-invert mx-auto">{children}</article>
    </div>
  );
}
