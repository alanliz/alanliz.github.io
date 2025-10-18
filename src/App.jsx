import { BrowserRouter, Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import { useState } from "react"
import { Home } from "./pages.jsx/Home"
import { NotFound } from "./pages.jsx/NotFound"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
