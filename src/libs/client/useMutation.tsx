import { useState } from 'react';

interface IUseMutationState {
  loading: boolean;
  data: object;
  error: object;
}
type TUseMuationResult = [(data: any) => void, IUseMutationState];
function useMutation(url: string): TUseMuationResult {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);
  function mutation(data: any) {
    setLoading(true);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      // .then((json) => setData(json));
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }
  return [mutation, { loading, data, error }];
}

export default useMutation;
