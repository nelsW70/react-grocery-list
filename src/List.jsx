import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({ items }) => {
  return (
    <div className="grocery-list">
      {items.map(item => {
        const { id, title } = item
        return (
          <article className="grocery-item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button type="button" className="edit-btn" title="edit">
                <FaEdit />
              </button>
              <button type="button" className="delete-btn" title="delete">
                <FaTrash />
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
