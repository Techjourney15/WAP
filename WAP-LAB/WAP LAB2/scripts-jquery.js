$(function () {
  const $form = $('#container_add_note');
  const $noteInput = $('#txt_add_note');
  const $notes = $('.notes');
  let counter = parseInt(localStorage.getItem('counter'), 10) || 0;

  for (let i = 1; i <= counter; i++) {
    const key = `user${i}`;
    const value = localStorage.getItem(key);
    if (value) {
      const checked = localStorage.getItem(`${key}_checked`) === 'true';
      addNoteToDOM(key, value, checked);
    }
  }

  $form.on('submit', function (event) {
    event.preventDefault();
    counter += 1;
    localStorage.setItem('counter', counter);

    const key = `user${counter}`;
    const value = $noteInput.val();
    localStorage.setItem(key, value);
    addNoteToDOM(key, value, false);
    $noteInput.val('');
  });

  $notes.on('click', '.btn_delete', function () {
    const $container = $(this).closest('.container_new_note');
    const key = $container.data('key');
    localStorage.removeItem(key);
    localStorage.removeItem(`${key}_checked`);
    $container.remove();
    console.log('Delete button clicked!');
  });

  $notes.on('change', '.checkbox', function () {
    const $container = $(this).closest('.container_new_note');
    const key = $container.data('key');
    localStorage.setItem(`${key}_checked`, this.checked);
    console.log('Checkbox changed!');
  });

  function addNoteToDOM(key, noteName, checked = false) {
    $notes.append(`
        <div class="container_new_note" data-key="${key}">
            <input class="checkbox" type="checkbox" ${checked ? 'checked' : ''}>
            <div class="note_name_display">${noteName}</div>
            <button class="btn_delete">Delete</button>
        </div>
     `);
  }
});
