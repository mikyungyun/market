import type { NextPage } from 'next';

const ChatDetail: NextPage = () => {
  return (
    <div className="pt-10 pb-16 px-5 space-y-4">
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-300" />
        <div className="text-sm text-gray-700 w-1/2 p-2 border border-gray-400 rounded-md">
          <p>Hi how much are you selling them for?</p>
        </div>
      </div>
      <div className="flex items-start flex-row-reverse space-x-2 space-x-reverse">
        <div className="w-8 h-8 rounded-full bg-slate-300" />
        <div className="text-sm text-gray-700 w-1/2 p-2 border border-gray-400 rounded-md">
          <p>I want ￦20,000</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-300" />
        <div className="text-sm text-gray-700 w-1/2 p-2 border border-gray-400 rounded-md">
          <p>미쳤어</p>
        </div>
      </div>
      <div className="fixed bottom-0 inset-x-5 py-2 bg-white">
        <div className="w-full max-w-md x-auto flex items-center relative">
          <input
            type="text"
            className="w-full pr-12 pl-4 p-2 shadow-sm rounded-full border border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
          />
          <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
            <button className="text-sm text-white flex items-center px-2 rounded-full bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 cursor-pointer">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
