import React from 'react'
import './index.styl'
interface Props {
  ui: any
  uiProps?: any
  onClose: Function
}

class Modal extends React.Component<Props> {
  render() {
    if (!this.props.ui) return null
    return (
      // TODO: simply onClick=this.props.onClose
      <div className="modal" onClick={() => this.props.onClose()}>
        <div
          className="modalContent vhCenter"
          style={{
            marginTop: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          }}
        >
          <div
            style={this.props.uiProps ? this.props.uiProps.style : {}}
            onClick={e => e.stopPropagation()}
          >
            {this.props.ui}
            <div
              className="modalClose"
              style={{ display: 'block' }}
              onClick={() => {
                this.props.onClose()
              }}
            >
              x
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
