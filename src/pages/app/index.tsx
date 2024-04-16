import { useEffect, useState } from 'react'
import { useGetBtcBlockInfo, useGetCoinList } from './use-app'
import { HoverEffect as InfoCards } from '@/components/ui/card-hover-effect'
import { Bitcoin, Boxes, PackageOpen } from 'lucide-react'
import { numberWithCommas } from '@/lib/utils'
import Countdown from 'react-countdown'
import dayjs from 'dayjs'
import BlockProgress from '@/components/block-progress'

const HALVING_BLOCK = 840000
const TIME_PER_BLOCK_IN_SECOND = 567
//time per block reference from https://www.coinwarz.com/bitcoin-halving

const MainApp = () => {
  const [halvingDate, setHalvingDate] = useState('')
  const { data } = useGetBtcBlockInfo()
  const { data: coinList } = useGetCoinList()
  const btcPrice = coinList?.find((item: any) => item.symbol === 'btc_thb')?.lastPrice || 0

  const remainBlocks = HALVING_BLOCK - data?.height || 0

  const infoCardItems = [
    {
      title: 'จำนวนบล็อกปัจจุบัน',
      description: numberWithCommas(data?.height || 0),
      icon: <PackageOpen width={64} height={64} className="text-foreground" />,
    },
    {
      title: 'จำนวนบล็อกที่เหลือ',
      description: remainBlocks,
      icon: <Boxes width={64} height={64} />,
    },
    {
      title: 'ราคาปัจจุบัน',
      description: numberWithCommas(btcPrice || 0),
      icon: <Bitcoin width={64} height={64} />,
    },
  ]

  useEffect(() => {
    if (data?.height) {
      const calculatedHalvingDate = dayjs()
        .add(remainBlocks * TIME_PER_BLOCK_IN_SECOND, 'second')
        .toISOString()

      setHalvingDate(calculatedHalvingDate)
    }
  }, [data])

  return (
    <div className="container px-5 md:px-20">
      <div className="grid justify-center items-center gap-4 grid-cols-1">
        {halvingDate && (
          <Countdown
            date={halvingDate}
            renderer={({ formatted }) => {
              const { days, hours, minutes, seconds } = formatted
              return (
                <div className="flex gap-4 justify-center text-3xl md:text-6xl mt-5">
                  <p>{`${days} : ${hours} : ${minutes} : ${seconds}`}</p>
                </div>
              )
            }}
          />
        )}

        <BlockProgress height={data?.height} halvingBlock={HALVING_BLOCK} />

        <InfoCards items={infoCardItems} />
      </div>
      <div className="grid grid-cols-1 justify-center text-center">
        <p>
          Blockchain data:{' '}
          <a href="https://blockchain.info" target="_blank">
            https://blockchain.info
          </a>
        </p>
        <p>
          Bitcoin price:{' '}
          <a href="https://orbixtrade.com" target="_blank">
            https://orbixtrade.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default MainApp
