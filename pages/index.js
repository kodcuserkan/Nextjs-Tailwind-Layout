import Head from 'next/head'
import ChatCard from '../components/ChatCard'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next/Tailwindcss App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <ChatCard />
       
      </main>

      <footer className="">
       
      </footer>
    </div>
  )
}
