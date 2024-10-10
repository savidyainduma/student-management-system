export default function Validation (values) {
    const errors = {}

    const number_pattern = /^[0-9]+$/;

    if(!number_pattern.test(values.ContactNumber)){
        errors.number = "Phone number must contain digits only"
    }
    
    if(!number_pattern.test(values.ParentContact)){
        errors.parent = "Parent's contact must contain digits only"
    }

    return errors;
}