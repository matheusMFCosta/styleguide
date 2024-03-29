import * as React from 'react'

const sizes = {
  large: 'ph8 pv4 f3 ',
  normal: 'ph6 pv3 f2 ',
  small: 'ph2 pv1 f1 '
}

const styles = {
  primary:
    'bg-animate ba b--primary hover-b--primary bg-primary hover-bg-primary c-on-primary hover-c-on-primary pointer ',
  secondary:
    'bg-animate ba b--secondary hover-b--secondary bg-secondary hover-bg-secondary c-on-secondary hover-c-on-secondary  pointer ',
  danger: 'ba b--danger bg-danger dim c-on-danger pointer '
}

interface ButtonType {
  /** Set button's name. */
  name: string
  /** Define the size of the button. */
  size: 'small' | 'normal' | 'large'
  /** Define how the button will look. */
  style: 'primary' | 'secondary' | 'danger'
  /** Define type of the button. */
  type: 'button' | 'submit' | 'reset'
  /** Make button full width. */
  fullWidth: boolean
  /** Make button disabled. */
  isDisabled: boolean
  /** Add icon to a button. */
  icon: any
  /** Function that will be called when user click on button. */
  onClick: Function
  /** Append css classes to the button. */
  className: string
  children: any
}

class Button extends React.PureComponent<ButtonType, any> {
  static defaultProps = {
    size: 'normal',
    style: 'primary',
    type: 'button',
    fullWidth: false,
    isDisabled: false,
    onClick: null
  }

  handleClick = event => {
    !this.props.isDisabled && this.props.onClick && this.props.onClick(event)
  }

  render() {
    const { size, style, type, fullWidth, isDisabled, icon, name } = this.props
    const Icon = props => icon

    let classes = `br2 bw1 fw6 ${sizes[size]}`
    classes += isDisabled ? 'ba b--disabled bg-disabled nc-on-disabled ' : `${styles[style]} `
    if (fullWidth) classes += 'w-100 '
    if (this.props.className) classes += this.props.className

    return (
      <button name={name} type={type} className={classes} disabled={isDisabled} onClick={this.handleClick}>
        <span className="flex justify-center items-center">
          {icon && <Icon />}
          {this.props.children}
        </span>
      </button>
    )
  }
}

export default Button
