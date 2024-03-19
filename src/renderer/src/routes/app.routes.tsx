import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Categories, Items, Loans } from '@renderer/screens'

export function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Items />} />
        <Route path="/" element={<Navigate to="/items" />} />
        <Route path="/items" element={<Items />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/loans" element={<Loans />} />
      </Routes>
    </BrowserRouter>
  )
}
