import React from 'react'
import { useEffect } from 'react'

export default function Note(props) {


  useEffect(() => {
    props.setProgress(100);
  }, [])
  

  return (
    <div>Note</div>
  )
}
