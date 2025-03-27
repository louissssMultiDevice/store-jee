function showOptions(product) {
    let options = document.getElementById(`${product}-options`);
    if (options.style.display === "block") {
        options.style.display = "none";
    } else {
        options.style.display = "block";
    }
}

function buyProduct(product) {
    let selectedValue;
    let message;

    if (product === "diamond") {
        selectedValue = document.getElementById("diamond-select").value;
        message = `Halo, saya ingin membeli diamond seharga Rp ${selectedValue}`;
    } else if (product === "skin") {
        selectedValue = document.getElementById("skin-select").value;
        message = `Halo, saya ingin membeli skin MLBB: ${selectedValue}`;
    }

    let whatsappURL = `https://wa.me/6282129922973?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}
