export default async function Post ({ children, params }) {
  const { id } = params
  return (
    <article>
      {children}
      {id}
    </article>
  )
}