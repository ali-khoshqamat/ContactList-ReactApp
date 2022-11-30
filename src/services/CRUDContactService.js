import http from "./httpService";

export function getContacts() {
  return http.get("/contacts");
}

export function getContact(id) {
  return http.get(`/contacts/${id}`);
}

export function postContact(bodyRequest) {
  return http.post("/contacts", bodyRequest);
}

export function putContact(id, bodyRequest) {
  return http.put(`/contacts/${id}`, bodyRequest);
}

export function deleteContact(id) {
  return http.delete(`/contacts/${id}`);
}
