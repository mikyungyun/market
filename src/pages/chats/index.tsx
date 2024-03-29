import Layout from '@/components/layout';
import type { NextPage } from 'next';

const Chats: NextPage = () => {
  return (
    <Layout hasTabBar title="채팅">
      <div className="py-10 divide-y-[1px]">
        {new Array(6).fill(1).map((_, i) => (
          <div
            key={i}
            className="flex items-center space-x-3 py-3 px-5 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-gray-700">Steve Jebs</p>
              <p className="text-sm text-gray-500">
                See you tomorrow in the corner at 2pm!
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
