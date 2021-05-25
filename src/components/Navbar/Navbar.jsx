import React,{createRef} from 'react';
import style from './Navbar.module.css';

const Navbar = (props) => {
	let nameRef = createRef();
	let quantityRef = createRef();
	let priceRef = createRef();
	let urlRef = createRef();

	const add = () => {
		let items = {nameRef:nameRef.current.value,
			quantityRef:quantityRef.current.value,
			priceRef:priceRef.current.value,
			urlRef:urlRef.current.value};
			props.addproducts(items);
		}

	const adds = [
		<div>
			<input type='text' ref={nameRef} placeholder="Введите название продукта"/><br/>
			<input type='text' ref={quantityRef} placeholder="Введите количество"/><br/>
			<input type='text' ref={priceRef} placeholder="Введите цену"/><br/>
			<input type='text' ref={urlRef} placeholder="Вставте ссылку на картинку"/><br/>
			<button onClick={add}>ADD PRODUCT</button>
		</div>
	];
	const addpro = () => {
		props.changeaddpro();
	}


	const del = (idProd) => {
		props.deleteproducts(idProd);
	}

	let str = props.currentProducts.map((product) => {
			let names = product.product;
			let quantity = product.quantity;
			let price = product.price;
			let logos = product.logo;
			let idProd = product.id;
			return (
				<div className={style.navBar}>
					<img className={style.img} src={logos}/>
					<div>НАИМЕНОВАНИЕ: {names}</div>
					<div>КОЛИЧЕСТВО: {quantity}</div>
					<div>ЦЕНА: {price}</div>
					<button onClick={() => del(idProd)}>DELETE</button>
				</div>
			)
	})

	if(props.currentId >= 0){
		let addds = [<button onClick={addpro}>ADD PRODUCT</button>];
		if(props.addPro){
			addds = adds;
		}
		return (
			<div>
			{str}<br/>
			{addds}

			</div>
		)
	}
	else return (<div></div>);
}

export default Navbar;
