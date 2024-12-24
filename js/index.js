document.addEventListener("DOMContentLoaded", async () => {
  const { supabase } = await import("./config.js");

  async function login() {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const mensajeError = document.querySelector(".mensaje-error");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: username,
        password: password,
      });

      if (error) {
        mensajeError.style.display = "block";
        return;
      }

      if (data.user) {
        console.log("Login exitoso:", data);
        window.location.href = "../calendario.html";
      }
    } catch (err) {
      mensajeError.style.display = "block";
    }
  }

  document.querySelector("#loginButton").addEventListener("click", login);
});
