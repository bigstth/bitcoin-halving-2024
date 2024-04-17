import axios from 'axios'
import { toast } from 'sonner'

const fetchCoinListApi = async () => {
  try {
    const response = await axios.get('https://www.orbixtrade.com/api/v3/ticker/24hr')
    return response?.data
  } catch (error) {
    toast.error('Failed to fetch BTC price')
    return []
  }
}

export { fetchCoinListApi }
