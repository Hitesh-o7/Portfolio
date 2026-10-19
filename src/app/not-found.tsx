import Header from "@/components/Header/Header";
import TransitionLink from "@/components/Transition/TransitionLink";
import { SmoothCursor } from "@/components/ui/Cursor/smooth-cursor";

// Kept as a light server component on purpose: the root not-found boundary is serialized into every
// route's payload, so importing the glitchy /error page here added its ~25KB chunk to every page.
// Only components every page already loads (Header, cursor, TransitionLink) are used here.
export default function NotFound() {
  return (
    <main data-scroll-container className="min-h-screen bg-white text-black">
      <SmoothCursor />
      <Header />
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="text-center">
          <p className="text-8xl md:text-9xl font-bold font-mono mb-8">404</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono">Page not found</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TransitionLink
              href="/"
              className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300 font-medium"
            >
              Go Home
            </TransitionLink>
            <TransitionLink
              href="/work"
              className="px-8 py-3 border border-black text-black rounded-md hover:bg-black hover:text-white transition-colors duration-300 font-medium"
            >
              See my work
            </TransitionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
