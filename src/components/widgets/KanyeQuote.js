import WidgetSkeletonLoader from 'components/WidgetSkeletonLoader'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const BaseWidget = ({ className }) => {
  const [advice, setAdvice] = useState(null)

  useEffect(() => {
    (async () => {
      const resp = await fetch('https://api.kanye.rest')
      const json = await resp.json()
      setAdvice(json.quote)
    })()
  }, [])

  return (
    <WidgetSkeletonLoader isLoading={advice === null} lineCount={2} content={(
      <div className={className}>
        {advice}
      </div>
    )} />
  )
}

const BaseWidgetStyled = styled(BaseWidget)`
`

const WidgetDefinition = {
  id: 'hwk_kanye_quote',
  name: 'What Kanye West says',
  component: BaseWidgetStyled,
  tags: ['quotes'],
}

export default WidgetDefinition
