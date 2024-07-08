import {BiSearch} from "react-icons/bi";

export default function SearchSection() {
	return (
		<div className="relative">
			<input
				className="outline-none focus:outline-indigo-900 rounded-full sectionGra px-4 py-1"
				placeholder="search ..."
			/>

			<button className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
				<BiSearch/>
			</button>
		</div>
	);
}