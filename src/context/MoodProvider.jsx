import { MoodContext } from './MoodContext'
import { useState } from 'react'

export default function MoodProvider ({ children }) {
  const [mood, setMood] = useState('good')

  const changeMood = mood => setMood(mood)

  return (
    <MoodContext.Provider value={{ mood, changeMood }}>
      {children}
    </MoodContext.Provider>
  )
}