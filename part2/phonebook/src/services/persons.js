import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createPerson = (newObjectPerson) => {
    const request = axios.post(baseUrl, newObjectPerson)
    return request.then(response => response.data)
}

const personService = {getAllPersons, createPerson };

export default personService