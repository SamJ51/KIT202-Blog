function readContent(postNumber) {
    const content = document.getElementById('post' + postNumber);
    const readMore = document.getElementById('read-button' + postNumber);

    if (content.style.display === 'block') {
        content.style.display = 'none';
        readMore.textContent = 'Read Content...';
    } else {
        content.style.display = 'block';
        readMore.textContent = 'Hide Content...';
    }
}