document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.feedback-form');
    const nameInput = form.querySelector('input[type="text"]');
    const phoneInput = form.querySelector('input[type="tel"]');
    const checkbox = form.querySelector('#data-policy');
  
    const errorName = form.querySelector('.errorname');
    const errorPhone = form.querySelector('.errorphone');
  
    function validateName() {
      const value = nameInput.value.trim();
  
      if (!value) {
        errorName.textContent = "Это поле обязательно для заполнения.";
        nameInput.classList.add('error');
        return false;
      }
  
      if (value.length < 2) {
        errorName.textContent = "Необходимо минимум 2 символа.";
        nameInput.classList.add('error');
        return false;
      }
  
      const validNamePattern = /^[a-zA-Zа-яА-ЯёЁ\s\-]+$/;
      if (!validNamePattern.test(value)) {
        errorName.textContent = "Имя содержит недопустимые символы.";
        nameInput.classList.add('error');
        return false;
      }
  
      errorName.textContent = "";
      nameInput.classList.remove('error');
      return true;
    }
  
    function validatePhone() {
      const value = phoneInput.value.trim();
  
      if (!value) {
        errorPhone.textContent = "Это поле обязательно для заполнения.";
        phoneInput.classList.add('error');
        return false;
      }
  
      const digits = value.replace(/\D/g, "");
      if (digits.length !== 11) {
        errorPhone.textContent = "Некорректный номер телефона.";
        phoneInput.classList.add('error');
        return false;
      }
  
      errorPhone.textContent = "";
      phoneInput.classList.remove('error');
      return true;
    }
  
    function validateCheckbox() {
      if (!checkbox.checked) {
        alert("Вы должны согласиться с политикой обработки персональных данных.");
        return false;
      }
      return true;
    }
  
    nameInput.addEventListener('input', validateName);
    phoneInput.addEventListener('input', validatePhone);
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const isNameValid = validateName();
      const isPhoneValid = validatePhone();
      const isCheckboxValid = validateCheckbox();
  
      if (isNameValid && isPhoneValid && isCheckboxValid) {
        alert("Форма успешно отправлена!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      }
    });
  });
  