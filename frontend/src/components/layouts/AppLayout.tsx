import { ReactNode } from "react"
import { Link } from "react-router-dom"

type AppLayoutProps = {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-svh bg-slate-100">
      <header className="p-8 bg-white">
        <Link to="/" className="inline-flex items-center transition-opacity hover:opacity-70">
          <img src="https://www.telestream.net/images/telestream-logo.png" alt="Telestream" className="max-w-40" />
          <div className="pl-5 ml-5 text-xl font-bold border-l border-slate-300">Video Player</div>
        </Link>
      </header>

      <main className="flex-1 w-full mx-auto my-10 max-w-screen-2xl">{children}</main>

      <footer className="p-10 text-xs text-center border-t text-slate-600 border-slate-200">
        Telestream Front-End Developer Take-Home Project · Created by{" "}
        <a href="https://pwojnicz.pl/" className="text-slate-900 hover:underline">
          Paweł Wojnicz
        </a>
      </footer>
    </div>
  )
}
