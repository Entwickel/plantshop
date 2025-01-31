import monstera from '../assets/monstera.jpg'
import basil from '../assets/basil.jpg'
import cactus from '../assets/cactus.jpg'
import lyrata from '../assets/lyrata.jpg'
import mint from '../assets/mint.jpg'
import olivier from '../assets/olivier.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import calathea from '../assets/calathea.jpg'




export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		isBestSale: true,
		water : 3,
		light : 1,
		cover: monstera
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		isBestSale: false,
		water : 2,
		light : 2,
		cover: lyrata
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		isBestSale: false,
		water : 2,
		light : 2,
		cover: pothos
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
		isBestSale: false,
		water : 2,
		light : 2,
		cover: mint
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		isBestSale: false,
		water : 3,
		light : 2,
		cover: olivier
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		isBestSale: false,
		water : 2,
		light : 2,
		cover: pothos
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		isBestSale: true,
		water : 2,
		light : 2,
		cover: basil
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		isBestSale: false,
		water : 1,
		light : 2,
		cover: lyrata
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		isBestSale: false,
		water : 1,
		light : 2,
		cover: succulent
	}
]