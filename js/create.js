const form = document.forms['postCreate'];
if (form) {
  form.addEventListener("submit", validateForm);
} else {
  console.error(
    "Unable to find the registration form; no validation will be performed"
  );
}

// check if field is empty (implemented as a function as it can be used multiple times)
function isEmpty(field) {
  return field === "";
}

function validateForm(event) {
  let titleC = form['title'].value;
  let titleLength = form['title'].value.length;
  let tagsC = form['tags'].value;
  let contentC = form['content'].value;
  let MAX_TITLE_LENGTH = 80;

  if (titleLength > MAX_TITLE_LENGTH) {
    titleTooBig.style.display = 'block';
    title.style.border = '2px solid red';
    titleLabel.style.color = 'red';
    titleLabel.style.fontWeight = 'bold';
    titleEmpty.style.display = 'none';
    event.preventDefault();
  }
  else {
    titleTooBig.style.display = 'none';
    title.style.border = '1px solid #CCC';
    titleLabel.style.color = 'black';
    titleLabel.style.fontWeight = 'normal';

    if (isEmpty(titleC)) {
      titleEmpty.style.display = 'block';
      title.style.border = '2px solid red';
      titleLabel.style.color = 'red';
      titleLabel.style.fontWeight = 'bold';
      event.preventDefault();
    }
    else {
      titleEmpty.style.display = 'none';
      title.style.border = '1px solid #CCC';
      titleLabel.style.color = 'black';
      titleLabel.style.fontWeight = 'normal';
    }
  }

  if (isEmpty(tagsC)) {
    tagsEmpty.style.display = 'block';
    tags.style.border = '2px solid red';
    tagsLabel.style.color = 'red';
    tagsLabel.style.fontWeight = 'bold';
    event.preventDefault();
  }
  else {
    tagsEmpty.style.display = 'none';
    tags.style.border = '1px solid #CCC';
    tagsLabel.style.color = 'black';
    tagsLabel.style.fontWeight = 'normal';
  }

  if (isEmpty(contentC)) {
    contentEmpty.style.display = 'block';
    content.style.border = '2px solid red';
    contentLabel.style.color = 'red';
    contentLabel.style.fontWeight = 'bold';
    event.preventDefault();
  }
  else {
    contentEmpty.style.display = 'none';
    content.style.border = '1px solid #CCC';
    contentLabel.style.color = 'black';
    contentLabel.style.fontWeight = 'normal';
  }

}