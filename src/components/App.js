import React from 'react'
import { Button } from 'react-bootstrap'

import Gift from './Gift'
import { max_number } from '../helper'


class App extends React.Component {
  state = {
    gifts: [],
  }

  addGift = () => {
    const { gifts } = this.state

    const maxId = max_number(gifts.map(gift => gift.id))

    gifts.push({ id: maxId + 1 })

    this.setState({ gifts })
  }

  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id)
    this.setState({ gifts })
  }

  render = () => {
    const { gifts } = this.state

    return (
      <div>
        <h2>Gift Giver</h2>
        <Button className='btn-add'
          onClick={this.addGift}
        >
          Add Gift
        </Button>
        <div className='gift-list'>
          {gifts.map(gift => (
            <Gift
              key={gift.id}
              gift={gift}
              removeGift={this.removeGift}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
