'use strict';

import { connectModal } from 'redux-modal';
import Modal from './modal';

export default connectModal({
  name: 'pdfViewerModal',
  destroyOnHide: false
})(Modal);
