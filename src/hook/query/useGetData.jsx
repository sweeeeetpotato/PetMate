import { useQuery } from 'react-query';
import getApiData from '../../utils/getApiData';

const useGetData = (URL, uniqueKey) => {
  return useQuery(uniqueKey, () => getApiData(URL), {
    refetchOnWindowFocus: false,
  });
};

export default useGetData;
