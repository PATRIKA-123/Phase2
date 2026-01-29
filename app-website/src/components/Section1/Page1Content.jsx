import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6 flex flex-col lg:flex-row items-center gap-10 h-auto lg:h-[90vh] px-6 md:px-18'>
        <LeftContent />
        <RightContent users={props.users}  />
    </div>
  )
}

export default Page1Content
