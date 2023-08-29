import { useMutation, useQueryClient } from 'react-query';
import deleteApiData from '../../utils/deleteApiData';

const useUnFollow = (uniqueKey) => {
  const queryClient = useQueryClient();

  return useMutation(deleteApiData, {
    onSuccess: () => {
      queryClient.invalidateQueries([uniqueKey]);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useUnFollow;
