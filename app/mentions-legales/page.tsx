import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CNAPS_NUMBER, PHONE_STANDARD, EMAIL_CONTACT, ADDRESS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de la société Elvez, société de sécurité privée agréée CNAPS.",
};

export default function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow="Informations légales"
        title="Mentions légales"
        description="Informations relatives à l'éditeur du site et à l'exercice de l'activité de sécurité privée."
      />
      <section className="py-20 sm:py-28">
        <div className="container-elvez max-w-3xl space-y-10 text-[15px] leading-relaxed text-bone-muted">
          <div>
            <h2 className="font-display text-xl font-bold text-bone">Éditeur du site</h2>
            <p className="mt-3">
              Elvez Sécurité Privée — {ADDRESS}
              <br />
              Téléphone : {PHONE_STANDARD} — Email : {EMAIL_CONTACT}
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-bone">Autorisation d'exercice</h2>
            <p className="mt-3">
              Elvez est autorisée à exercer une activité privée de sécurité par le Conseil National des Activités
              Privées de Sécurité (CNAPS) sous le numéro {CNAPS_NUMBER}, conformément aux dispositions du Livre VI
              du Code de la sécurité intérieure.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-bone">Hébergement</h2>
            <p className="mt-3">
              Ce site est hébergé par un prestataire d'hébergement web. Les coordonnées complètes de l'hébergeur
              sont disponibles sur simple demande auprès de l'éditeur.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-bone">Données personnelles</h2>
            <p className="mt-3">
              Les informations recueillies via le formulaire de contact sont utilisées exclusivement pour le
              traitement de votre demande de devis ou d'information. Conformément au RGPD, vous disposez d'un
              droit d'accès, de rectification et de suppression de vos données en écrivant à {EMAIL_CONTACT}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
