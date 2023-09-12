// 각각의 API에서 공통적으로 처리해야 할 로직을 처리
// 코드의 중복을 방지
import { NextApiRequest, NextApiResponse } from 'next';

function withHandler(
  method: 'POST' | 'GET' | 'DELETE',
  fn: (req: NextApiRequest, res: NextApiResponse) => void
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    // 모든 API에서 공통적으로 처리하려는 로직 구현
    if (req.method !== method) {
      return res.status(405).end();
    }
    // handler 실행
    try {
      await fn(req, res);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}

export default withHandler;
