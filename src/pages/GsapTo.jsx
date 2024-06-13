import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GsapTo = () => {
	// TODO: Implement the gsap.to() method
	// The gsap.to() method is used to animate elements from their current state to a new state.
	// The gsap.to() method is similar to the gsap.from() method, but the difference is that the gsap.to() method animates elements from their current state to a new state, while the gsap.from() method animates elements from a new state to their current state.
	// It looks  a bit like a useEffect hook, but it's not.
	useGSAP(() => {
		gsap.to('#blue-box', {
			x: 250, // Move 250px to the right
			duration: 2, // 2 seconds
			repeat: -1, // Repeat forever
			yoyo: true, // Reverse the animation
			rotation: 360, // Rotate 360 degrees
			ease: 'elastic', // Elastic ease
		});
	}, []);

	return (
		<main>
			<h1>GsapTo</h1>

			<p className='mt-5 text-gray-500'>
				The <code>gsap.to()</code> method is used to animate elements
				from their current state to a new state.
			</p>
			<p className='mt-5 text-gray-500'>
				The <code>gsap.to()</code> method is similar to the{' '}
				<code>gsap.from()</code> method, but the difference is that the{' '}
				<code>gsap.to()</code> method animates elements from their
				current state to a new state, while the <code>gsap.from()</code>{' '}
				method animates elements from a new state to their current
				state.
			</p>

			<p className='mt-5 text-gray-500'>
				Read more about the{' '}
				<a
					href='https://greensock.com/docs/v3/GSAP/gsap.to()'
					target='_blank'
					rel='noreferrer noopener nofollow'
				>
					gsap.to()
				</a>{' '}
				method.
			</p>

			<div className='mt-20'>
				<div
					id='blue-box'
					className='w-20 h-20 bg-blue-500 rounded-lg'
				/>
			</div>
		</main>
	);
};

export default GsapTo;
