import { FC, lazy } from 'react'
import { Route, Routes } from 'react-router'

const Home = lazy(() => import('pages/Home'))

const Combat = lazy(() => import('pages/Combat'))

const Agriculture = lazy(() => import('pages/skills/Agriculture'))
const Alchemy = lazy(() => import('pages/skills/Alchemy'))
const Arcane = lazy(() => import('pages/skills/Arcane'))
const Architecture = lazy(() => import('pages/skills/Architecture'))
const Artificer = lazy(() => import('pages/skills/Artificer'))
const Astronomy = lazy(() => import('pages/skills/Astronomy'))
const Culinary = lazy(() => import('pages/skills/Culinary'))
const Dungeoneering = lazy(() => import('pages/skills/Dungeoneering'))
const Excavation = lazy(() => import('pages/skills/Excavation'))
const Hunter = lazy(() => import('pages/skills/Hunter'))
const Fishing = lazy(() => import('pages/skills/Fishing'))
const Mining = lazy(() => import('pages/skills/Mining'))
const Slayer = lazy(() => import('pages/skills/Slayer'))
const Smithing = lazy(() => import('pages/skills/Smithing'))
const Sorcery = lazy(() => import('pages/skills/Sorcery'))
const Strength = lazy(() => import('pages/skills/Strength'))
const Survival = lazy(() => import('pages/skills/Survival'))

const Storage = lazy(() => import('pages/buildings/Storage'))

const Dev = lazy(() => import('pages/Dev'))

const AppRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />

			<Route path='/combat' element={<Combat />} />

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

			<Route path='/storage' element={<Storage />} />

			<Route path='/dev' element={<Dev />} />
		</Routes>
	)
}

export default AppRoutes