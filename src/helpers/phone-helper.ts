export const isPhoneValid = (phone: string) => /^d{9,15}$/.test(phone);

export function cleanPhone(phone: string, prefix = ""): string {
  phone = phone.replace(/\D+/g, "");

  if (phone.substr(0, 2) === "00") {
    phone = phone.substr(2);
  }

  if (phone.length === 10 && isPhoneValid(phone) && phone.substr(0, 1) === "9") {
    phone = "7" + phone; // default Russian code
  }

  if (phone.length === 11 && isPhoneValid(phone) && phone.substr(0, 1) === "8") {
    phone = "7" + phone.substr(1); // 8 -> default Russian code
  }

  return phone ? prefix + phone : "";
}
