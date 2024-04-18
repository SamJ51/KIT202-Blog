const form = document.forms['post-create'];
if (form) {
  form.addEventListener("submit", validateForm);
} else {
  console.error(
    "Unable to find the registration form; no validation will be performed"
  );
}

function isEmpty(field) {
    if (field === "") {
        return true;
    }
    else
    {
        return false;
    }
}

function validateForm(event) {
    const title = form['title'].value;
    const titleLength = form['title'].value.length;
    const tags = form['tags'].value;
    const content = form['content'].value;
    const MAX_TITLE_LENGTH = 80;

   if (titleLength > MAX_TITLE_LENGTH) {
    titleTooBig.style.display = 'block';
    event.preventDefault();
  }
  else
  {
    titleTooBig.style.display = 'none';
  }

    if (isEmpty(title)) {
      titleEmpty.style.display = 'block';
      event.preventDefault();
    } 
    else 
    {
      titleEmpty = 'none';
    }

    if(isEmpty(tags)) {
      tagsEmpty.style.display = 'block';
      event.preventDefault();
    }
    else
    {
      tagsEmpty.style.display = 'none';
    }

    if(isEmpty(content)) {
      contentEmpty.style.display = 'block';
      event.preventDefault();
    }
    else
    {
      contentEmpty.style.display = 'none';
    }
    
}