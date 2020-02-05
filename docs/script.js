"use strict";

(function CreateTable() {
	let data = [{
			id: "AF-A00000",
			origin: "Новый партнер",
			created: "28.01.2020 12:05:05",
			text: "large text large text large text large text large text",
			contacts: {
				phone: "+38 (050) 413-01-22",
				name: "Irina"
			},
			status: "confirmed",
			note: null
		},
		{
			id: "AF-A00001",
			origin: "Новый партнер",
			created: "28.01.2020 12:05:05",
			text: "some text",
			contacts: {
				phone: "+38 (050) 413-01-23",
				name: "Igor"
			},
			status: "rejected",
			note: null
		},
		{
			id: "AF-A00002",
			origin: "Новый партнер",
			created: "28.01.2020 12:05:05",
			text: "some text",
			contacts: {
				phone: "+38 (050) 413-01-24",
				name: "Galina"
			},
			status: "confirmed",
			note: null
		},
		{
			id: "AF-A00003",
			origin: "Новый партнер",
			created: "28.01.2020 12:05:05",
			text: "some text",
			contacts: {
				phone: "+38 (050) 413-01-25",
				name: "Valentin"
			},
			status: "confirmed",
			note: 'hello'
		},
		{
			id: "AF-A00004",
			origin: "Новый партнер",
			created: "28.01.2020 12:05:05",
			text: "some text",
			contacts: {
				phone: "+38 (050) 413-01-26",
				name: "Nik"
			},
			status: "confirmed",
			note: null
		},
		{
			id: "AF-A00005",
			origin: "Новый партнер",
			created: "28.01.2020 12:05:05",
			text: "some text",
			contacts: {
				phone: "+38 (050) 413-01-27",
				name: "Peter"
			},
			status: "pending",
			note: null
		},
		{
			id: "AF-A00006",
			origin: "Новый партнер",
			created: "28.01.2020 12:05:05",
			text: "some text",
			contacts: {
				phone: "+38 (050) 413-01-28",
				name: "Vladislav"
			},
			status: "confirmed",
			note: null
		},
		{
			id: "AF-A00007",
			origin: "Новый партнер",
			created: "28.01.2020 12:05:05",
			text: "some text",
			contacts: {
				phone: "+38 (050) 413-01-29",
				name: "Gleb"
			},
			status: "pending",
			note: null
		}
	]

	let column = [];
	for (let i = 0; i < data.length; i++) {
		for (let key in data[i]) {
			if (column.indexOf(key) === -1) {
				column.push(key);
			}
		}
	}

	let table = document.createElement("table");
	let container = document.getElementById("container");
	let tr = table.insertRow();

	for (let i = 0; i < column.length; i++) {
		let th = document.createElement("th");
		th.innerHTML = column[i];
		tr.appendChild(th);
	}

	function expandText(class1, class2) {
		let fullBlock = document.createElement("div");
		let textBlock = document.createElement("textarea");
		let fullText = document.createTextNode(document.getElementsByClassName(class1)[class2].innerHTML);
		let headBlock = document.createElement("h2");
		let headText = document.createTextNode(document.getElementsByClassName("idstyle")[class2].innerHTML);
		let iconClose = document.createElement("div");

		textBlock.cols = "20";
		textBlock.rows = "8";
		textBlock.readOnly = true;

		textBlock.classList.add("textblock");
		fullBlock.classList.add("fullblock");
		textBlock.classList.add("textblock");
		headBlock.classList.add("headblock");
		iconClose.classList.add("iconclose");

		textBlock.appendChild(fullText);
		headBlock.appendChild(headText);
		fullBlock.appendChild(headBlock);
		fullBlock.appendChild(iconClose);
		fullBlock.appendChild(textBlock);
		container.appendChild(fullBlock);

		function closer() {
			container.removeChild(fullBlock);
		}

		iconClose.addEventListener("click", closer);
	}

	function expandNote(class1, class2) {
		let fullBlock = document.createElement("div");
		let sendForm = document.createElement("form");
		let textBlock = document.createElement("textarea");
		let fullText = document.createTextNode(document.getElementsByClassName(class1)[class2].innerHTML);
		let headBlock = document.createElement("h2");
		let headText = document.createTextNode(document.getElementsByClassName("idstyle")[class2].innerHTML);
		let iconClose = document.createElement("div");
		let btn = document.createElement("INPUT");

		textBlock.cols = "20";
		textBlock.rows = "8";
		btn.setAttribute("type", "submit");
		btn.setAttribute("value", "Сохранить");

		textBlock.classList.add("textblock");
		fullBlock.classList.add("fullblock");
		headBlock.classList.add("headblock");
		iconClose.classList.add("iconclose");
		btn.classList.add("btn");

		textBlock.appendChild(fullText);
		headBlock.appendChild(headText);
		fullBlock.appendChild(headBlock);
		fullBlock.appendChild(iconClose);
		fullBlock.appendChild(sendForm);
		sendForm.appendChild(textBlock);
		sendForm.appendChild(btn);
		container.appendChild(fullBlock);

		function closer() {
			container.removeChild(fullBlock);
		}

		iconClose.addEventListener("click", closer);

		function changeContent() {
			document.getElementsByClassName(class1)[class2].classList.add("img-add");
			if (textBlock.value !== null) {
				document.getElementsByClassName(class1)[class2].innerHTML = textBlock.value;
				document.getElementsByClassName(class1)[class2].classList.remove("img-add");
            }
            closer();
		}

		sendForm.setAttribute("onsubmit", "changeContent(); return false");
		sendForm.addEventListener("submit", changeContent);

	}


	for (let i = 0; i < data.length; i++) {
		tr = table.insertRow();
		for (let j = 0; j < column.length; j++) {
			if (column[j] === "contacts") {
				let cell = tr.insertCell();
				cell.innerHTML = data[i][column[j]]['phone'] + ' ' + data[i][column[j]]['name'];
			} else if (column[j] === "text") {
				let cell = tr.insertCell();
				cell.innerHTML = data[i][column[j]];
				cell.classList.add("textstyle", i);
				cell.addEventListener("dblclick", function () {
					expandText("textstyle", i);
				});
			} else if (column[j] === "note") {
				if (data[i][column[j]] === null) {
					let cell = tr.insertCell();
					cell.classList.add("notestyle", i, "img-add");
					cell.addEventListener("click", function () {
						expandNote("notestyle", i);
					});
				} else {
					let cell = tr.insertCell();
					cell.innerHTML = data[i][column[j]];
					cell.classList.add("notestyle", i);
					cell.addEventListener("click", function () {
						expandNote("notestyle", i);
					});
				}
			} else if (column[j] === "id") {
				let cell = tr.insertCell();
				cell.innerHTML = data[i][column[j]];
				cell.classList.add("idstyle", i);
			} else {
				let cell = tr.insertCell();
				cell.innerHTML = data[i][column[j]];
			}
		}
	}

	container.setAttribute("style", "position: relative");
	container.innerHTML = "";
	container.appendChild(table);


}());