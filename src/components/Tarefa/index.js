import React from 'react';
import PropTypes from 'prop-types';
import './Tarefa.css';
import { FaEdit, FaWindowClose } from 'react-icons/fa'

export default function Tarefa({tarefas,handleEdit,handleDelete }){
  return(
      <ul className='tarefas'>
      {tarefas.map((tarefa, index) =>
      ( <li key={tarefa}>
        {tarefa}
        <span>
        <FaEdit
        onClick={(e) => handleEdit(e, index)}
        className='edit'
        />
        <FaWindowClose
        onClick={(e) => handleDelete(e, index)}
        className='delete'
        />
        </span>
      </li>))}
    </ul>
)
}

Tarefa.propTypes ={
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}
