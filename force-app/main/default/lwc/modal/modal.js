import { LightningElement, api } from 'lwc';

const CSS_CLASS = 'modal-hidden';

export default class Modal extends LightningElement {
    @api showModal = false;
    @api
    set header(value) {
        this.hasHeaderString = value !== '';
        this._headerPrivate = value;
    }
    get header() {
        return this._headerPrivate;
    }

    hasHeaderString = false;
    _headerPrivate;

    @api show() {
        this.showModal = true;
    }

    @api hide() {
        this.showModal = false;
    }

    handleDialogClose() {
        const closedialog = new CustomEvent('closedialog');
        this.dispatchEvent(closedialog);
        this.hide();
    }

    handleSlotTaglineChange() {
        const taglineEl = this.template.querySelector('p');
        taglineEl.classList.remove(CSS_CLASS);
    }

    handleSlotFooterChange() {
        const footerEl = this.template.querySelector('footer');
        footerEl.classList.remove(CSS_CLASS);
    }
}