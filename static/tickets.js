const ticketForm = document.getElementById("ticketForm");

if (ticketForm) {
  const ticketQty = document.getElementById("ticketQty");
  const ticketType = document.getElementById("ticketType");
  const totalPriceEl = document.getElementById("totalPrice");

  const TICKET_PRICES = {
    general: 18,
    student: 18,
    member: 18
  };

  function updateTotal() {
    const qty = parseInt(ticketQty.value) || 1;
    const type = ticketType.value || "general";
    const total = qty * TICKET_PRICES[type];
    totalPriceEl.textContent = total.toFixed(2);
  }

  ticketQty.addEventListener("input", updateTotal);
  ticketType.addEventListener("change", updateTotal);

  ticketForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let errors = [];

    const visitDate = document.getElementById("visitDate").value;
    const email = document.getElementById("email").value;
    const zip = document.getElementById("zip").value;
    const mailingList = document.getElementById("mailingList").checked;
    const type = ticketType.value;
    const qty = parseInt(ticketQty.value);

    if (!visitDate) errors.push("Please select a visit date.");
    if (!type) errors.push("Please select a ticket type.");
    if (!email) errors.push("Please enter a valid email.");
    if (zip && !/^\d{5}$/.test(zip)) errors.push("Zip code must be 5 digits.");
    if (qty < 1 || qty > 10) errors.push("Quantity must be 1–10.");

    if (errors.length) {
      alert(errors.join("\n"));
      return;
    }

    const order = {
      visitDate,
      ticketType: type,
      quantity: qty,
      total: qty * TICKET_PRICES[type],
      email,
      zip,
      mailingList
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));
    window.location.href = "confirmation.html";
  });

  updateTotal();
}