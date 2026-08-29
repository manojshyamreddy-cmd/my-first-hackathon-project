function calculateRent() {

    // Get values from inputs
    let rent = Number(document.getElementById("rent").value);
    let utilities = Number(document.getElementById("utilities").value);
    let roommates = Number(document.getElementById("roommates").value);
    let income = Number(document.getElementById("income").value);
    let percentage = Number(document.getElementById("percentage").value);

    // Calculate total housing cost
    let total = rent + utilities;

    // Calculate cost per person
    let perPerson = total / roommates;

    // Calculate housing cost percentage
    let housingPercentage = (total / income) * 100;

    // Show results
    document.getElementById("total").innerText = "₹" + total;
    document.getElementById("perPerson").innerText = "₹" + perPerson.toFixed(2);
    document.getElementById("housingPercentage").innerText =
        housingPercentage.toFixed(1) + "%";

    // Check affordability
    if (housingPercentage <= percentage) {

        document.getElementById("message").innerText =
            "✅ This housing cost is affordable.";

    } else {

        document.getElementById("message").innerText =
            "⚠️ This housing cost is above your affordable limit.";
    }
}