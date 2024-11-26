import {Component} from 'react'
import './style.css'

class Text extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  // Toggle bold state
  onClickisBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  // Toggle italic state
  onClickisItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  // Toggle underline state
  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state

    return (
      <div className="main-container">
        <div className="text-container">
          <h1 className="heading">Text Editor</h1>
          <img
            className="img-dec"
            alt="text editor"
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
          />
        </div>
        <div className="editor-container">
          <div className="decorators">
            <ul className="list-items">
              {/* Bold button */}
              <li className="list-item">
                <button
                  type="button"
                  onClick={this.onClickisBold}
                  data-testid="bold"
                  aria-label="Toggle bold"
                  className={`icons ${
                    isBold ? 'button-active' : 'button-inactive'
                  }`}
                >
                  <i className="bi bi-type-bold" />
                </button>
              </li>
              <li className="list-item">
                <button
                  type="button"
                  onClick={this.onClickisItalic}
                  data-testid="italic"
                  aria-label="Toggle italic"
                  className={`icons ${
                    isItalic ? 'button-active' : 'button-inactive'
                  }`}
                >
                  <i className="bi bi-type-italic" />
                </button>
              </li>
              <li className="list-item">
                <button
                  type="button"
                  onClick={this.onClickUnderline}
                  data-testid="underline"
                  aria-label="Toggle underline"
                  className={`icons ${
                    isUnderline ? 'button-active' : 'button-inactive'
                  }`}
                >
                  <i className="bi bi-type-underline" />
                </button>
              </li>
            </ul>
          </div>
          <hr className="divider" />
          {/* Textarea element */}
          <textarea
            style={{
              fontWeight: isBold ? 'bold' : 'normal',
              fontStyle: isItalic ? 'italic' : 'normal',
              textDecoration: isUnderline ? 'underline' : 'none',
            }}
            className="input-field"
            rows="10"
            cols="50"
            placeholder="Type your text here..."
          />
        </div>
      </div>
    )
  }
}

export default Text
