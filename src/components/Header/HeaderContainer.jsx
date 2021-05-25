import Header from './Header';
import Reducer from '../Reducer';
import {connect} from 'react-redux';
import {addshop,deleteshop,chooseshop,changeaddshop} from '../Reducer';

const mapStateToProps = (state) => {
	return{
		shops: state.combine.shops,
		addShop: state.combine.addShop
	}
}

const mapDispatchToProps = {
	addshop,deleteshop,chooseshop,changeaddshop
}

const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header);

export default HeaderContainer;
