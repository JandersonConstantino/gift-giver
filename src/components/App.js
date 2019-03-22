import React from 'react'
import {
  Button
} from 'react-bootstrap'


class App extends React.Component {
  state = {
    gifts: [],
  }

  addGift = () => {
    const { gifts } = this.state

    const maxId = gifts.length ? Math.max(...gifts.map(gift => gift.id)) : 0

    gifts.push({ id: maxId + 1 })

    this.setState({ gifts })
  }

  render = () => {
    return (
      <div>
        <h2>Gift Giver</h2>
        <Button className='btn-add'
          onClick={this.addGift}
        >
          Add Gift
        </Button>
      </div>
    )
  }
}

export default App
