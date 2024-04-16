function readContent(postNumber) {
    const content = document.getElementById('post'+postNumber)
    const readMore = document.getElementById('read-button'+postNumber)

    if (content.style.display === 'none') {
        content.style.display = 'block'
        readMore.textContent = 'Hide Content...'
    }
    else
    {
        content.style.display = 'none'
        readMore.textContent = 'Read Content...'
    }
}