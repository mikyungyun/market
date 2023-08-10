import type { NextPage } from 'next';

const Upload: NextPage = () => {
  return (
    <div className="px-5 py-16">
      <div>
        <div>
          <label className="w-full h-48 text-gray-500 hover:text-orange-500 hover:border-orange-500 flex items-center justify-center py-6 rounded-md border-2 border-dashed border-gray-300 cursor-pointer">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="file" className="hidden" />
          </label>
        </div>
      </div>
      <div className="my-5">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Price
        </label>
        <div className="relative rounded-md shadow-sm flex items-center justify-center">
          <div className="absolute left-0 pl-3 flex items-center justify-center">
            <span className="text-md tex-gray-500">$</span>
          </div>
          <input
            id="price"
            className="appearance-none w-full py-2 pr-3 pl-7 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 pr-3 flex items-center">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div className="my-5">
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          className="w-full mt-1 shadow-sm rounded-md border border-gray-300 focus:ring-orange-500 focus:border-orange-500"
          rows={4}
        />
      </div>
      <button className="w-full bg-orange-500 text-white py-2 px-3 mt-8 border-transparent rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Upload product
      </button>
    </div>
  );
};

export default Upload;
