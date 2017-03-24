import {connect} from 'react-redux';

import Pronouns from './Pronouns'

const mapStateToProps = ({pronouns}) => ({
  pronouns,
})
 
export default connect(mapStateToProps)(Pronouns)