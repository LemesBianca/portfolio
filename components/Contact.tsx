export default function Contact() {
  return (
    <section className="py-1 px-8">
      <div className="flex flex-wrap justify-center gap-20 md:gap-20">

        <a 
          href="https://github.com/LemesBianca"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-zinc-800 rounded-full text-zinc-300
                      hover:bg-white hover:text-black transition-all duration-300"
        >
          
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/bianca-lemess/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-zinc-800 rounded-full text-zinc-300
                      hover:bg-white hover:text-black transition-all duration-300"
        >
          LinkedIn
        </a>

        <a
          href="mailto:biancalemes.e@gmail.com"
          className="px-6 py-3 border border-zinc-800 rounded-full text-zinc-300
                      hover:bg-white hover:text-black transition-all duration-300"
        >
          E-mail
        </a>

        <a
          href="https://wa.me/5551981457787"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-zinc-800 rounded-full text-zinc-300
                      hover:bg-white hover:text-black transition-all duration-300"
        >
          WhatsApp
        </a>

      </div>
    </section>
  );
}