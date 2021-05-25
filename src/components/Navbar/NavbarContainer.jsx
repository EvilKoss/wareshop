import Navbar from './Navbar';
import Reducer from '../Reducer';
import {connect} from 'react-redux';
import {addproducts,deleteproducts,chooseshop,changeaddpro} from '../Reducer';

const mapStateToProps = (state) => {
	let id = state.combine.currentId;
	let addPro = state.combine.addPro;
	let products = id >= 0 ? state.combine.shops.find((s) => s.id == id).products : [];
	return {
		currentProducts: products,
		currentId: id,
		addPro: addPro
	}
}

const mapDispatchToProps = {
	deleteproducts,addproducts,chooseshop,changeaddpro
}

const NavbarContainer = connect(mapStateToProps,mapDispatchToProps)(Navbar);

export default NavbarContainer;
