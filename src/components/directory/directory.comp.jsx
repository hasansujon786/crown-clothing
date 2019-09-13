import React from 'react'
import './Drectory.style.scss'

// redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySelection } from '../../redux/directory/directory.selectors'

// components
import MenuItem from '../Menu-Item/Menu-Item.comp'

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelection
})
export default connect(mapStateToProps)(Directory)
