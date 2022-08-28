import { createSignal, For } from 'solid-js'
import IconHamburger from '../assets/images/icon-hamburger.svg'
import IconClose from '../assets/images/icon-close.svg'

const links = [
	{ href: '/about', text: 'Our company' },
	{ href: '/locations', text: 'Locations' },
	{ href: '/contact', text: 'Contact' },
]

export default function MobileMenu() {
	const [isOpen, setIsOpen] = createSignal(false)
	const toggleIsOpen = () => setIsOpen((state) => !state)

	return (
		<div class="md:hidden">
			<button onClick={toggleIsOpen}>
				{isOpen() ? (
					<img
						src={IconClose}
						alt="Close menu"
						width={20}
						height={20}
					/>
				) : (
					<img
						src={IconHamburger}
						alt="Open menu"
						width={24}
						height={20}
					/>
				)}
			</button>

			<div class="absolute inset-x-0 top-24 z-10 overflow-hidden">
				<div
					class="-z-10 space-y-8 bg-black px-6 py-12 text-white transition-transform duration-300"
					classList={{ 'translate-y-0': isOpen(), '-translate-y-80': !isOpen() }}
				>
					<For each={links}>
						{({ href, text }) => (
							<div class="text-2xl uppercase leading-6 tracking-[2px]">
								<a href={href}>{text}</a>
							</div>
						)}
					</For>
				</div>
			</div>

			{isOpen() && (
				<div
					class="fixed inset-x-0 top-24 bottom-0 -z-10 bg-black/50"
					onClick={toggleIsOpen}
				/>
			)}
		</div>
	)
}
