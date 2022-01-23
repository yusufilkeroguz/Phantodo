import props from './props';

export function Button({ onClick, children, className = '' }) {
  return (
    <button className={className} onClick={() => onClick()}>
      {children||''}
    </button>
  )
}

Button.propTypes = props;