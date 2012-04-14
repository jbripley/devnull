function reverseStringRemoveMiddle(str) {
	var reversedString = str.split("").reverse().join("");;
	var halfLength = Math.floor(reversedString.length / 2);
	
	var removedMiddleString = reversedString.substring(0, halfLength) + reversedString.substring(halfLength + 1, reversedString.length);
	
	return removedMiddleString;
}