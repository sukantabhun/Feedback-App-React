import {Component} from 'react'
import './index.css'

class FeedbackApp extends Component {
  state = {feedbackpage: true}

  onButtonClick = () => {
    this.setState({feedbackpage: false})
  }

  render() {
    const {feedbackpage} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="element-container">
        {feedbackpage === true ? (
          <div className="container">
            <h1>
              How satisfied are you with our customer support performance?
            </h1>
            <ul>
              {emojis.map(eachItem => (
                <li key={eachItem.id}>
                  <button type="button" className="button">
                    <img
                      src={eachItem.imageUrl}
                      className="img"
                      alt={eachItem.name}
                      onClick={this.onButtonClick}
                    />
                    <p>{eachItem.name}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="container-2">
            <img src={loveEmojiUrl} className="love-image" alt="love emoji" />
            <h1>Thank you!</h1>
            <p>
              We will user your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default FeedbackApp
