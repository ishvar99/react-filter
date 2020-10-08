import React, { useState, useEffect } from "react"

const Filter3 = (props) => {
  const [sizes, setSizes] = useState([])
  useEffect(() => {
    props.getSizes(sizes)
  }, [sizes])

  const changed = (e) => {
    if (e.target.checked) {
      setSizes([...sizes, e.target.id])
    } else {
      setSizes(sizes.filter((ele) => ele !== e.target.id))
    }
  }
  return (
    <section class="mb-4">
      <h6 class="font-weight-bold mb-3">Size</h6>

      <div class="form-check pl-0 mb-3">
        <input
          type="checkbox"
          class="form-check-input filled-in"
          id="34"
          onChange={changed}
        />
        <label
          class="form-check-label small text-uppercase card-link-secondary"
          for="34"
        >
          34
        </label>
      </div>
      <div class="form-check pl-0 mb-3">
        <input
          type="checkbox"
          class="form-check-input filled-in"
          id="36"
          onChange={changed}
        />
        <label
          class="form-check-label small text-uppercase card-link-secondary"
          for="36"
        >
          36
        </label>
      </div>
      <div class="form-check pl-0 mb-3">
        <input
          type="checkbox"
          class="form-check-input filled-in"
          id="38"
          onChange={changed}
        />
        <label
          class="form-check-label small text-uppercase card-link-secondary"
          for="38"
        >
          38
        </label>
      </div>
      <div class="form-check pl-0 mb-3">
        <input
          type="checkbox"
          class="form-check-input filled-in"
          id="40"
          onChange={changed}
        />
        <label
          class="form-check-label small text-uppercase card-link-secondary"
          for="40"
        >
          40
        </label>
      </div>
    </section>
  )
}

export default Filter3
