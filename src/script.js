document.getElementById('form-kontak').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('/submit-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nama, email })
        });

        const result = await response.json();
        document.getElementById('pesan-respons').textContent = result.message;
    } catch (error) {
        document.getElementById('pesan-respons').textContent = 'Terjadi kesalahan saat mengirimkan formulir.';
    }
});
