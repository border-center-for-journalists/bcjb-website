import React from "react"

export const TextsEs = {
  title: "inicio",
  keywords: ["Español"],
  description: "Descripción en español",
  name: "Nombre",
  email: "Email",
  message: "Mensaje",
  send: "Enviar",
  address: "Dirección",
  phone: "Teléfono",
  workshops: "Talleres",
  contact: "Contacto",
  information: "Información",
  aplied: "Aplica ya",
  eventType: "Tipo de evento",
  english: "Inglés",
  spanish: "Español",
  recentEntries: "Entradas recientes",
  archive: "Archivo",
}

export const TextsEn = {
  title: "Home",
  keywords: ["English"],
  description: "English Description",
  name: "Name",
  email: "Email",
  message: "Message",
  send: "Send",
  address: "Address",
  phone: "Phone",
  workshops: "Workshops",
  contact: "Contact",
  information: "Information",
  aplied: "Register now",
  eventType: "Event type",
  english: "English",
  spanish: "Spanish",
  recentEntries: "Recent Entries",
  archive: "Archive",
}

export const Context = React.createContext({
  lang: "en",
  texts: TextsEn,
})
