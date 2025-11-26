import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 1. Force all images to be responsive Next.js images
    img: (props) => (
      <Image sizes="100vw" style={{ width: '100%', height: 'auto' }} {...(props as any)} />
    ),
    // 2. Return the other components untouched
    // (DaisyUI's "prose" class will handle styling them later)
    ...components,
  };
}
