
export default function homeLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section className="">
      {children}
    </section>
  )
}