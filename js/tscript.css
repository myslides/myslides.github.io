document.getElementById('startTest').addEventListener('click', async () => {
    const downloadSpeeds = [];
    const uploadSpeeds = [];

    for (let i = 0; i < 3; i++) {
        const { download, upload } = await speedTest();
        downloadSpeeds.push(download);
        uploadSpeeds.push(upload);
        displayResults(download, upload);
        await new Promise(resolve => setTimeout(resolve, 3000)); // Wait before the next test
    }

    const averageDownload = average(downloadSpeeds);
    const averageUpload = average(uploadSpeeds);
    document.getElementById('averageResult').innerText = `Average Download: ${averageDownload} Mbps, Average Upload: ${averageUpload} Mbps`;
    document.getElementById('results').classList.remove('hidden');
});

async function speedTest() {
    // Simulate speed test (replace with actual logic)
    const downloadSpeed = Math.random() * 100; // Mock download speed
    const uploadSpeed = Math.random() * 100; // Mock upload speed
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ download: downloadSpeed.toFixed(2), upload: uploadSpeed.toFixed(2) });
        }, 2000); // Simulate delay
    });
}

function average(arr) {
    return (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2);
}

function displayResults(download, upload) {
    document.getElementById('downloadResult').innerText = download + ' Mbps';
    document.getElementById('uploadResult').innerText = upload + ' Mbps';
}
