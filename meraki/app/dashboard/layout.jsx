import SessionProvider from '../SessionProvider';

export default async function RootLayout({children}) {
  return (
    <>
      <SessionProvider>
        {children}
      </SessionProvider>
    </>
  )
}