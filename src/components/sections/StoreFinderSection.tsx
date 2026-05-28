"use client";

import { stores } from "@/data/stores";
import { motion } from "motion/react";
import { MapPin, MessageCircle } from "lucide-react";

// Atomic IconText Sub-component
function IconText({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 text-slate-600">
      <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
      <address className="not-italic text-sm leading-relaxed font-normal text-slate-600 break-words whitespace-pre-line">
        {text}
      </address>
    </div>
  );
}

// Atomic Button Sub-component
interface ButtonProps {
  href: string;
  label: string;
}

function WhatsAppButton({ href, label }: ButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className="premium-btn-green inline-flex items-center justify-center gap-2 w-full min-h-[48px] px-6 py-3 text-white font-semibold text-sm shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 cursor-pointer"
    >
      <MessageCircle className="w-5 h-5 shrink-0" />
      <span>{label}</span>
    </motion.a>
  );
}

// Parent Card Component
interface CardProps {
  name: string;
  address: string;
  whatsappUrl: string;
  whatsappLabel: string;
}

function LocationCard({ name, address, whatsappUrl, whatsappLabel }: CardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 120, damping: 15 }
        }
      }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="flex flex-col justify-between p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
          {name}
        </h3>
        <IconText text={address} />
      </div>

      <WhatsAppButton href={whatsappUrl} label={whatsappLabel} />
    </motion.div>
  );
}

// Section Wrapper Layout
export function StoreFinderSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="lojas" className="bg-slate-50 py-16 px-4 md:px-8 border-b border-slate-100">
      <div className="max-w-5xl mx-auto">

        {/* Refined Section Title with rounded 6px left accent line */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-1.5 h-8 bg-primary rounded-full shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight select-none">
            Nossas Unidades
          </h2>
          <div className="flex-grow h-[1px] bg-slate-200 rounded-full" />
        </motion.div>

        {/* Location Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [&>*:last-child:nth-child(3n+1)]:lg:col-start-2"
        >
          {stores.map((store) => (
            <LocationCard
              key={store.id}
              name={store.name}
              address={store.address}
              whatsappUrl={store.whatsappUrl}
              whatsappLabel={store.whatsappLabel}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
