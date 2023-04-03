export const isEmail = (text) => {
	var pattern = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
	return pattern.test(text)
}
export const isPhone = (phone) => {
	var pattern = /^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
	return pattern.test(phone)
}