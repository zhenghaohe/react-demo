import React, { useState } from 'react'

const Tabs = ({ data, tabPosition = 'up', disabled }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabList = (
    <div data-tab-list>
      {data.map((tab, index) => {
        const isActive = activeIndex === index
        const isDisabled = disabled.includes(index)

        return (
          <div
            data-tab
            key={index}
            className={isDisabled ? 'disabled' : isActive ? 'active' : ''}
            onClick={isDisabled ? undefined : () => setActiveIndex(index)}
          >
            {tab.label}
          </div>
        )
      })}
    </div>
  )

  const tabPanel = <div data-tab-panels>{data[activeIndex].content}</div>

  return (
    <div data-tabs>
      {tabPosition === 'up' ? [tabList, tabPanel] : [tabPanel, tabList]}
    </div>
  )
}

export default Tabs
