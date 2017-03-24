import {connect} from 'react-redux';

import Nouns from './Nouns'

const mapStateToProps = ({nouns}) => ({
  nouns,
})
 
export default connect(mapStateToProps)(Nouns)