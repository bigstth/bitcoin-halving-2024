import { Badge } from '../ui/badge'
import { Progress } from '../ui/progress'

const BlockProgress = ({ height, halvingBlock }: { height: number; halvingBlock: number }) => {
  const calculateProgress = () => {
    const percent = Math.floor((height / halvingBlock) * 100)
    return percent
  }

  return (
    <div className="flex flex-col items-end gap-2">
      <Badge variant="outline">
        <p>
          จำนวนบล็อค: {height} / {halvingBlock}
        </p>
      </Badge>
      <Progress value={calculateProgress()} />
    </div>
  )
}

export default BlockProgress
