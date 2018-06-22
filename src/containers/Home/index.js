import Home from './Home'
import reducers, {actions} from '../../redux/user'
import { connect } from 'react-redux';

export function mapStateToProps(state) {
  return {
    isLogined: state.user.isLogined,
    info: state.user.info
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(actions.logout()),
    getInfo: () => dispatch(actions.getInfo())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
export const reducer = reducers
export const action = actions