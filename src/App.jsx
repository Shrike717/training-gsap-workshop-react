import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import {
	GsapFrom,
	GsapFromTo,
	GsapScrollTrigger,
	GsapStagger,
	GsapText,
	GsapTimeline,
	GsapTo,
	Home,
} from './pages';

const App = () => {
	return (
		// Um einen Home-Button zu Ihrer React Vite App hinzuzufügen, der es ermöglicht, von jeder Seite aus zur Startseite zurückzukehren, können Sie den Button innerhalb des <Router>-Elements, aber außerhalb des <Routes>-Elements platzieren. Dies stellt sicher, dass der Button auf allen Seiten sichtbar ist.
		<div className=' bg-zinc-900 min-h-screen w-full'>
			<Router>
				{/* Home-Button hinzufügen */}
				<div className='p-4 text-center'>
					<Link to='/'>
						<button>Home</button>
					</Link>
				</div>
				<Routes>
					<Route path='/gsapto' element={<GsapTo />} />
					<Route path='/gsapfrom' element={<GsapFrom />} />
					<Route path='/gsapfromto' element={<GsapFromTo />} />
					<Route path='/gsaptimeline' element={<GsapTimeline />} />
					<Route path='/gsapstagger' element={<GsapStagger />} />
					<Route
						path='/gsapscrolltrigger'
						element={<GsapScrollTrigger />}
					/>
					<Route path='/gsaptext' element={<GsapText />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
