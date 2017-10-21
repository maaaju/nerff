import React, { Component } from 'react'
import { connect } from 'react-redux'
import TutorList from '../components/tutor_list'
import { getTutor, updateTutorField, saveTutor } from '../actions/tutor'

const mapDispatchToProps = dispatch => ({
  initTutor: tutorId => {
    dispatch(getTutor(tutorId))
  },
  updateTutor: tutor => {
    dispatch(updateTutorField(tutor))
  },
  saveTutor: (tutorId, tutor) => {
    dispatch(saveTutor(tutorId, tutor))
  },
})

const mapStateToProps = state => ({
  tutor: state.tutor.currentTutor,
})

const TutorListContainer = connect(mapStateToProps, mapDispatchToProps)(
  TutorList
)

export default TutorListContainer
