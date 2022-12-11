import { GithubLogo, LinkedinLogo } from 'phosphor-react'
export default function Footer() {
  return (
    <>
      <div className="absolute w-full bottom 0 bg-slate-300 w-full absolute flex flex-col justify-center items-center p-8">
        <div>
          <div className="flex gap-1 font-bold items-center justify-center text-[20px]">
            <LinkedinLogo size={24} />
            <a
              href="https://www.linkedin.com/in/machado001/"
              target="_blank"
              className="hover:bg-indigo-300 transition py-1 px-3"
            >
              G
            </a>
            <a
              href="https://www.linkedin.com/in/gustavsant/"
              target="_blank"
              className="hover:bg-indigo-300 transition py-1 px-3"
            >
              G
            </a>
            <a
              href="https://www.linkedin.com/in/heitorzin1/"
              target="_blank"
              className="hover:bg-indigo-300 transition py-1 px-3"
            >
              H
            </a>
          </div>
          <div>&copy; Gabriel, Gustavo & Heitor. {new Date().getFullYear()}</div>
        </div>
      </div>
    </>
  )
}
