import validator from 'validator';

class FormValidator {

    constructor(validations){
        this.validations = validations;
    }

    validate(state){

        let validation = this.validated();

        this.validations.forEach(rule => {
            
            const fieldValue = state[rule.field.toString()];
            const args = rule.args || [];
            
            const methodValidation = typeof rule.method === 'string' ?
                    validator[rule.method] : rule.method;
            
            if (methodValidation(fieldValue, ...args, state) !== rule.validWhen){

                validation[rule.field] = {
                    isInvalid: true,
                    message: rule.message
                };

                validation.isValid = false;
            }
        });

        return validation;
    }

    validated(){

        const validation = {};

        this.validations.map(rule => (
            validation[rule.field] = { isValid: false, message: ''}
        ));

        return { isValid: true, ...validation};
    }
}
export default FormValidator;