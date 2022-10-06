import Head from "next/head"
import { FC, ReactNode } from "react"
import {Home} from "./Home"


type LayoutProps = {
    title: string
    children: ReactNode
}

export const Layout = (props: LayoutProps) => {
    const {title, children} = props
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Home />
            <main className="flex flex1 justify-center items-center w-screen flex-col">
                {children}
            </main>
            <footer className="w-full h-6 flex justify-center items-center text-gray-500 text-sm">
                @simple-bank 2022
            </footer>
        </div>
    )
}
