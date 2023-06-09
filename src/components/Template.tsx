import { ReactNode } from "react"
import { Header } from "./Header"
import { Nunito_Sans } from 'next/font/google'
import { CountriesContextProvider } from "@/utils/context/countriesContext"

const font = Nunito_Sans({ subsets: ['latin'] })

type TemplateProps = {
    children: ReactNode,
}

const Template = ({ children }: TemplateProps) => {
    return (
        <body className={`${font.className} min-h-screen dark:text-white text-black dark:bg-dark-mode-background bg-light-mode-background overflow-x-auto`}>
            <Header></Header>
            <div className="dark:bg-dark-mode-background bg-light-mode-background">
                <CountriesContextProvider>
                    {children}
                </CountriesContextProvider>
            </div>
        </body>
    )
}

export { Template }