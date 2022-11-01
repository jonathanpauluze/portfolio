import { Hero } from '@/components/Hero'
import { RepositoryCard } from '@/components/RepositoryCard'
import { ArrowRight } from 'react-feather'
import { GH_REPOSITORIES_URL, REPOSITORIES } from './constants'

export default function Home() {
  return (
    <>
      <Hero />

      <div className="container mx-auto mt-32">
        <h2 className="text-4xl font-bold">Recent projects</h2>

        <div className="mt-6">
          <div className="flex flex-col columns-3 md:flex-row gap-8">
            {REPOSITORIES.map((repository) => (
              <RepositoryCard
                key={repository.id}
                title={repository.title}
                description={repository.description}
                githubURL={repository.gh_url}
                deployURL={repository.deploy_url}
              />
            ))}
          </div>

          <a
            href={GH_REPOSITORIES_URL}
            rel="noopener noreferrer"
            target="_blank"
            className="group mt-8 flex items-center gap-2 transition-transform"
          >
            See more
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform "
            />
          </a>
        </div>
      </div>
    </>
  )
}
