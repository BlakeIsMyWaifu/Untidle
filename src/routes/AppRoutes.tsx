import { FC, lazy } from 'react'
import { Route, Routes } from 'react-router'

const Home = lazy(() => import('pages/Home'))

const Storage = lazy(() => import('pages/Storage/Storage'))

const Agriculture = lazy(() => import('pages/Agriculture/Agriculture'))
const Alchemy = lazy(() => import('pages/Alchemy'))
const Arcane = lazy(() => import('pages/Arcane'))
const Architecture = lazy(() => import('pages/Architecture'))
const Artificer = lazy(() => import('pages/Artificer'))
const Astronomy = lazy(() => import('pages/Astronomy'))
const Culinary = lazy(() => import('pages/Culinary'))
const Dungeoneering = lazy(() => import('pages/Dungeoneering'))
const Excavation = lazy(() => import('pages/Excavation'))
const Hunter = lazy(() => import('pages/Hunter'))
const Fishing = lazy(() => import('pages/Fishing'))
const Mining = lazy(() => import('pages/Mining'))
const Slayer = lazy(() => import('pages/Slayer'))
const Smithing = lazy(() => import('pages/Smithing'))
const Sorcery = lazy(() => import('pages/Sorcery'))
const Strength = lazy(() => import('pages/Strength'))
const Survival = lazy(() => import('pages/Survival/Survival'))

const Dev = lazy(() => import('pages/Dev/Dev'))

const AppRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/storage' element={<Storage />} />
			<Route path='/agriculture' element={<Agriculture />} />
			<Route path='/alchemy' element={<Alchemy />} />
			<Route path='/arcane' element={<Arcane />} />
			<Route path='/architecture' element={<Architecture />} />
			<Route path='/artificer' element={<Artificer />} />
			<Route path='/astronomy' element={<Astronomy />} />
			<Route path='/culinary' element={<Culinary />} />
			<Route path='/dungeoneering' element={<Dungeoneering />} />
			<Route path='/excavation' element={<Excavation />} />
			<Route path='/hunter' element={<Hunter />} />
			<Route path='/fishing' element={<Fishing />} />
			<Route path='/mining' element={<Mining />} />
			<Route path='/slayer' element={<Slayer />} />
			<Route path='/smithing' element={<Smithing />} />
			<Route path='/sorcery' element={<Sorcery />} />
			<Route path='/strength' element={<Strength />} />
			<Route path='/survival' element={<Survival />} />
			<Route path='/dev' element={<Dev />} />
		</Routes>
	)
}

export default AppRoutes