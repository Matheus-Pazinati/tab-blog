import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout.tsx'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post">
          <Route path=":postSlug" element={<Post />} />
        </Route>
      </Route>
    </Routes>
  )
}
