module.exports = function towelSort(matrix) {
	if (!matrix || matrix.length === 0) {
			return [];
	}
	
	const sort = [];
	for (let i = 0; i < matrix.length; i++) {
			if (i % 2 !== 0) {
					sort.push(...matrix[i].reverse());
			} else {
					sort.push(...matrix[i]);
			}
	}
	return sort;
}