import React from 'react'
import useSpecialField from '../hooks/useSpecialField'

const Toggle = ({ fieldId, defaultValue = false, className = '' }) => {
  const { fieldState, update } = useSpecialField({ fieldId, defaultValue })
  return (
    <div className={`${className} fresh-switch`}>
      <input
        checked={fieldState || ''}
        type="checkbox"
        id={`fresh-${fieldId}`}
        className="fresh-input-toggle"
        onChange={() => {}}
      />
      <span
        className={`fresh-slider`}
        onClick={() => update({ id: fieldId, value: !fieldState })}
      />
    </div>
  )
}

export default Toggle
