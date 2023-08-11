import type { NextPage } from 'next';

const Write: NextPage = () => {
  return (
    <form className="px-5 py-10">
      <textarea
        className="w-full mt-1 shadow-sm rounded-md border-gray-300 focus:ring-orange-500 focus:border-orange-500 "
        rows={4}
        placeholder="Ask a question!"
      />
      <button className="text-sm font-medium text-white w-full mt-2 py-2 px-4 border border-transparent rounded-md bg-orange-500 hover:bg-orange-600 shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
        Submit
      </button>
    </form>
  );
};

export default Write;
