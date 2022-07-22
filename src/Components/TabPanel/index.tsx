import * as React from 'react'

type Props = {
  index: number
  value: number
  children: React.ReactNode
}

const TabPanel: React.FC<Props> = ({ value, index, children, ...other }) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  )
}

export default TabPanel
