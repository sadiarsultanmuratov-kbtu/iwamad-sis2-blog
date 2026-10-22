import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import RequireSignIn from './components/RequireSignIn'
import HomePage from './pages/HomePage'
import PostsPage from './pages/PostsPage'
import PostPage from './pages/PostPage'
import ContactPage from './pages/ContactPage'
import SignInPage from './pages/SignInPage'
import DraftsPage from './pages/DraftsPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="posts/:id" element={<PostPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="signin" element={<SignInPage />} />

        {/* Protected: only a signed-in reader gets past RequireSignIn */}
        <Route element={<RequireSignIn />}>
          <Route path="drafts" element={<DraftsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
