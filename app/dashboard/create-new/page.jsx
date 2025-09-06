'use client'

import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle'
import SelectDuration from './_components/SelectDuration'
import { Button } from '@/components/ui/button'

function CreateNew() {
  const [formData, setFormData] = useState([])
  const handleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue)
    setFormData(prev=>({
      ...prev,
      [fieldName]: fieldValue
    }))
  }
  return (
    <div className='md:px-10'>
      <h2 className='font-bold text-4xl text-[#8338ec] text-center'>Create New</h2>

      <div className='mt-5 p-10  shadow-md'>
        {/* SELECT TOPIC */}
        <SelectTopic onUserSelect={handleInputChange} />
        {/* SELECT STYLE */}
        <SelectStyle onUserSelect={handleInputChange} />
        {/* Duration */}
        <SelectDuration onUserSelect={handleInputChange} />

        <Button className={`mt-10 w-full text-lg p-5`}>Create Short Video</Button>
      </div>
    </div>
  )
}

export default CreateNew