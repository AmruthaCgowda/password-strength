document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const progressBar = document.getElementById("progressBar");
    const strengthText = document.getElementById("strength");
    const charsCount = document.getElementById("chars");
  
    const lcIndicator = document.getElementById("lc");
    const ucIndicator = document.getElementById("uc");
    const numIndicator = document.getElementById("num");
    const symIndicator = document.getElementById("sym");
  
    passwordInput.addEventListener("input", () => {
      const password = passwordInput.value;
      charsCount.textContent = password.length;
  
      const hasLowerCase = /[a-z]/.test(password);
      const hasUpperCase = /[A-Z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
      lcIndicator.className = hasLowerCase ? "text-green-600" : "text-red-500";
      ucIndicator.className = hasUpperCase ? "text-green-600" : "text-red-500";
      numIndicator.className = hasNumber ? "text-green-600" : "text-red-500";
      symIndicator.className = hasSymbol ? "text-green-600" : "text-red-500";
  
      let strength = 0;
      if (hasLowerCase) strength++;
      if (hasUpperCase) strength++;
      if (hasNumber) strength++;
      if (hasSymbol) strength++;
      if (password.length >= 8) strength++;
  
      const progressPercent = (strength / 5) * 100;
      progressBar.style.width = `${progressPercent}%`;
  
      if (strength <= 2) {
        strengthText.textContent = "Weak";
        strengthText.className = "text-red-500";
        progressBar.className = "h-full bg-red-500 rounded transition-all duration-300";
      } else if (strength === 3 || strength === 4) {
        strengthText.textContent = "Moderate";
        strengthText.className = "text-yellow-500";
        progressBar.className = "h-full bg-yellow-500 rounded transition-all duration-300";
      } else {
        strengthText.textContent = "Strong";
        strengthText.className = "text-green-600";
        progressBar.className = "h-full bg-green-600 rounded transition-all duration-300";
      }
    });
  });
  