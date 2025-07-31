import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import MainLayout from './layout/mainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SectionOne from './routes/section-1'
import SectionTwo from './routes/section-2'
import SectionThree from './routes/section-3'
import HomeSection from './routes/homeSection'
function MainApp() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
export default function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <MainLayout />, children: [
        { path: '/sectionOne', element: <SectionOne /> },
        {index:true, element: <HomeSection />}
    ]},
  ])
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}
