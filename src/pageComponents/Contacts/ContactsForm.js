import React, { useState, useEffect } from 'react'
import { getContactsFormContent } from '../../functionComponents/ContactsFunction'
import { Form, Button } from 'react-bootstrap'

const ContactsForm = ({ addOrEdit, currentID, contactsObj }) => {
  const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    address: ''
  }
  const [values, setValues] = useState(initialFieldValues)

  useEffect(() => {
    if(currentID === '') {
      setValues({
        ...initialFieldValues
      })
    }
    else {
      setValues({
        ...contactsObj[currentID]
      })
    }
  },[currentID, contactsObj])

  const handlerInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      // 這邊先串接useState中的valuses，然後使用陣列去寫入每個input裡面的name的值
      ...values,
      [name]: value
    })
  }

  const handlerFormSubmit = (e) => {
    e.preventDefault()
    addOrEdit(values)
    setValues('')
  }

  return (
    <Form className='my-2' onSubmit={handlerFormSubmit}>
      {
        getContactsFormContent().map(content => (
          <Form.Group controlId={content.controlId} key={content.id}>
            <Form.Label>{content.Label}</Form.Label>
            <input
              className='form-control'
              placeholder={content.placeholder}
              name={content.name}
              value={values.name}
              onChange={handlerInputChange} />
          </Form.Group>
        ))
      }
      <Button variant="primary" type="submit">
        {currentID === '' ? 'Submit' : 'Update'}
      </Button>
    </Form>
  )
}

export default ContactsForm
