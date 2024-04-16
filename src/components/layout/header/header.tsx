import { AuroraBackground } from '@/components/ui/aurora-background'
import { motion } from 'framer-motion'
import Btc from '@/assets/Bitcoin.svg.png'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-lg md:text-3xl font-bold text-white text-center flex flex-nowrap gap-4 items-center">
          <img src={Btc} alt="bitcoin" className="max-w-[48px] md:max-w-[64px]" />
          Bitcoin Halving Countdown 2024
        </div>

        <Button className="bg-primary rounded-full w-fit text-primary-foreground dark:text-black px-4 py-2" onClick={() => window.open('https://www.orbixtrade.com/th/blog/article/bitcoin-halving-bitcoin', '_blank')}>
          Bitcoin halving คืออะไร?
        </Button>
      </motion.div>
    </AuroraBackground>
  )
}
