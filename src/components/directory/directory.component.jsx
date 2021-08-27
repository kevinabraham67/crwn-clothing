import React from 'react';
import  { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem  from '../menu-item/menu-item.component';

const Directory = ({ sections }) => (
            <div className='directory-menu'>
                {
                    sections.map(({title , imageUrl , id, size,linkUrl}) => (
                        <MenuItem key={id} title={title} linkUrl={linkUrl} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        );

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
    

export default connect(mapStateToProps)(Directory);