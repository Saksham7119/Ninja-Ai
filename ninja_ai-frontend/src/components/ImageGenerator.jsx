
import React from 'react'
import { Button } from "./ui/button"
import { Field } from "./ui/field"
import { Input } from "./ui/input"

const ImageGenerator = () => {
  return (
    <Field orientation="horizontal" className="w-2xl h-20">
      <Input type="search" placeholder="Enter the prompt to generate the image!" className="h-10"/>
      <Button className="h-10">Generate Image</Button>
    </Field>
  )
}
export default ImageGenerator