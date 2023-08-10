import type { NextPage } from 'next';

const CommunityPostDetail: NextPage = () => {
  return (
    <div>
      <span className="text-xs font-medium text-gray-800 inline-flex items-center my-3 ml-4 py-0.5 px-2.5 rounded-full bg-gray-100">
        동네질문
      </span>
      <div className="flex items-center space-x-3 px-5 pb-3 mb-3 border-b cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-slate-300" />
        <div>
          <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
          <p className="text-xs font-medium text-gray-500">
            View profile &rarr;
          </p>
        </div>
      </div>
      <div>
        <div className="text-gray-700 mt-2 mb-3 px-5">
          <span className="font-medium text-orange-500">Q.</span> What is the
          best pizza restaurant?
        </div>
        <div className="w-full flex px-5 space-x-5 text-gray-700 py-2.5 border-t border-b-[2px]">
          <span className="text-sm flex space-x-2 items-center">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>궁금해요 1</span>
          </span>
          <span className="text-sm flex space-x-2 items-center">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>답변 1</span>
          </span>
        </div>
      </div>
      <div className="px-5 my-5 space-y-5">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-slate-200 rounded-full" />
          <div>
            <span className="text-sm font-medium text-gray-700 block">
              Steve Jebs
            </span>
            <span className="text-xs text-gray-500 block mb-2">2시간 전</span>
            <p className="text-gray-700">
              The best mandu restaurant is the one next to my house.
            </p>
          </div>
        </div>
      </div>
      <div className="px-5">
        <textarea
          className="w-full shadow-sm focus:ring-orange-500 rounded-md border border-gray-300 focus:border-orange-500 "
          rows={4}
          placeholder="Answer this question!"
        />
        <button className="text-sm font-medium text-white w-full mt-2 py-2 px-5 bg-orange-500 hover:bg-orange-600 border border-transparent rounded-md shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
          Reply
        </button>
      </div>
    </div>
  );
};

export default CommunityPostDetail;
