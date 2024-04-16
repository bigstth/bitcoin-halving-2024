import axios from 'axios'

const fetchCoinListApi = async () => {
  try {
    const response = await axios.get('https://www.orbixtrade.com/api/v3/ticker/24hr')
    return response?.data
  } catch (error) {
    return error
  }
}

export { fetchCoinListApi }
