import React, { Component } from 'react'
import { connect } from 'react-redux'
import TutorList from '../components/tutor_list'
import { getTutor } from '../actions/tutor'

const mapDispatchToProps = dispatch => ({
  initTutor: tutorId => {
    dispatch(getTutor(tutorId))
  },
})

const mapStateToProps = state => ({
  tutor: state.tutor.currentTutor,
})

const TutorListContainer = connect(mapStateToProps, mapDispatchToProps)(
  TutorList
)

export default TutorListContainer
