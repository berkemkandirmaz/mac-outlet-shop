function show(id, speed) {
	setTimeout(() => {
		let vars;
		let ID = setInterval(() => {
			vars = Number(document.getElementById(id).style.opacity);
			if (vars >= 1) {
				clearInterval(ID);
			} else vars += 0.1;
			document.getElementById(id).style.opacity = vars;
		}, speed);
	}, speed);
}

function close(id, speed) {
	setTimeout(() => {
		let anotherVars;
		let AnotherID = setInterval(() => {
			anotherVars = Number(document.getElementById(id).style.opacity);
			if (anotherVars <= 0) {
				clearInterval(AnotherID);
				document.getElementById(id).style.display = "none";
			} else anotherVars -= 0.1;
			document.getElementById(id).style.opacity = anotherVars;
		}, speed);
	}, speed);
}

window.onload = function () {
	const searchFormSort = document.getElementById("search-form__sort");
	const searchSubSort = document.getElementById("search-sub__sort");
	const searchFormFilter = document.getElementById("search-form__filter");
	const searchSubFilter = document.getElementById("filter-sub__sort");

	searchFormSort.onclick = () => {
		if (searchSubFilter.style.display !== "none") {
			close("filter-sub__sort", 50);
		}

		if (searchSubSort.style.display == "none") {
			searchSubSort.style.display = "block";
			searchSubSort.style.opacity = 0;
			show("search-sub__sort", 50);
			return false;
		} else {
			searchSubSort.style.opacity = 1;
			close("search-sub__sort", 50);
			return false;
		}
	};

	searchSubSort.onclick = (e) => {
		let target = e.target;

		if (target.className !== "search-sub__input") return;
		setTimeout(() => {
			close("search-sub__sort", 50);
		}, 100);
	};

	searchFormFilter.onclick = () => {
		if (searchSubSort.style.display !== "none") {
			close("search-sub__sort", 50);
		}

		if (searchSubFilter.style.display == "none") {
			searchSubFilter.style.display = "flex";
			searchSubFilter.style.opacity = 0;
			show("filter-sub__sort", 50);
			return false;
		} else {
			searchSubFilter.style.opacity = 1;
			close("filter-sub__sort", 50);
			return false;
		}
	};

	searchSubFilter.onclick = (e) => {
		let target = e.target;

		if (target.className !== "filter-sub__btn") {
			return;
		} else {
			setTimeout(() => {
				close("filter-sub__sort", 50);
			}, 100);
		}
	};
};
