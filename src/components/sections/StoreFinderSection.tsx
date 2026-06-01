"use client";

import { stores } from "@/data/stores";
import { motion } from "motion/react";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

function LocationCard({ name, street, cityState, hours, phone, whatsappUrl, pendingPhone }: typeof stores[number]) {
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
      className="flex flex-col p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <h3 className="text-lg font-bold text-slate-900 mb-4 tracking-tight">
        {name}
      </h3>

      <div className="flex flex-col gap-2.5 flex-1 mb-5">
        <div className="flex items-start gap-2.5">
          <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div className="text-sm text-slate-600 leading-snug">
            <p>{street}</p>
            <p className="text-slate-400 text-xs mt-0.5">{cityState}</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <Clock className="w-4 h-4 text-primary shrink-0" />
          <p className="text-sm text-slate-600">{hours}</p>
        </div>

        {phone && (
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <p className="text-sm text-slate-600">{phone}</p>
          </div>
        )}
      </div>

      {whatsappUrl ? (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="premium-btn-green inline-flex items-center justify-center gap-2 w-full min-h-[44px] px-6 py-2.5 text-white font-semibold text-sm shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>WhatsApp</span>
        </motion.a>
      ) : pendingPhone ? (
        <div className="inline-flex items-center justify-center gap-2 w-full min-h-[44px] px-6 py-2.5 bg-slate-100 text-slate-400 font-medium text-sm rounded-lg cursor-default select-none">
          <Phone className="w-4 h-4 shrink-0" />
          <span>Telefone a confirmar</span>
        </div>
      ) : null}
    </motion.div>
  );
}

export function StoreFinderSection() {
  return (
    <section id="lojas" className="bg-slate-50 py-16 px-4 md:px-8 border-b border-slate-100">
      <div className="max-w-5xl mx-auto">

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

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [&>*:last-child:nth-child(3n+1)]:lg:col-start-2"
        >
          {stores.map((store) => (
            <LocationCard key={store.id} {...store} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
