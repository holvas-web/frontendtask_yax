function myFunction() {
	const name = document.getElementById('formName')
	const lastname = document.getElementById('formLastname')
	const form = document.getElementById('form')
	/*const email = document.getElementById ('formEmail')*/
	const errorElement = document.getElementById('error')

	form.addEventListener('submit', (e) => {
		let messages = []
		if (name.value === '' || name.value == null) {
			messages.push('Pole jest wymagane.')
		}
	
		if (name.value.length <= 2) {
			messages.push('Imię musi być dłuższe niż 2 znaki.')
		}

		if (name.value.length >= 20) {
			messages.push('Imię musi mieć mniej niż 20 znaków.')
		}

		if (lastname.value === '' || lastname.value == null) {
			messages.push('Pole jest wymagane.')
		}

		if (lastname.value.length <= 2) {
			messages.push('Nazwisko musi być dłuższe niż 2 znaki.')
		}

		if (lastname.value.length >= 25) {
			messages.push('Nazwisko musi mieć mniej niż 25 znaków.')
		}
		
		if (messages.length > 0) {
			e.preventDefault()
			errorElement.innerText = messages.join(', ')
		}
	});
}