import props from './props';

export function Label({ title, className = '', onClick = (event) => event }) {
  return (
    <label className={className} onClick={event => onClick(event)} >
      {title}
    </label>
  )
}

Label.propTypes = props;
