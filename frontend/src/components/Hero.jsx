import { Link } from 'react-router-dom'
import HeroIllustration from './HeroIllustration.jsx'

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gc-navy sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            Smart IT solutions for unprecedented results
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-gc-navy/65">
            GrowwCode delivers end-to-end technology services — from websites and mobile apps
            to AI/ML projects, intelligent agents, and cloud infrastructure. We build what
            your business needs to grow.
          </p>
          <Link
            to="/#agency"
            className="mt-8 inline-block rounded-md bg-gc-blue px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-gc-blue/30 transition-colors hover:bg-gc-blue/90"
          >
            More about our agency
          </Link>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}
