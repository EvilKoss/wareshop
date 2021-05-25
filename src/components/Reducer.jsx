const ADDSHOPS = 'ADDSHOPS';

const DELETESHOPS = 'DELETESHOPS';

const ADDPRODUCTS = 'ADDPRODUCTS';

const DELETEPRODUCTS = 'DELETEPRODUCTS';

const CHOOSESHOP = 'CHOOSESHOP';

const CHANGEADDPRO = 'CHANGEADDPRO';

const CHANGEADDSHOP = 'CHANGEADDSHOP';

const initialState =
{
	currentId:-1,
	addPro:false,
	addShop:false,
	newShopId:2,
	shops:[
		{
			name:'PUMA',
			logo:'https://cdn.worldvectorlogo.com/logos/puma-logo.svg',
			id:0,
			newProductId:1,
			products:
			[
				{
					id:0,
					product:'sneakers',
					quantity:5,
					price:100,
					logo:'https://images.ua.prom.st/1619016249_w640_h640_originalnye-muzhskie-krossovki.jpg'
				}
			]
		},
		{
			name:'APPLE',
			logo:'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
			id:1,
			newProductId:1,
			products:
			[
				{
					id:0,
					product:'ipod',
					quantity:7,
					price:50,
					logo:'https://unitheme.net/images/detailed/0/apple-ipod-hi.jpg'
				}
			]
		}
	]
}

const Reducer = (state = initialState,action) => {
	switch(action.type){
		case ADDSHOPS:
		{
			let newShop = {
				name:action.name,
				logo:action.logo,
				id:state.newShopId,
				newProductId:0,
				products:[]
			}
			let newShops = [...state.shops,newShop];
			let newShopId = state.newShopId + 1;
			return {...state,shops:newShops,newShopId};
		}
		case DELETESHOPS:
		{
			let ids = action.id;
			let newShop = state.shops.filter((elem) => {
				return elem.id != ids;
			})
			return {...state,shops:newShop};
		}
		case CHANGEADDPRO:
		{
			let newAddPro = !state.addPro;
			return {...state,addPro:newAddPro};
		}
		case CHANGEADDSHOP:
		{
			let newAddShop = !state.addShop;
			return {...state,addShop:newAddShop};
		}
		case ADDPRODUCTS:
		{
			let id = state.currentId;
			let items = action.items;
			let newShops = state.shops.map((shop) => {
				if(shop.id == id) {
					let newId = shop.newProductId;
					return {
						...shop,
						newProductId: newId + 1,
						products:
						[...shop.products, {
							id:newId,
							product:items.nameRef,
							quantity:items.quantityRef,
							price:items.priceRef,
							logo:items.urlRef
						}]
					};
				} else {
					return shop;
				}
			});
			return {...state, shops: newShops,addPro:false};
		}
		case CHOOSESHOP:
		{
			let id = action.id;
			let shop = state.shops.find((s) => s.id == id);
			return {...state, currentProducts: shop.products, currentId:id};
		}

		case DELETEPRODUCTS:
		{
			let id = state.currentId;
			let idProd = action.idProd;
			let newShops = state.shops.map((shop) =>{
				if(shop.id == id){
					return {
						...shop,
						products: shop.products.filter((product) => product.id != idProd)
					}
				} else {
					return shop;
				}
			})
			return {...state,shops: newShops};
		}

		default:
			return state;
	}
}

export const changeaddshop = () => ({type:CHANGEADDSHOP});

export const changeaddpro = () => ({type:CHANGEADDPRO});

export const addshop = (name,logo) => ({type:ADDSHOPS,name:name,logo:logo});

export const deleteshop = (id) => ({type:DELETESHOPS,id:id});

export const addproducts = (items) => ({type:ADDPRODUCTS,items:items});

export const deleteproducts = (idProd) => ({type:DELETEPRODUCTS,idProd:idProd});

export const chooseshop = (id) => ({type:CHOOSESHOP,id:id});

export default Reducer;
