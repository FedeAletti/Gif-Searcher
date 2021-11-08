import React, {useState} from 'react'

function SearchForm({onSubmit}) {
  const [keyword, setKeyword] = useState('')

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    // navegar a otra ruta
    onSubmit({keyword})
  }

  return (
    <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input placeholder="Search a gif here..." 
        onChange={handleChange} 
        type='text' value={keyword} />

    </form>
  )
}

export default React.memo(SearchForm)