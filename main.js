document.getElementById("phpButton").addEventListener("click", async () => {
  const response = await fetch("spotify.php");
  const result = await response.text();
  document.getElementById("outputArea").value = result;
});
