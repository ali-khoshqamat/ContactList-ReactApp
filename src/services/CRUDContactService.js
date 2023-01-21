import http from "./httpService";

export function getContacts() {
  // return http.get("/contacts");
  return http.get("");
}

export function getContact(id) {
  // return http.get(`/contacts/${id}`);
  return http.get(`/${id}`);
}

export function postContact(bodyRequest) {
  // return http.post("/contacts", bodyRequest);
  return http.post("", bodyRequest);
}

export function putContact(id, bodyRequest) {
  // return http.put(`/contacts/${id}`, bodyRequest);
  return http.put(`/${id}`, bodyRequest);
}

export function deleteContact(id) {
  // return http.delete(`/contacts/${id}`);
  return http.delete(`/${id}`);
}
