const regex = {
  nameComplex: /^[a-zA-Z0-9 &éèêàâôûùïî'-]{2,40}$/,
  name: /^[a-zA-z '-]{2,20}$/,
  password: /[\w.-]{8,16}/,
  email: /[\w.-]+@[\w-']+\.\w{2,6}/,
  mobile: /^[\d]{10}$/,
  text: /[0-9a-zA-Z éèêàâôûùïî'-]{5,50}$/,
  city: /[0-9a-zA-Z éèêàâôûùïî'-]{2,50}$/,
  complement: /[0-9a-zA-Z éèêàâôûùïî'-]{0,50}$/,
  postal: /^[\d]{4,5}$/,
  matricule: /^[a-zA-Z0-9 .-]{9,18}$/,
  status: /^[a-zA-Z]{2,6}$/,
  role: /^[0-9]$/,
  message: /^[A-Za-z0-9 éèêàâôûùïî.'?!,@$#-_\n]{15,500}$/
}

module.exports = regex
