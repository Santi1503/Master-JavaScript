window.addEventListener("load", () => {
    const validation = new JustValidate(".main_contact")
    let isValidate = false;

    validation
        .addField("#name", [
            {
                rule: "required",
                value: true,
                errorMessage: "Este campo es obligatorio"
            },
            {
                rule: "minLength",
                value: 3,
                errorMessage: "Este campo debe tener al menos 3 caracteres"
            },
            {
                rule: "maxLength",
                value: 15,
                errorMessage: "Este campo debe tener menos de 15 caracteres"
            },
        ])
        .addField("#surname", [
            {
                rule: "required",
                value: true,
                errorMessage: "Este campo es obligatorio"
            },
            {
                rule: "minLength",
                value: 3,
                errorMessage: "Este campo debe tener al menos 3 caracteres"
            },
            {
                rule: "maxLength",
                value: 30,
                errorMessage: "Este campo debe tener menos de 15 caracteres"
            },
        ])
        .addField("#email", [
            {
                rule: "required",
                value: true,
                errorMessage: "Este campo es obligatorio"
            },
            {
                rule: "email",
                errorMessage: "Este campo debe tener un email valido"
            },
        ])
        .addField("#gender", [
            {
                rule: "required",
                value: true,
                errorMessage: "Este campo es obligatorio"
            }
        ])
        .addField("#date", [
            {
                rule: "required",
                value: true,
                errorMessage: "Este campo es obligatorio"
            },
        ])
        .onSuccess(() => {
            isValidate = true;

            alert("El formulario se ha enviado correctamente")
        })
})