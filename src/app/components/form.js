// Form.js
const Form = () => {
  return (
    <div
      className="flex items-center rounded
                        justify-center bg-gray-100"
    >
      <div
        className="bg-white p-6 rounded-lg
                            shadow-lg w-full max-w-lg"
      >
        <form className="space-y-4">
          <div>
            <label
              for="countries"
              className="block mb-2 text-sm
                                          font-medium text-gray-600"
            >
              Select an option
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <div>
            <label
              className="block mb-2 text-sm
                                          font-medium text-gray-600"
            >
              Search Term
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="e.g. chicken"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2  px-4 py-2 text-white
                                       bg-indigo-500 rounded-md
                                       hover:bg-indigo-600 focus:outline-none
                                       focus:bg-indigo-700"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
