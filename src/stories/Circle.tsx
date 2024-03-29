import React from 'react'

type CircleProps = {
  /**
   * 円のPropsで円の色をセレクトできます
   */
  variant?: 'orange' | 'green' | 'yellow'
}

/**
 * プロジェクトで使用する円のUIコンポーネントです
 */
const Circle: React.FC<CircleProps> = ({ variant = 'orange' }) => {
  const getBackgroundColor = (variant: 'orange' | 'green' | 'yellow') => {
    switch (variant) {
      case 'green':
        return 'bg-green-500'
      case 'yellow':
        return 'bg-yellow-500'
      default:
        return 'bg-orange-500'
    }
  }

  const bgColor = getBackgroundColor(variant)

  return <div className={`${bgColor} w-14 h-14 rounded-full`} />
}

export default Circle
