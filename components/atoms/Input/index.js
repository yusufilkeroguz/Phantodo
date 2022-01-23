import props from './props';

export function Input({ type, onChange = (value) => value }) {
  return (
    <input
      type={type}
      onChange={
        event => onChange(event.target.value)
      }
    />
  )
}

Input.propTypes = props;
