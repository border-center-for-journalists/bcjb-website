const formatMenuItems = menuItems =>
  menuItems.map(item => {
    if (process.env.NODE_ENV === "development") {
      const DOMAIN_URL = "https://bcjb-website.netlify.com"
      let devUrl = item.item_url.url.replace(
        DOMAIN_URL,
        "http://localhost:8000"
      )
      return { ...item, item_url: { ...item.item_url, url: devUrl } }
    }
    return item
  })

export { formatMenuItems }
