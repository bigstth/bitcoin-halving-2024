import axios from 'axios'

const fetchBtcLatestBlockApi = async () => {
  try {
    const response = await axios.post('https://bitcoin-mainnet.public.blastapi.io', { jsonrpc: '1.0', id: 0, method: 'getblockchaininfo' })
    return response?.data?.result
  } catch (error) {
    return error
  }
}

export { fetchBtcLatestBlockApi }
