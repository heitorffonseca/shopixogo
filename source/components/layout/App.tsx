import React, { ReactNode} from "react";
import Head from "next/head";
import {Roboto} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";
import {Navbar} from "@/source/components/ui/nav/Navbar";

const font: NextFont = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['normal', 'italic']
})

type Props = {
    children: ReactNode
}

const App: React.FC<Props> = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>ShopixoGo</title>
                <meta name="description" content="Marketplace of PLRs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={font.className}>
                <div className='bg-gray min-vh-100 min-vw-100'>
                    <Navbar />

                    {children}
                </div>
            </main>
        </>
    );
}

export default App;