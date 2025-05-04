export function createWhatsAppLink(message: string): string {
  const phoneNumber = "18572631670";

  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
