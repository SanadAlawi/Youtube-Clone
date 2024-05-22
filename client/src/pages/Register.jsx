
const Register = () => {
  return (
    <div className="flex justify-center items-center h-full">

      <div className="flex bg-white flex-col items-center gap-4 w-[300px] border rounded shadow-md p-4">
        <h1 className="font-bold">Sign in</h1>
        <p>to continue to Youtube</p>
        {/* SIGN IN */}
        <div className="flex flex-col gap-2 w-full">
          <input type="text" className="outline-none border border-gray-300 px-2 py-1 rounded-md" placeholder="username" />
          <input type="text" className="outline-none border border-gray-300 px-2 py-1 rounded-md" placeholder="password" />
          <button className="text-white self-center px-2 py-1 bg-gray-600 font-bold rounded-md">Sgin in</button>
        </div>

        <p>or</p>

        {/* SIGN UP */}
        <div className="flex flex-col gap-2 w-full">
          <input type="text" className="outline-none border border-gray-300 px-2 py-1 rounded-md" placeholder="username" />
          <input type="email" className="outline-none border border-gray-300 px-2 py-1 rounded-md" placeholder="email" />
          <input type="password" className="outline-none border border-gray-300 px-2 py-1 rounded-md" placeholder="password" />
          <button className="text-white self-center px-2 py-1 bg-gray-600 font-bold rounded-md">Sgin up</button>
        </div>
      </div>
    </div>
  )
}

export default Register