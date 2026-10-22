import Card from '../components/ui/Card'

// Protected page: App.tsx puts this route inside <RequireSignIn />
const drafts: string[] = [
  'Week 6: forms that tell you what is wrong',
  'Week 7: one app, seven layers',
  'What I want to build with React Native',
]

function DraftsPage() {
  return (
    <Card>
      <h1>My drafts</h1>
      <p>Posts I am still writing. Only a signed-in reader can see this page.</p>
      <ul>
        {drafts.map((draft) => (
          <li key={draft}>{draft}</li>
        ))}
      </ul>
    </Card>
  )
}

export default DraftsPage
