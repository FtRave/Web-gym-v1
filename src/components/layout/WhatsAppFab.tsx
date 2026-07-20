import { MessageCircle } from "lucide-react";
import { CONTACT } from "../../data/site";

export function WhatsAppFab() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-glow transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
