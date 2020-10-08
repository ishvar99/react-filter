import React, { useRef } from "react"
import { InputGroup, FormControl } from "react-bootstrap"
export const Search = (props) => {
  var text = useRef("")
  const changed = (e) => {
    if (text.current.value !== "") {
      props.searchProducts(e.target.value)
    }
  }
  return (
    <InputGroup
      ref={text}
      className="mb-3 pt-5 w-50 mx-auto"
      onChange={changed}
    >
      <FormControl placeholder="Search" aria-label="Search" />
      <InputGroup.Append>
        <InputGroup.Text id="Search">
          <ion-icon name="search-outline"></ion-icon>
        </InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  )
}
