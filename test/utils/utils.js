function validateFormData(name, email) {
    // Memastikan bahwa name dan email adalah string yang tidak kosong dan tidak hanya whitespace
    return Boolean(name.trim() && email.trim());
}


module.exports = { validateFormData };

