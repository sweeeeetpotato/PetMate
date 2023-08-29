import { useMutation, useQueryClient } from 'react-query';
import postApiData from '../../utils/postApiData';

const useFollow = (uniqueKey) => {
  const queryClient = useQueryClient();

  return useMutation(postApiData, {
    onSuccess: () => {
      queryClient.invalidateQueries([uniqueKey]);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export default useFollow;
