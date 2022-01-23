import PropTypes from 'prop-types';

import { Input } from '../../atoms/Input';
import InputProps from '../../atoms/Input/props';

import { Label } from '../../atoms/Label';
import LabelProps from '../../atoms/Label/props';

export function FormInputWithLabel({ className, input, label }) {
  return (
    <div>
      <Label title={label.title} />
      <Input type={input.type} onChange={input.onChange} />
    </div>
  )
}

FormInputWithLabel.propTypes = {
  className: PropTypes.string,
  input: PropTypes.exact(InputProps),
  label: PropTypes.exact(LabelProps),
}
