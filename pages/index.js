import Head from 'next/head'
import ChatCard from '../components/ChatCard'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next/Tailwindcss App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ChatCard />
      </Layout>
    </div>
  )
}
