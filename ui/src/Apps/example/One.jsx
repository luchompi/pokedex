
import { useState } from 'react'
import Two from './Two'
const One = () => {
    const [data, setData] = useState([])
    
    const setDataValue = (e) => {
        setData(e.target.value)
    }
  return (
      <div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="input1">@</span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
                  aria-describedby="input1"
                  onChange={setDataValue}
            />
          </div>
          <Two data={data} foo='bar' />
    </div>
  )
}

export default One