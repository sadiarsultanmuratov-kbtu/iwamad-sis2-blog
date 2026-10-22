const drafts = [
  'Week 7: one app, seven layers',
  'My midterm: how I defended my blog',
  'First steps in mobile development',
]

function DraftsPage() {
  return (
    <article className="card">
      <h1>My drafts</h1>
      <p>Posts I am still writing. Only a signed-in reader can see this page.</p>
      <ul>
        {drafts.map((draft) => (
          <li key={draft}>{draft}</li>
        ))}
      </ul>
    </article>
  )
}

export default DraftsPage
