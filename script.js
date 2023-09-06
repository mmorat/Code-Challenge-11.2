const submit = document.querySelector("button[type='submit']")

function enviarForm() {
        const nombre = document.getElementById("name").value;
        const apellido = document.getElementById("surname").value;
        const date = document.getElementById("DOB").value;

        const object = {
          name : nombre,
          surname :  apellido,
          DOB : date,
        };
        
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: "POST",
            body: JSON.stringify(object),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));
    }


