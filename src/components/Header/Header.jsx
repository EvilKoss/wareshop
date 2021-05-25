import React,{createRef} from 'react';
import style from './Header.module.css';

const Header = (props) => {
	let nameRef = createRef();
	let logoRef = createRef();
	const choose = (id) => {
		props.chooseshop(id);
	}

	let change = () => {
		props.changeaddshop();
	}

	let change2 = () => {
		props.changeaddshop();
		props.addshop(nameRef.current.value,logoRef.current.value);
	}

	let str = props.shops.map((shop) => {
		let logos = shop.logo;
		let names = shop.name;
		let id = shop.id;
		return (
			<div className={style.header}>
				<img className={style.img} src={logos}/>
				<div>{names}</div>
				<button onClick={() => props.deleteshop(id)}>DELETE</button>
				<button onClick={() => choose(id)}>CHOICE</button>
			</div>
		)
	});
	let list = [
		<div>
			<input type='text' ref={nameRef} placeholder="Введите название магазина"/><br/>
			<input type='text' ref={logoRef} placeholder="Вставте ссылку на картинку"/><br/>
			<button onClick={change2}>ADD SHOP</button>
		</div>
	]
	if(!props.addShop){
		list = [<button onClick={change}>ADD SHOP</button>];
	}
	return (
		<header>
			<div>
				{str}
				{list}
			</div>
		</header>
	)
}

export default Header;
