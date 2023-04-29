function ah() {
	for (i = 0; i < 1000000000000; i++) {
		console.log(i)
		lag()
	}
}
function lag() {
	for (i = 0; i < 500000; i++) {
		console.log(i)
		ah();
	}
}