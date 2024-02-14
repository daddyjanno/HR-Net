interface Input {
    regex: RegExp
    errorMessage: string
}
interface Form {
    [index: string]: Input
}
export const formValidationRules: Form = {
    firstName: {
        regex: /([a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+){2,}/,
        errorMessage: 'min. 2 characters',
    },
    lastName: {
        regex: /([a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+){2,}/,
        errorMessage: 'min. 2 characters',
    },
    dateOfBirth: {
        regex: /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/,
        errorMessage: 'must be a valid date',
    },
    startDate: {
        regex: /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/,
        errorMessage: 'must be a valid date',
    },
    department: {
        regex: /([A-Za-z]+)/,
        errorMessage: 'choose an option',
    },
    street: {
        regex: /^[a-zA-Z0-9\s,''-]+$/,
        errorMessage: 'must be a valid street',
    },
    city: {
        regex: /([A-Za-z]+)/,
        errorMessage: 'must be a valid city',
    },
    state: {
        regex: /([A-Za-z]+)/,
        errorMessage: 'choose an option',
    },
    zipCode: {
        regex: /^0*?[0-9]\d*$/,
        errorMessage: 'must be a valid code',
    },
}
