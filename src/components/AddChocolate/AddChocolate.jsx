

const AddChocolate = () => {

    const handleAddChocolate = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const country= form.country.value;
        const category=form.category.value;
        const newChocolate= {name,country, category}
        console.log(newChocolate)
    }
    return (
        <div>
             <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md bg-blue-300 shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Chocolate Management System
        </h1>
        <form onSubmit={handleAddChocolate}>
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"

              placeholder="Enter chocolate name"
              className="w-full rounded-lg shadow-lg focus:ring-indigo-500 focus:border-indigo-500 ps-2"
            />
          </div>

          {/* Country Input */}
          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"

              placeholder="Enter country of origin"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ps-2"
            />
          </div>

          {/* Category Input */}
          <div className="mb-6">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ps-2 "
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Milk Chocolate">Milk Chocolate</option>
              <option value="Dark Chocolate">Dark Chocolate</option>
              <option value="White Chocolate">White Chocolate</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Add Chocolate
          </button>
        </form>
      </div>
    </div>
        </div>
    );
};

export default AddChocolate;