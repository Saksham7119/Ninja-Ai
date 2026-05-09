import React from 'react'
import { Button } from "./ui/button"
import { Field } from "./ui/field"
import { Input } from "./ui/input"

const ChatInterface = () => {
  return (
    <Field orientation="horizontal" className="w-2xl h-20">
      <Input type="search" placeholder="Enter the prompt!" className="h-10"/>
      <Button className="h-10">Send</Button>
    </Field>
  )
}

export default ChatInterface