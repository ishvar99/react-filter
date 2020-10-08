import React from "react"
const changed = (e) => {
  console.log(e.target.checked)
}
const Filter1 = () => {
  return (
    <section class="mb-4">
      <h6 class="font-weight-bold mb-3">Condition</h6>

      <div class="form-check pl-0 mb-3">
        <input
          type="checkbox"
          class="form-check-input filled-in"
          id="new"
          onChange={changed}
        />
        <label
          class="form-check-label small text-uppercase card-link-secondary"
          for="new"
        >
          New
        </label>
      </div>
      <div class="form-check pl-0 mb-3">
        <input
          type="checkbox"
          class="form-check-input filled-in"
          id="used"
          onChange={changed}
        />
        <label
          class="form-check-label small text-uppercase card-link-secondary"
          for="used"
        >
          Used
        </label>
      </div>
      <div class="form-check pl-0 mb-3">
        <input
          type="checkbox"
          class="form-check-input filled-in"
          id="collectible"
          onChange={changed}
        />
        <label
          class="form-check-label small text-uppercase card-link-secondary"
          for="collectible"
        >
          Collectible
        </label>
      </div>
      <div class="form-check pl-0 mb-3 pb-1">
        <input
          type="checkbox"
          class="form-check-input filled-in"
          id="renewed"
          onChange={changed}
        />
        <label
          class="form-check-label small text-uppercase card-link-secondary"
          for="renewed"
        >
          Renewed
        </label>
      </div>
    </section>
  )
}

export default Filter1
