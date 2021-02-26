import React from 'react'

const CreateForm = (props) => {

  const [formData, setFormData] = React.useState(props.reviews)
  console.log(formData.id)

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleSubmit(formData)
    props.history.push('/review')
  }

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <form>
    <input
      type="text"
      name="title"
      placeholder="Title"
      value={formData.title}
      onChange={handleChange}
    />
        <input
      type="text"
      name="author"
      placeholder="Author Name"
      value={formData.author}
      onChange={handleChange}
    />
        <input
      type="text"
      name="Content"
      placeholder="Write Review Here"
      value={formData.content}
      onChange={handleChange}
    />
    <input type="submit" value={handleSubmit}/>
  </form>
  )
}

export default CreateForm