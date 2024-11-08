const { expect } = require('chai');
const { validateFormData } = require('../utils/utils.js');

describe('Form Validation Function', () => {
    it('should return true when both name and email are non-empty strings', () => {
        const result = validateFormData('John Doe', 'john@example.com');
        expect(result).to.be.true;
    });

    it('should return false when name is an empty string', () => {
        const result = validateFormData('', 'john@example.com');
        expect(result).to.be.false;
    });

    it('should return false when email is an empty string', () => {
        const result = validateFormData('John Doe', '');
        expect(result).to.be.false;
    });

    it('should return false when both name and email are empty strings', () => {
        const result = validateFormData('', '');
        expect(result).to.be.false;
    });

    it('should return false when name or email is only whitespace', () => {
        expect(validateFormData('   ', 'john@example.com')).to.be.false;
        expect(validateFormData('John Doe', '   ')).to.be.false;
    });
});
