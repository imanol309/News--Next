import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Home News</title>
        <meta name="description" content="Home News" />
        <link rel="icon" href="/newsIcon.ico" />
      </Head>

      <main>
        <div>Hola mundo</div>
      </main>
    </div>
  );
}
