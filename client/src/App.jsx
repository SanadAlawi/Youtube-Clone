import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./pages/Layout"
import { Home, Register, Video } from "./pages"
import ErrorPage from "./pages/ErrorPage"
import { Suspense } from "react"
import Loading from "./components/Loading"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children:
        [
          {
            path: '/',
            element:
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
          },
          {
            path: 'register',
            element:
              <Suspense fallback={<Loading />}>
                <Register />
              </Suspense>
          },
          {
            path: 'video/:id',
            element:
              <Suspense fallback={<Loading />}>
                <Video />
              </Suspense>
          }
        ]
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ])



  return (
    <RouterProvider router={router} />
  )
}

export default App