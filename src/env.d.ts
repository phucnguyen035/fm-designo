/// <reference types="@astrojs/image/client" />

declare module '*.svg' {
	const content: string
	export default content
}
