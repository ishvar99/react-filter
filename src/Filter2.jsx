import React from "react"
const changed = (e) => {
  console.log(e.target.checked)
}
const Filter2 = () => {
  return (
    <section class="mb-4">
      <h6 class="font-weight-bold mb-3">Price</h6>

      <div class="form-check pl-0 mb-3">
        <input
          type="radio"
          class="form-check-input"
          id="under25"
          name="materialExampleRadios"
          onChange={changed}
        />
        <label
          class="form-check-label small text-uppercase card-link-secondary"
          for="under25"
        >
          Under $25
        </label>
      </div>
      <div class="form-check pl-0 mb-3">
        <input
          type="radio"
          class="form-check-input"
          id="2550"
          name="materialExampleRadios"
          onChange={changed}
        />
        <label
          class="form-check-label small text-uppercase card-link-secondary"
          for="2550"
        >
          $25 to $50
        </label>
      </div>
      <div class="form-check pl-0 mb-3">
        <input
          type="radio"
          class="form-check-input"
          id="50100"
          name="materialExampleRadios"
          onChange={changed}
        />
        <label
          class="form-check-label small text-uppercase card-link-secondary"
          for="50100"
        >
          $50 to $100
        </label>
      </div>
      <div class="form-check pl-0 mb-3">
        <input
          type="radio"
          class="form-check-input"
          id="100200"
          name="materialExampleRadios"
          onChange={changed}
        />
        <label
          class="form-check-label small text-uppercase card-link-secondary"
          for="100200"
        >
          $100 to $200
        </label>
      </div>
      <div class="form-check pl-0 mb-3">
        <input
          type="radio"
          class="form-check-input"
          id="200above"
          name="materialExampleRadios"
          onChange={changed}
        />
        <label
          class="form-check-label small text-uppercase card-link-secondary"
          for="200above"
        >
          $200 & Above
        </label>
      </div>
    </section>
  )
}

export default Filter2
