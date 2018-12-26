import * as React from 'react'

const sizes = {
  large: 'ph8 pv4 f3 ',
  normal: 'ph6 pv3 f2 ',
  small: 'ph2 pv1 f1 '
}

const styles = {
  primary:
    'bg-animate ba b--action-primary hover-b--action-primary bg-action-primary hover-bg-action-primary c-on-action-primary pointer ',
  secondary:
    'bg-animate ba b--action-secondary hover-b--action-secondary bg-action-secondary hover-bg-action-secondary c-on-action-secondary pointer ',
  danger: 'ba b--danger bg-danger dim c-on-danger pointer '
}

class Button extends React.PureComponent<any,any> {

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

// Button.propTypes = {
//   /** Set button's name. */
//   name: PropTypes.string,
//   /** Define the size of the button. */
//   size: PropTypes.oneOf(['small', 'normal', 'large']),
//   /** Define how the button will look. */
//   style: PropTypes.oneOf(['primary', 'secondary', 'danger']),
//   /** Define type of the button. */
//   type: PropTypes.oneOf(['button', 'submit', 'reset']),
//   /** Make button full width. */
//   fullWidth: PropTypes.bool,
//   /** Make button disabled. */
//   isDisabled: PropTypes.bool,
//   /** Add icon to a button. */
//   icon: PropTypes.element,
//   /** Function that will be called when user click on button. */
//   onClick: PropTypes.func,
//   /** Append css classes to the button. */
//   className: PropTypes.string,
//   children: PropTypes.node
// }


export default Button