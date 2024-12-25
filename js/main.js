import { getData, sendData } from './server.js';
import { showAlert, debounce} from './utils.js';
import { setOnFormSubmit, hideModal } from './form.js';
import { showSuccessMessage, showErrorMessage} from './message.js';
import { renderGallery } from './modal-picture.js';
import {init as initFilter, getFilteredPictures} from './filter.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);

    hideModal();

    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  const debouncedRenderGallery = debounce(renderGallery);

  initFilter(data, debouncedRenderGallery);
  renderGallery(getFilteredPictures());
} catch {
  showAlert();
}
