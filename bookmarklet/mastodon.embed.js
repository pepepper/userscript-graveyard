javascript:(function()%7Bconst%20domain%20%3D%20window.location.host%3Bconst%20isLongURL%20%3D%20window.location.href.match(%2F%5C%2Fstatuses%5C%2F%2F)%3Blet%20user%3Blet%20id%3Bif%20(isLongURL)%20%7Buser%20%3D%20window.location.pathname.split(%22%2F%22)%5B2%5D%3Bid%20%3D%20window.location.pathname.split(%22%2F%22)%5B4%5D%3B%7D%20else%20%7Buser%20%3D%20window.location.pathname.split(%22%2F%22)%5B1%5D.replace(%22%40%22%2C%22%22)%3Bid%20%3D%20window.location.pathname.split(%22%2F%22)%5B2%5D%3B%7Dconst%20html%20%3D%20%60%3Ciframe%20src%3D%22https%3A%2F%2F%24%7Bdomain%7D%2F%40%24%7Buser%7D%2F%24%7Bid%7D%2Fembed%22%20class%3D%22mastodon-embed%22%20style%3D%22max-width%3A%20100%25%3B%20border%3A%200%22%20width%3D%22400%22%3E%3C%2Fiframe%3E%3Cscript%20src%3D%22https%3A%2F%2F%24%7Bdomain%7D%2Fembed.js%22%20async%3D%22async%22%3E%3C%2Fscript%3E%60%3Bwindow.prompt(%22Embed%20Ctrl%2BC%20to%20copy.%22%2C%20html)%7D)()