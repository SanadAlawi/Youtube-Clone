import ErrorIcon from '@mui/icons-material/Error';
import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center ">
      <div className='flex items-center gap-4'>
        <ErrorIcon style={{fontSize: '5rem', color: 'red'}} />
        <h1 className='text-red-500 uppercase text-3xl'>Page not found</h1>
      </div>
      <p className='uppercase'>We looked everywhere and not found your requested page!!!</p>
      <Link to='/' className='border border-blue-400 px-2 py-1 rounded text-blue-400 uppercase'>Go home</Link>
    </div>
  )
}

export default ErrorPage