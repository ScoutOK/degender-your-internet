import {connect} from 'react-redux';

import Adjectives from './Adjectives'

const mapStateToProps = ({adjectives}) => ({
  adjectives,
})
 
export default connect(mapStateToProps)(Adjectives)