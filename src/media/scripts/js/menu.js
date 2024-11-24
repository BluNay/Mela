document.getElementById("openBtn").addEventListener("click", function (e) {
	e.preventDefault();
	document.getElementById("mySidenav").classList.add("active");
});

document.getElementById("closeBtn").addEventListener("click", function (e) {
	e.preventDefault();
	document.getElementById("mySidenav").classList.remove("active");
});
