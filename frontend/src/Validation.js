export default function Validation (values) {
    const errors = {}

    const number_pattern = /^[0-9]+$/;

    if(!number_pattern.test(values.contact_number)){
        errors.number = "Phone number must contain digits only"
    }
    
    if(!number_pattern.test(values.parent_contact)){
        errors.parent = "Parent's contact must contain digits only"
    }

    return errors;
}