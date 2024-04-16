import axios from 'axios'

const fetchBtcLatestBlockApi = async () => {
  try {
    const response = await axios.get('https://blockchain.info/latestblock')
    return response?.data
  } catch (error) {
    return error
  }
}

export { fetchBtcLatestBlockApi }
