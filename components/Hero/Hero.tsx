import Image from 'next/image'
import { Download } from 'react-feather'

export function Hero() {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-16">
      <Image
        className="rounded-full w-40 h-40 md:w-[250px] md:h-[250px]"
        src="https://github.com/jonathanpauluze.png"
        alt=""
        width={250}
        height={250}
        quality={100}
      />

      <div className="flex items-center md:items-start flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl md:text-5xl text-center md:text-left font-bold">
            <span aria-hidden="true">&lt;</span>
            Jonathan Pauluze
            <span aria-hidden="true"> /&gt;</span>
          </h1>
          <span className="flex text-2xl md:text-3xl text-center md:text-left font-normal max-w-md">
            Front-End Software Engineer based in Brazil
          </span>
        </div>

        <a
          href="/jonathanpauluze_resume.pdf"
          download
          className="flex items-center px-3 gap-2 h-12 bg-stone-100 hover:bg-stone-300 transition-colors text-black font-semibold rounded-lg"
        >
          <Download />
          Download resume
        </a>
      </div>
    </div>
  )
}
