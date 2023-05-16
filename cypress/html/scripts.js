document.querySelector("[data-cy=cookie-trigger]").addEventListener("click", () => {
    document.cookie = "key1=value1; expires=Wed, 18 Dec 2024 12:00:00 UTC";
  });
  
  document.querySelector("[data-cy=cookie-def-set]").addEventListener("click", () => {
    document.cookie = "default=set; expires=Wed, 18 Dec 2024 12:00:00 UTC";
  });
  
  document.querySelector("[data-cy=cookie-modify]").addEventListener("click", () => {
    document.cookie = "default=modify; expires=Wed, 18 Dec 2024 12:00:00 UTC";
  });
  
  document.querySelector("[data-cy=set-ls]").addEventListener("click", () => {
    localStorage.setItem("key1", "blue");
    localStorage.setItem("key2", "red");
  });
  
  document.querySelector("[data-cy=set-ss]").addEventListener("click", () => {
    sessionStorage.setItem("key1", "blue");
    sessionStorage.setItem("key2", "red");
  });