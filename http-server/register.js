const userForm = document.getElementById('user-form')

const retriveEntries = () => {
  let entries = localStorage.getItem('user-entries')
  if (entries) {
    entries = JSON.parse(entries)
  } else {
    entries = []
  }
  return entries
}

const userEntries = retriveEntries()

const displayEntries = () => {
  const entries = retriveEntries()

  const data = entries.map((entry) => {
    const nameCell = `<td>${entry.name}</td>`
    const emailCell = `<td>${entry.email}</td>`
    const passwordCell = `<td>${entry.password}</td>`
    const dobCell = `<td>${entry.dob}</td>`
    const acceptedTermsAndConditionsCell = `<td>${entry.acceptedTermsAndConditions}</td>`

    const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptedTermsAndConditionsCell}</tr>`
    return row
  }).join('\n')

  const table = `<table><tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Dob</th>
            <th>Accepted terms?</th>
    </tr> ${data} </table>`
  const details = document.getElementById('table')
  details.innerHTML = table
}
const saveUserForm = (event) => {
  event.preventDefault()

  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const dob = document.getElementById('dob').value
  const acceptedTermsAndConditions = document.getElementById('acceptTerms').checked

  const currentYr = new Date().getFullYear()
  const birthyr = dob.split('-')
  const year = birthyr[0]

  const age = currentYr - year
  const isValid = (age) => {
    if (age > 55 || age < 18) {
      return false
    } else {
      return true
    }
  }

  if (!isValid(age)) {
    document.getElementById('dob').style = 'border: 2px solid red;'
    return alert('You must be between age 18 and 55.\nYou are not elligible!')
  } else {
    document.getElementById('dob').style = 'border: 2px solid #cccc;'
    const entry = {
      name,
      email,
      password,
      dob,
      acceptedTermsAndConditions
    }

    userEntries.push(entry)

    localStorage.setItem('user-entries', JSON.stringify(userEntries))
    displayEntries()
  }
}

userForm.addEventListener('submit', saveUserForm)
displayEntries()
