const form = document.getElementById("placementForm");

const result = document.getElementById("result");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const indexNumber = document.getElementById("indexNumber").value;

    const examYear = document.getElementById("examYear").value;

    if (indexNumber.trim() === "") {

        result.textContent = "Please enter your index number.";

        return;

    }

    result.innerHTML = `
        <h3>Demo Placement Result</h3>
        <p><strong>Index Number:</strong> ${indexNumber}</p>
        <p><strong>Examination Year:</strong> ${examYear}</p>
        <p>This is a demonstration only.
        No actual placement record was retrieved.</p>
    `;

});