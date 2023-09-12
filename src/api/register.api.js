const register = async (nombre, apellido, email, password) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    firstName: nombre,
    lastName: apellido,
    email: email,
    role: "user",
    active: false,
    password: password,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  let response = await fetch("http://localhost:8080/api/v1/auth/register", requestOptions);
  let jsonData = await response.json();
  return jsonData;
};

export default register;
