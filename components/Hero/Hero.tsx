import css from "./Hero.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.heroContainer}>
        <h1>Your Moment of Tranquility</h1>
        <p>
          Experience the art of relaxation with our expert massage therapy
          services. Book your appointment today and let us help you unwind and
          rejuvenate.
        </p>
        <Link className={css.button} href="/booking">
          Book an Appointment
        </Link>
        <Link className={css.button} href="/services">
          Explore Services
        </Link>
      </div>
    </section>
  );
};
export default Hero;
