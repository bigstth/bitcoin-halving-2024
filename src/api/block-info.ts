import axios from 'axios'
import { toast } from 'sonner'

const fetchBtcLatestBlockApi = async () => {
  try {
    const response = await axios.post('https://bitcoin-mainnet.public.blastapi.io', { jsonrpc: '1.0', id: 0, method: 'getblockchaininfo' })
    return response?.data?.result
  } catch (error) {
    toast.error('Failed to fetch blockchain data')
    return {}
  }
}

export { fetchBtcLatestBlockApi }
