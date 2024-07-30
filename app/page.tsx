export const dynamic = 'force-dynamic'

const getData = () => {
  const version = process.env.APP_VERSION

  return version
}

export default function Home() {
  const version = getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <strong>{process.env.NEXT_PUBLIC_APP_NAME} v{version} running in {process.env.NEXT_PUBLIC_APP_ENV} environment</strong>
    </main>
  );
}
