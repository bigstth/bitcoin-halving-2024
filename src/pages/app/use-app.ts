import { fetchBtcLatestBlockApi, fetchCoinListApi } from '@/api'
import { useQuery } from '@tanstack/react-query'

export const useGetBtcBlockInfo = () => {
  return useQuery({
    queryKey: ['btc-block-info'],
    queryFn: () => fetchBtcLatestBlockApi(),
    retryOnMount: true,
    refetchInterval: 10000,
  })
}

export const useGetCoinList = () => {
  return useQuery({
    queryKey: ['coin-list'],
    queryFn: () => fetchCoinListApi(),
    retryOnMount: true,
    refetchInterval: 10000,
  })
}
