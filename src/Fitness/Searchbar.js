import React from 'react'
import Card from './Card/Card'
import './Searchbar.css'

class Searchbar extends React.Component {
  state = {
    Body: { name: 'FULL BODY', search: 'Top full body workout' },
    Abs: { name: 'ABS', search: 'Top Abs workout' },
    Arms: { name: 'ARMS', search: 'Top Shoulders and arms workout' },
    Legs: { name: 'LEGS', search: 'Top leg workouts' },
    Hiit: { name: 'HIIT', search: 'HIIT Exercises' },
    Pilates: { name: 'PILATES', search: 'Full body Pilates' },
    Yoga: { name: 'YOGA', search: 'Top Yoga Exercise' },
    Meditation: { name: 'MEDITATIONAL MUSIC', search: 'Best meditation music' },
    Study: { name: 'STUDY MUSIC', search: 'Best study music' },
  }

  handleSubmit = (value) => {
    this.props.handleFormSubmit(value)
  }

  render() {
    return (
      <div className="grid-container">
        <div
          className="content"
          onClick={() => this.handleSubmit(this.state.Body.search)}
        >
          <Card image="/images/fullbody.png" title={this.state.Body.name} />
        </div>
        <div
          className="content"
          onClick={() => this.handleSubmit(this.state.Abs.search)}
        >
          <Card image="/images/abs.png" title={this.state.Abs.name} />
        </div>
        <div
          className="content"
          onClick={() => this.handleSubmit(this.state.Arms.search)}
        >
          <Card image="/images/arms.png" title={this.state.Arms.name} />
        </div>
        <div
          className="content"
          onClick={() => this.handleSubmit(this.state.Legs.search)}
        >
          <Card image="/images/legs.png" title={this.state.Legs.name} />{' '}
        </div>
        <div
          className="content"
          onClick={() => this.handleSubmit(this.state.Hiit.search)}
        >
          <Card image="/images/hiit.png" title={this.state.Hiit.name} />
        </div>
        <div
          className="content"
          onClick={() => this.handleSubmit(this.state.Pilates.search)}
        >
          <Card image="/images/pilates.png" title={this.state.Pilates.name} />
        </div>
        <div
          className="content"
          onClick={() => this.handleSubmit(this.state.Yoga.search)}
        >
          <Card image="/images/yoga.png" title={this.state.Yoga.name} />
        </div>
        <div
          className="content"
          onClick={() => this.handleSubmit(this.state.Meditation.search)}
        >
          <Card
            small={0}
            image="/images/meditation.png"
            title={this.state.Meditation.name}
          />
        </div>
        <div
          className="content"
          onClick={() => this.handleSubmit(this.state.Study.search)}
        >
          <Card image="/images/Study.png" title={this.state.Study.name} />
        </div>
      </div>
    )
  }
}
export default Searchbar
