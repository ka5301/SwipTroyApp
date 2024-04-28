const swip_troy_access = "swip_troy"

const setCookie = (name, value, expiresIn) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + expiresIn);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name) => {
  const cookieString = document.cookie;
  const cookies = cookieString.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].split('=');
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return null;
};

export {swip_troy_access,setCookie, getCookie}