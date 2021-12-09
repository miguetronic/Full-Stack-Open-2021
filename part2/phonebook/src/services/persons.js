import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
};

const createPerson = (newObjectPerson) => {
    const request = axios.post(baseUrl, newObjectPerson)
    return request.then(response => response.data)
};

const deletePerson = (id) => {
    const urlId = baseUrl + "/" + id
    const request = axios.delete(urlId)
    return request.then(response => response.data)
};

const updatePerson = (id, newObjectPerson) => {
    const urlId = baseUrl + "/" + id
    const request = axios.put(urlId, newObjectPerson)
    return request.then(response => response.data)
};

const personService = { getAllPersons, createPerson, deletePerson, updatePerson };

export default personService