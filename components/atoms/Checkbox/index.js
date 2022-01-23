import props from './props';

export function Checkbox({ className = '', onChange = (value) => value }) {
  return (
    <input
      className={className}
      type='checkbox'
      onChange={event => onChange(!!event.target.checked)}
    />
  )
}

Checkbox.propTypes = props;
