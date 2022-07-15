import React from 'react'
import Classnames from 'classnames'

function Inputs({name, label, value, type, icon, onChangeHandler,errors}) {
  return (
  
     <div class="d-flex flex-row align-items-center mb-4">
    <i class={icon}></i>
    <div class="form-outline flex-fill mb-0">
      <input type={type}  name={name} value={value}  className={Classnames("form-control", {"is-invalid": errors})} onChange={ onChangeHandler} />
      <label class="form-label"  for="form3Example1c">{label}</label>
      {
        errors && (<div  className="invalid-feedback">
        {errors}
      </div>)
      }
    </div>
  </div>
  )
}

export default Inputs