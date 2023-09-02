
export default function homeLayout({
  children, // will be a page or nested layout
}) {
  return (
    <nav>
      {children}
    </nav>
  )
}