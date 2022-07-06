import React from 'react'
import Person from './Person'

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana']
  const people = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 38,
      skill: 'Vue'
    },
  ]
  const nameList = names.map((name) => (<h2 key={name}>{name}</h2>))
  const peopleList = people.map(person => (<Person key={person.id} person={person} />))
  return (
    <div>
      <h1>Name List</h1>
      <div>
        {nameList}
      </div>
      <h1>People List</h1>
      <div>
        {peopleList}
      </div>
    </div>
  )
}

export default NameList;