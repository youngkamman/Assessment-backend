const peopleContainer = document.querySelector('#people-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/people`

const peopleCallback = ({ data: people }) => displayPeople(people)
const errCallback = err => console.log(err)

const getAllPeople = () => axios.get(baseURL).then(peopleCallback).catch(errCallback)
const createPeople = body => axios.post(baseURL, body).then(peopleCallback).catch(errCallback)
const deletePeople = id => axios.delete(`${baseURL}/${id}`).then(peopleCallback).catch(errCallback)
const updatePeople = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(peopleCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let age = document.querySelector('#age')
    let gender = document.querySelector('#gender')

    let bodyObj = {
        name: name.value,
        age: age.value, 
        gender: gender.value
    }

    createPeople(bodyObj)

    name.value = ''
    age.value = ''
    gender.value = ''
}

function createPeopleCard(people) {
    const peopleCard = document.createElement('div')
    peopleCard.classList.add('people-card')

    peopleCard.innerHTML = `<img alt='people cover image' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" class="people-cover-image"/>
    <p class="name">${people.name}</p>
    <div class="btns-container">
        <button onclick="updatePeople(${people.id}, 'minus')">-</button>
        <p class="people-age">${people.age}</p>
        <p class="people-gender">${people.gender}</p>
        <button onclick="updatePeople(${people.id}, 'plus')">+</button>
        </div>
    <button onclick="deletePeople(${people.id})">delete</button>
    `


    peopleContainer.appendChild(peopleCard)
}

function displayPeople(arr) {
    peopleContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createPeopleCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllPeople()