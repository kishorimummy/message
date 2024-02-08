function sendMessage() {
  var post = {
    towhom: document.getElementById("to-whom").value,
    message: document.getElementById("message").value,
  };
  document.getElementById("message").value = "";
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
