import Link from "next/link";
import { ShieldCheck, MapPin, Mail, PhoneCall, Linkedin, Facebook, Instagram } from "lucide-react";
import { cities, navServices, CNAPS_NUMBER, PHONE_STANDARD, PHONE_EMERGENCY, EMAIL_CONTACT, ADDRESS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="container-elvez py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-bone">
              <span className="flex h-9 w-9 items-center justify-center rounded-xs bg-amber text-ink-950">
                <ShieldCheck size={20} strokeWidth={2} aria-hidden="true" />
              </span>
              Elvez
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone-muted">
              Société de sécurité privée intervenant sur l'ensemble des Bouches-du-Rhône : BTP &amp; chantiers,
              événementiel, gardiennage tertiaire et industriel.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "#" },
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-bone-muted transition-colors duration-200 hover:border-amber/40 hover:text-amber"
                >
                  <Icon size={16} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-bone-faint">Nos services</p>
            <ul className="mt-4 space-y-3">
              {navServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-bone-muted transition-colors duration-200 hover:text-amber">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-bone-faint">Entreprise</p>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/a-propos" className="text-sm text-bone-muted transition-colors duration-200 hover:text-amber">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-bone-muted transition-colors duration-200 hover:text-amber">
                  Contact &amp; devis
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-sm text-bone-muted transition-colors duration-200 hover:text-amber">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-bone-faint">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-bone-muted">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-amber" aria-hidden="true" />
                {ADDRESS}
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneCall size={16} className="shrink-0 text-amber" aria-hidden="true" />
                <Link href={`tel:${PHONE_STANDARD.replace(/\s/g, "")}`} className="hover:text-amber">
                  {PHONE_STANDARD}
                </Link>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-amber" aria-hidden="true" />
                <Link href={`mailto:${EMAIL_CONTACT}`} className="hover:text-amber">
                  {EMAIL_CONTACT}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-bone-faint">
            Zone d'intervention — Bouches-du-Rhône (13)
          </p>
          <p className="mt-3 text-sm leading-relaxed text-bone-muted">
            {cities.join(" · ")} et communes environnantes.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-bone-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Elvez Sécurité Privée. Tous droits réservés.</p>
          <p>
            Société agréée CNAPS — Autorisation n° {CNAPS_NUMBER}. Activité exercée conformément au Livre VI du Code de
            la sécurité intérieure. Astreinte 24/7 : {PHONE_EMERGENCY}
          </p>
        </div>
      </div>
    </footer>
  );
}
