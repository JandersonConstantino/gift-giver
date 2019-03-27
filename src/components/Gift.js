import React from 'react'
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button
} from 'react-bootstrap'

class Gift extends React.Component {
  state = {
    person: '',
    present: '',
  }

  render() {
    const {
      gift,
      removeGift
    } = this.props

    return (
      <div className='gift'>
        <Form>
          <FormGroup>
            <FormLabel>Person</FormLabel>
            <FormControl
              className='input-person'
              onChange={e => this.setState({ person: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Present</FormLabel>
            <FormControl
              className='input-present'
              onChange={e => this.setState({ present: e.target.value })}
            />
          </FormGroup>
        </Form>
        <Button
          className='btn-remove'
          onClick={() => removeGift(gift.id)}
          children='Remove Gift'
        />
      </div>
    )
  }
}

export default Gift
