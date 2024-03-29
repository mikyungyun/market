import Layout from '@/components/layout';
import type { NextPage } from 'next';

const Stream: NextPage = () => {
  return (
    <Layout hasTabBar title="라이브">
      <div className="py-10 space-y-4 divide-y-2">
        {new Array(10).fill(1).map((_, i) => (
          <div key={i} className="pt-4 px-5">
            <div className="w-full aspect-video rounded-md shadow-sm bg-slate-300" />
            <h3 className="text-sm text-gray-700 mt-2">iphone 14 pro</h3>
          </div>
        ))}
        <button className="fixed hover:bg-orange-500 right-4 bottom-10 bg-orange-400 rounded-full p-4 text-white shadow-xl cursor-pointer transition-colors border-transparent">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Stream;
