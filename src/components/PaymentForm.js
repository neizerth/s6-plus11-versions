import Inputmask from "inputmask";
import validate from 'validate.js';

export default class PaymentForm {
    constructor(container) {
        this.container = container;
    }
    init() {
        this.initMasks();
        this.initEvents();
    }
    initEvents() {
        this.container.addEventListener('submit', e => {
            e.preventDefault();

            const result = this.validate();
            this.displayErrors(result);
        });
    }
    getData() {
        const formData = new FormData(this.container);
        return Object.fromEntries(formData.entries());
    }
    displayErrors(errors) {
        console.log({
            errors
        });
    }
    validate() {
        const rules = this.getValidationRules();
        const data = this.getData();
        return validate(data, rules);
    }
    initMasks() {
        const phone = this.container.querySelector('.payment-form__phone');
        const card = this.container.querySelector('.payment-form__card');
        Inputmask({"mask": "+7 (999) 999-9999" }).mask(phone);
        Inputmask({"mask": "9999 9999 9999 9999" }).mask(card);
    }
    getValidationRules() {
        return {
            userEmail: {
                email: true
            },
            creditCard: {
                format: {
                    pattern: /^\d{4} \d{4} \d{4} \d{4}$/,
                    message: 'Неправильный номер карты'
                }
            }
        }
    }
}

