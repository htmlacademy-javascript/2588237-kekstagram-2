import { getData, sendData } from './server.js';
import { showAlert} from './utils.js';
import { setOnFormSubmit, hideModal } from './form.js';
import { showSuccessMessage, showErrorMessage} from './message.js';
import { renderGallery } from './modal-picture.js';

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

  renderGallery(data);
} catch {
  showAlert();
}
