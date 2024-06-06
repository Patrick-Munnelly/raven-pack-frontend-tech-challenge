import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './MainLayout.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import  ErrorPage  from './pages/ErrorPage.tsx'
import ListOfPosts from './pages/ListOfPosts.tsx'
import Post from './pages/Post.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools"


const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
})

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage/>,
        children: [
          { path:'/',
          element: <ListOfPosts />,
          errorElement: <ErrorPage/>,
          },
          { path:'/post/:id',
          element: <Post />,
          errorElement: <ErrorPage/>,
          }]
      },
    ]);

ReactDOM.createRoot(document.getElementById('root')!).render(

  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router}/>
  {/* <ReactQueryDevtools /> */}
</QueryClientProvider>
)
