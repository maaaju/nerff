import React, { Component } from 'react'
import { connect } from 'react-redux'
import TutorList from '../components/tutor_list'

const mapStateToProps = state => ({
  name: state.tutor.name,
  age: state.tutor.age,
  topics: state.tutor.topics,
  mail: state.tutor.mail,
  phone: state.tutor.phone,
  description: state.tutor.description,
})

const TutorListContainer = connect(mapStateToProps)(TutorList)

export default TutorListContainer
