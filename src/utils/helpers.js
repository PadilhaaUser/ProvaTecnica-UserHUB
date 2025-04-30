export const formatPhone = (phone) => {
  if (!phone) return "N/A";

  const extensionMatch = phone.match(/(?:x|ext|\.)\s*(\d+)$/i);
  let extension = "";
  let mainNumber = phone;

  if (extensionMatch) {
    extension = extensionMatch[1];
    mainNumber = phone.substring(0, extensionMatch.index);
  }

  const cleaned = mainNumber.replace(/\D+/g, "");

  let formatted = mainNumber;

  if (cleaned.length === 10) {
    formatted = cleaned.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  } else if (cleaned.length === 11) {
    formatted = cleaned.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }

  if (extension) {
    return `${formatted} (ramal: ${extension})`;
  }

  return formatted;
};

export const filterUsers = (users, searchTerm) => {
  if (!searchTerm) return users;
  return users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const getUsernameFromEmail = (email) => {
  return email ? email.split("@")[0] : "";
};

export const formatAddress = (address) => {
  if (!address) return "N/A";
  return `${address.street}, ${address.suite} - ${address.city} (${address.zipcode})`;
};
