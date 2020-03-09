import React from "react"

export const ContextEs = {
  lang: "es",
  langWithCode: "es-mx",
  texts: {
    title: "inicio",
    keywords: "Español",
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
    aplied: "Más Información",
    eventType: "Tipo de evento",
    english: "Inglés",
    spanish: "Español",
    recentEntries: "Entradas recientes",
    archive: "Archivo",
    to: "a",
    recentNews: "Noticias recientes",
    thanksForSendingYourMessage: "Gracias por enviar tu mensaje",
  },
}

export const ContextEn = {
  lang: "en",
  langWithCode: "en-us",
  texts: {
    title: "Home",
    keywords: "English",
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
    aplied: "More Information",
    eventType: "Event type",
    english: "English",
    spanish: "Spanish",
    recentEntries: "Recent Entries",
    archive: "Archive",
    to: "to",
    recentNews: "Recent news",
    thanksForSendingYourMessage: "Thanks for sending your message",
  },
}

export const Context = React.createContext(ContextEn)
