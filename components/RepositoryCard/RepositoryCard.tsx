import { GitHub, ExternalLink } from 'react-feather'
import { RepositoryCardProps } from '.'

export function RepositoryCard(props: RepositoryCardProps) {
  return (
    <div className="flex flex-col justify-between gap-6 px-6 py-8 border-2 border-solid border-stone-300 bg-neutral-900 rounded-lg w-full">
      <div className="flex flex-col gap-2 overflow-hidden">
        <strong className="text-2xl">{props.title}</strong>
        <span className="text-base line-clamp-1" title={props.description}>
          {props.description}
        </span>
      </div>

      <footer className="flex flex-col gap-4">
        <a
          href={props.githubURL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center px-2 py-3 items-center gap-2 border-2 border-solid rounded-lg text-sm border-stone-300 hover:border-stone-100 hover:bg-stone-100 hover:text-neutral-900 transition-colors"
        >
          <GitHub size={16} />
          See on GitHub
        </a>
        <a
          href={props.deployURL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center px-2 py-3 items-center gap-2 border-2 border-solid rounded-lg text-sm border-stone-300 hover:border-stone-100 hover:bg-stone-100 hover:text-neutral-900 transition-colors"
        >
          <ExternalLink size={16} />
          Access project
        </a>
      </footer>
    </div>
  )
}
