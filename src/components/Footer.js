import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { 
  IconBrandInstagram, 
  IconBrandFacebook, 
  IconBrandWhatsapp,
  IconBrandTiktok 
} from '@tabler/icons-react';

export default function Footer() {
  const location = useLocation();
  const isMarketing = location.pathname === '/marketing';

  const mindntLinks = [
    {
      icon: <IconBrandInstagram size={24} />,
      href: "https://www.instagram.com/_mindnt/profilecard/?igsh=OTJodm85YmZvcjZo",
      label: "Instagram"
    },
    {
      icon: <IconBrandFacebook size={24} />,
      href: "https://www.facebook.com/mindntlabs/",
      label: "Facebook"
    },
    {
      icon: <IconBrandWhatsapp size={24} />,
      href: "https://wa.me/529993661475",
      label: "WhatsApp"
    },
    {
      icon: <IconBrandTiktok size={24} />,
      href: "https://tiktok.com/",
      label: "TikTok"
    }
  ];

  const marketingLinks = [
    {
      icon: <IconBrandInstagram size={24} />,
      href: "https://www.instagram.com/labdesign_mx?igsh=ODRtOXB0cHZicWM0",
      label: "Instagram"
    },
    {
      icon: <IconBrandFacebook size={24} />,
      href: "https://www.facebook.com/profile.php?id=100089847824811",
      label: "Facebook"
    },
    {
      icon: <IconBrandWhatsapp size={24} />,
      href: "https://wa.me/529995282560",
      label: "WhatsApp"
    },
    {
      icon: <IconBrandTiktok size={24} />,
      href: "https://tiktok.com/@mindntmarketing",
      label: "TikTok"
    }
  ];

  const socialLinks = isMarketing ? marketingLinks : mindntLinks;
  const footerBackground = isMarketing ? '#000000' : '#051527';

  return (
    <footer style={{ backgroundColor: footerBackground }} className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          <p className="text-white/50 text-sm text-center">
            © {new Date().getFullYear()} MindNT. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
