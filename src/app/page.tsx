
export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center py-6">
        <h1 className="text-3xl font-bold text-center">
          Welcome to my bonus
        </h1>
        <p className="text-lg text-center py-4">This bonus shows a form component that uses different React Hooks; State and Context Hooks that alterate header and page visualizacion.</p>
      </div>
      <div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              User Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your user name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Enter your address"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="
                bg-black
                text-white
                hover:bg-white
                hover:text-black
                hover:ring-2
                hover:ring-black
                font-bold
                py-2 px-4 
                rounded-2xl"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
